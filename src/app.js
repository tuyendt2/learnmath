// Học Toán lớp 4–12: an offline study app. No framework; routes live in the URL hash.
// #/ lists the courses; #/<courseId>/... is one course (e.g. #/lop6-co-ban/t/phan-so/bai/3).
(() => {
  "use strict";
  const INDEX = window.APP_INDEX;
  const COURSE = Object.fromEntries(INDEX.courses.map((c) => [c.id, c]));
  const LOADED = (window.APP_COURSE ||= {});
  // The open course. B is the hash prefix of its routes.
  let C = null, TOPICS = [], EXAMS = null, TOPIC = {}, ALL_CARDS = [], B = "#/";
  function useCourse(id) {
    if (C && C.id === id) return;
    const d = LOADED[id];
    C = { id, meta: COURSE[id] };
    TOPICS = d.topics;
    EXAMS = d.exams;
    TOPIC = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
    ALL_CARDS = TOPICS.flatMap((t) => t.cards.map((c) => ({ ...c, t })));
    B = `#/${id}/`;
    session = null;
    S.prefs.last = id;
    save();
  }
  const loading = {};
  function loadCourse(id) {
    return (loading[id] ||= new Promise((res, rej) => {
      if (LOADED[id]) return res();
      const sc = document.createElement("script");
      sc.src = COURSE[id].file;
      sc.onload = () => (LOADED[id] ? res() : rej());
      sc.onerror = () => { delete loading[id]; sc.remove(); rej(); };
      document.head.appendChild(sc);
    }));
  }
  const app = document.getElementById("app");
  const DAY = 86400000;
  const BOX_DAYS = [0, 1, 3, 7, 14, 30]; // Leitner box -> days until next review
  const ROUND = 20; // cards per review round

  // ---------- progress, stored on this device only ----------
  const KEY = "learnmath-progress-v1";
  let S;
  try { S = JSON.parse(localStorage.getItem(KEY)); } catch { S = null; }
  if (!S) {
    S = {};
    // Bring over progress from the earlier Toán HSG 8–9 app (same origin).
    try {
      const old = JSON.parse(localStorage.getItem("toan-hsg-progress-v1"));
      if (old) {
        const pre = (o) => Object.fromEntries(Object.entries(o || {}).map(([k, v]) => [`lop8-9-nang-cao:${k}`, v]));
        S = { cards: pre(old.cards), problems: pre(old.problems), exams: pre(old.exams), prefs: old.prefs || {} };
      }
    } catch {}
  }
  S.cards ||= {};
  S.problems ||= {};
  S.exams ||= {};
  S.prefs ||= {};
  const save = () => localStorage.setItem(KEY, JSON.stringify(S));
  const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); };
  const cardState = (c) => S.cards[`${C.id}:${c.t.id}:${c.id}`];
  const probState = (t, p) => S.problems[`${C.id}:${t.id}:${p.n}`];
  const isNew = (c) => !cardState(c);
  const isDueReview = (c) => { const st = cardState(c); return st && st.due <= today(); };
  const needsRedo = (t, p) => { const st = probState(t, p); return st && st.review && st.review <= today(); };
  const cardsOf = (t) => (t ? ALL_CARDS.filter((c) => c.t === t) : ALL_CARDS);

  function applyPrefs() {
    const theme = S.prefs.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.font = String(S.prefs.font || 0);
    document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#16213a" : "#0b3d91";
  }
  applyPrefs();

  // ---------- helpers ----------
  const stars = (n) => "★".repeat(n) + "☆".repeat(4 - n);
  const num = (x) => String(x).replace(".", ",");
  const date = (ms) => new Date(ms).toLocaleDateString("vi-VN");
  const STATUS = {
    solo: { label: "Tự làm được", cls: "solo" },
    hint: { label: "Nhờ gợi ý", cls: "hint" },
    fail: { label: "Chưa làm được", cls: "fail" },
  };
  const statusBadge = (t, p) => {
    const st = probState(t, p);
    if (!st) return "";
    return `<span class="st ${STATUS[st.status].cls}">${needsRedo(t, p) ? "Làm lại" : STATUS[st.status].label}</span>`;
  };
  const header = (title, back) => `
    <header class="top">
      ${back ? `<a href="${back}" aria-label="Quay lại">‹</a>` : `<span style="width:8px"></span>`}
      <h1>${title}</h1>
      <button data-act="font" aria-label="Cỡ chữ">Aa</button>
      <button data-act="theme" aria-label="Đổi giao diện sáng/tối">◐</button>
    </header>`;
  const clock = (ms) => {
    const s = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
    const mm = String(m).padStart(2, "0"), ss = String(r).padStart(2, "0");
    return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
  };
  const topicStats = (t) => {
    const done = t.problems.filter((p) => probState(t, p)).length;
    const solo = t.problems.filter((p) => probState(t, p)?.status === "solo").length;
    const redo = t.problems.filter((p) => needsRedo(t, p)).length;
    const cs = cardsOf(t);
    return { done, solo, redo, due: cs.filter(isDueReview).length, fresh: cs.filter(isNew).length };
  };
  const cardCountText = (due, fresh) =>
    [due ? `${due} đến hạn` : "", fresh ? `${fresh} mới` : ""].filter(Boolean).join(" · ") || "đã ôn xong hôm nay";

  // Typeset every formula placeholder that is still raw TeX.
  function typeset(root) {
    if (!window.katex) return;
    for (const el of root.querySelectorAll("span.m:not(.k)")) {
      const tex = el.textContent;
      try {
        katex.render(tex, el, { displayMode: el.classList.contains("d"), throwOnError: false, strict: "ignore" });
      } catch { el.textContent = tex; }
      el.classList.add("k");
    }
  }

  // ---------- home ----------
  function courseHome() {
    const totalProblems = TOPICS.reduce((a, t) => a + t.problems.length, 0);
    const solo = TOPICS.reduce((a, t) => a + topicStats(t).solo, 0);
    const done = TOPICS.reduce((a, t) => a + topicStats(t).done, 0);
    const learned = ALL_CARDS.filter((c) => !isNew(c)).length;
    const due = ALL_CARDS.filter(isDueReview).length;
    const fresh = ALL_CARDS.filter(isNew).length;
    const redo = TOPICS.flatMap((t) => t.problems.filter((p) => needsRedo(t, p)).map((p) => ({ t, p })));
    const examsDone = EXAMS ? EXAMS.list.filter((e) => S.exams[examKey(e.n)]?.history?.length).length : 0;
    return `${header(C.meta.title, "#/")}
    <main>
      <div class="card">
        <div class="grid3">
          <div><b>${done}</b><span>/${totalProblems} bài đã làm</span></div>
          <div><b>${learned}</b><span>/${ALL_CARDS.length} thẻ đã học</span></div>
          <div><b>${examsDone}</b><span>/${EXAMS ? EXAMS.list.length : 0} đề đã làm</span></div>
        </div>
        <div class="progress" title="Tự làm được"><div style="width:${(100 * solo) / totalProblems}%"></div></div>
        <div class="small muted" style="margin-top:4px">Tự làm được ${solo}/${totalProblems} bài</div>
      </div>
      <a class="tile hero" href="${B}on-tap"><span class="ico">🃏</span>
        <div><b>Ôn thẻ hôm nay</b><span>${cardCountText(due, fresh)}</span></div>
        ${due ? `<span class="badge-count">${due}</span>` : ""}</a>
      ${redo.length ? `<h2>Bài đến hạn làm lại</h2><div class="list plist">${redo
        .slice(0, 5)
        .map(({ t, p }) => `<a href="${B}t/${t.id}/bai/${p.n}"><span class="pn">${t.icon}</span><span class="pt"><b>${t.short}</b> · Bài ${p.n}</span><span>${statusBadge(t, p)}</span></a>`)
        .join("")}</div>${redo.length > 5 ? `<p class="small muted">… và ${redo.length - 5} bài khác.</p>` : ""}` : ""}
      <h2>Chủ đề</h2>
      <div class="tiles">
        ${TOPICS.map((t) => {
          const s = topicStats(t);
          return `<a class="tile" href="${B}t/${t.id}"><span class="ico">${t.icon}</span>
            <div class="grow"><span>Chủ đề ${t.number}</span><b>${t.short}</b>
              <div class="progress thin"><div style="width:${(100 * s.solo) / t.problems.length}%"></div></div></div>
            ${s.redo ? `<span class="badge-count warn">${s.redo} làm lại</span>` : ""}</a>`;
        }).join("")}
        ${EXAMS ? `<a class="tile" href="${B}thi"><span class="ico">📝</span>
          <div class="grow"><span>Luyện đề</span><b>${EXAMS.title}</b><span>${EXAMS.list.length} đề × 10 câu · ${EXAMS.minutes} phút</span></div></a>` : ""}
      </div>
      <h2>Cách dùng</h2>
      <div class="card content small">
        <ol>
          <li><b>Thẻ ghi nhớ:</b> mỗi ngày 5–10 phút. Thẻ nhớ rồi sẽ hẹn lại sau 1, 3, 7, 14, 30 ngày.</li>
          <li><b>Bài tập:</b> chép đề ra giấy và tự làm trước. Bí thì mở <i>ý tưởng</i>, rồi <i>gợi ý 1</i>, <i>gợi ý 2</i>, cuối cùng mới xem lời giải.</li>
          <li>Làm xong, tự đánh giá. Bài "nhờ gợi ý" hẹn làm lại sau 7 ngày, bài "chưa làm được" sau 3 ngày.</li>
          <li><b>${EXAMS ? EXAMS.title : "Đề"}:</b> làm trên giấy trong ${EXAMS ? EXAMS.minutes : 150} phút, app bấm giờ. Nộp bài rồi tự chấm từng câu theo lời giải.</li>
        </ol>
        <p class="muted">Tiến độ chỉ lưu trên máy này, không cần tài khoản.</p>
      </div>
      <div class="foot">Cập nhật ${INDEX.built} · <a href="#/">Đổi lớp</a></div>
    </main>`;
  }

  // ---------- course list ----------
  const GRADE_ICONS = { 4: "🐣", 5: "🌱", 6: "🌿", 7: "🌳", "8-9": "🏆", 10: "🚀", 11: "🛰️", 12: "🎓" };
  function courseProgress(id) {
    const pre = id + ":";
    const done = Object.keys(S.problems).filter((k) => k.startsWith(pre)).length;
    return done;
  }
  function courseList() {
    const groups = [];
    for (const c of INDEX.courses) {
      let g = groups.find((x) => x.grade === c.grade);
      if (!g) groups.push((g = { grade: c.grade, label: c.gradeLabel, list: [] }));
      g.list.push(c);
    }
    const last = COURSE[S.prefs.last];
    return `${header("Học Toán lớp 4–12")}
    <main>
      ${last ? `<a class="tile hero" href="#/${last.id}"><span class="ico">${GRADE_ICONS[last.grade] || "📘"}</span>
        <div><b>Học tiếp: ${last.title}</b><span>${courseProgress(last.id)}/${last.problems} bài đã làm</span></div></a>` : ""}
      <p class="muted small">Mỗi lớp có phần <b>Cơ bản</b> bám sách giáo khoa và phần <b>Nâng cao</b> bồi dưỡng học sinh giỏi. Mỗi phần có kiến thức, thẻ ghi nhớ, bài tập có gợi ý từng bước và đề luyện bấm giờ.</p>
      ${groups.map((g) => `<h2>${GRADE_ICONS[g.grade] || "📘"} ${g.label}</h2>
        <div class="tiles">${g.list.map((c) => {
          const done = courseProgress(c.id);
          return `<a class="tile" href="#/${c.id}"><span class="ico">${c.part === "co-ban" ? "📗" : "📕"}</span>
            <div class="grow"><b>${c.partLabel}</b><span>${c.sub}</span>
              <span class="small muted">${c.topics} chủ đề · ${c.problems} bài · ${c.exams} đề</span>
              ${done ? `<div class="progress thin"><div style="width:${(100 * done) / c.problems}%"></div></div>` : ""}</div></a>`;
        }).join("")}</div>`).join("")}
      <details class="k"><summary>📲 Cài lên màn hình chính</summary>
        <div class="content small">
          <p id="install-slot"></p>
          <p><b>Android (Chrome):</b> bấm menu ⋮ → <i>Thêm vào màn hình chính</i> (hoặc <i>Cài đặt ứng dụng</i>).</p>
          <p><b>iPhone (Safari):</b> bấm nút Chia sẻ ⬆︎ → <i>Thêm vào MH chính</i>.</p>
          <p>Sau khi cài, app mở toàn màn hình và dùng được cả khi không có mạng.</p>
        </div>
      </details>
      <div class="foot">Cập nhật ${INDEX.built} · <button data-act="reset">Xóa tiến độ</button></div>
    
    </main>`;
  }

  // ---------- topic ----------
  function topicHome(t) {
    const s = topicStats(t);
    return `${header(t.short, B)}
    <main>
      <div class="card">
        <div class="muted small">Chủ đề ${t.number}</div>
        <h2 style="margin:.1em 0 .3em">${t.title}</h2>
        <div class="small muted">Đã làm ${s.done}/${t.problems.length} bài · tự làm được ${s.solo}</div>
        <div class="progress"><div style="width:${(100 * s.solo) / t.problems.length}%"></div></div>
      </div>
      <div class="tiles">
        <a class="tile" href="${B}t/${t.id}/kien-thuc"><span class="ico">📘</span>
          <div><b>Kiến thức</b><span>${t.knowledge.length} mục</span></div></a>
        <a class="tile" href="${B}t/${t.id}/the"><span class="ico">🃏</span>
          <div><b>Thẻ ghi nhớ</b><span>${t.cards.length} thẻ · ${cardCountText(s.due, s.fresh)}</span></div>
          ${s.due ? `<span class="badge-count">${s.due}</span>` : ""}</a>
        <a class="tile" href="${B}t/${t.id}/bai"><span class="ico">✏️</span>
          <div><b>Bài tập</b><span>${t.problems.length} bài, gợi ý từng bước</span></div>
          ${s.redo ? `<span class="badge-count warn">${s.redo} làm lại</span>` : ""}</a>
      </div>
    </main>`;
  }

  function knowledge(t) {
    return `${header("Kiến thức", `${B}t/${t.id}`)}
    <main>
      <h2 style="margin-top:.4em">${t.title}</h2>
      ${t.intro.trim() ? `<div class="card content">${t.intro}</div>` : ""}
      ${t.knowledge
        .map((k, i) => `<details class="k"><summary><span class="num">${i + 1}</span>${k.title}</summary>
          <div class="content">${k.html}</div></details>`)
        .join("")}
      <div class="nav"><a class="btn primary" href="${B}t/${t.id}/the">Ôn bằng thẻ ghi nhớ →</a></div>
    </main>`;
  }

  // ---------- flashcards ----------
  // A round: due reviews first, then new cards, at most ROUND cards.
  let session = null;
  function startSession(scope, all) {
    const t = scope === "all" ? null : TOPIC[scope];
    const pool = cardsOf(t);
    const pick = all ? [...pool].sort(() => Math.random() - 0.5) : [...pool.filter(isDueReview), ...pool.filter(isNew)];
    const queue = pick.slice(0, ROUND);
    session = { scope, queue, total: queue.length, flipped: false, done: 0 };
  }
  function cards(scope) {
    if (!session || session.scope !== scope) startSession(scope, false);
    const t = scope === "all" ? null : TOPIC[scope];
    const back = t ? `${B}t/${t.id}` : B;
    const top = `${header(t ? `Thẻ: ${t.short}` : "Ôn thẻ hôm nay", back)}<main>`;
    if (!session.queue.length) {
      const pool = cardsOf(t);
      const left = pool.filter(isDueReview).length + pool.filter(isNew).length;
      const next = pool.map((c) => cardState(c)?.due).filter((d) => d > today()).sort((a, b) => a - b)[0];
      return `${top}
        <div class="card" style="text-align:center">
          <div style="font-size:2.4em">🎉</div>
          <h2>Xong một lượt</h2>
          <p class="muted">${session.done ? `Bạn vừa ôn ${session.done} thẻ.` : "Không có thẻ nào đến hạn."}
          ${left ? `<br>Còn ${left} thẻ chưa ôn hôm nay.` : next ? `<br>Lượt ôn tiếp theo: ${date(next)}.` : ""}</p>
          <div class="stack">
            ${left ? `<button class="btn primary" data-act="next-round">Ôn tiếp ${Math.min(left, ROUND)} thẻ</button>` : ""}
            <button class="btn" data-act="all-cards">Ôn thêm ${Math.min(pool.length, ROUND)} thẻ ngẫu nhiên</button>
            <a class="btn" href="${back}">Quay lại</a>
          </div>
        </div></main>`;
    }
    const c = session.queue[0];
    const st = cardState(c);
    return `${top}
      <div class="row small muted" style="justify-content:space-between">
        <span>Còn ${session.queue.length} thẻ</span><span>${st ? `Hộp ${st.box}/5` : "Thẻ mới"}</span></div>
      <div class="card flash" data-act="flip">
        <div class="group">${t ? "" : `${c.t.icon} ${c.t.short} · `}${c.group}</div>
        <div class="front content">${c.front}</div>
        ${session.flipped ? `<div class="back content">${c.back}</div>` : `<div class="tap">Tự nhớ lại câu trả lời, rồi chạm để lật thẻ</div>`}
      </div>
      ${session.flipped
        ? `<div class="row"><button class="btn bad" data-act="again">Chưa nhớ</button>
           <button class="btn ok" data-act="good">Nhớ rồi</button></div>`
        : `<button class="btn primary block" data-act="flip">Lật thẻ</button>`}
    </main>`;
  }
  function rateCard(good) {
    const c = session.queue.shift();
    const key = `${C.id}:${c.t.id}:${c.id}`;
    const st = S.cards[key] || { box: 0 };
    if (good) {
      const box = Math.min(st.box + 1, 5);
      S.cards[key] = { box, due: today() + BOX_DAYS[box] * DAY };
      session.done++;
    } else {
      S.cards[key] = { box: 1, due: today() };
      session.queue.push(c); // show it again later in this round
    }
    session.flipped = false;
    save();
  }

  // ---------- problems ----------
  function problemList(t) {
    const redo = t.problems.filter((p) => needsRedo(t, p));
    const row = (p) => `<a href="${B}t/${t.id}/bai/${p.n}">
        <span class="pn">Bài ${p.n}</span>
        <span class="pt">${p.tag ? `<b class="small">${p.tag}</b>` : ""}<div class="content">${p.statement}</div></span>
        <span style="text-align:right"><span class="stars">${stars(p.level)}</span><br>${statusBadge(t, p)}</span></a>`;
    return `${header(`Bài tập: ${t.short}`, `${B}t/${t.id}`)}
    <main>
      ${redo.length ? `<h2>Đến hạn làm lại</h2><div class="list plist">${redo.map(row).join("")}</div>` : ""}
      <h2>Tất cả bài</h2>
      <div class="list plist">${t.problems.map(row).join("")}</div>
    </main>`;
  }

  // Per-problem view state (reset when another problem opens).
  let view = { key: "", opened: 0, open: new Set() };
  const revealBlock = (id, title, html, cls = "") =>
    `<div class="reveal ${cls} ${view.open.has(id) ? "open" : ""}"><button data-act="reveal" data-id="${id}">${title}</button>
     <div class="content">${html}</div></div>`;
  function problem(t, n) {
    const i = t.problems.findIndex((p) => p.n === n);
    if (i < 0) return problemList(t);
    const p = t.problems[i];
    const key = `${C.id}:${t.id}:${n}`;
    if (view.key !== key) view = { key, opened: Date.now(), open: new Set() };
    const st = probState(t, p);
    const prev = t.problems[i - 1], next = t.problems[i + 1];
    return `${header(`${t.short} · Bài ${p.n}`, `${B}t/${t.id}/bai`)}
    <main>
      <div class="ptitle"><h2>Bài ${p.n}${p.tag ? ` <span class="muted small">(${p.tag})</span>` : ""}</h2>
        <span class="stars">${stars(p.level)}</span><span class="timer" id="timer">⏱ ${clock(Date.now() - view.opened)}</span></div>
      <div class="card content">${p.statement}</div>
      ${st ? `<p class="small muted">Lần trước: ${STATUS[st.status].label} (${date(st.at)})${st.review ? ` · hẹn làm lại ${date(st.review)}` : ""}</p>` : `<p class="notice">Chép đề ra giấy và tự làm ít nhất 20 phút trước khi mở gợi ý.</p>`}
      ${p.figures ? revealBlock("fig", "📐 Hình vẽ (tự vẽ trước rồi mới mở)", p.figures, "figblk") : ""}
      ${revealBlock("idea", "💡 Ý tưởng chính", p.idea, "idea")}
      ${p.hints.map((h, k) => revealBlock(`h${k}`, `🔎 Gợi ý ${k + 1}`, h)).join("")}
      ${revealBlock("sol", "📖 Lời giải đầy đủ", p.solution, "sol")}
      <h2>Bạn làm bài này thế nào?</h2>
      <div class="stack">
        <button class="btn ok" data-act="rate" data-v="solo">✓ Tự làm được</button>
        <button class="btn warn" data-act="rate" data-v="hint">Làm được nhờ gợi ý (làm lại sau 7 ngày)</button>
        <button class="btn bad" data-act="rate" data-v="fail">Chưa làm được (làm lại sau 3 ngày)</button>
      </div>
      <div class="nav">
        ${prev ? `<a class="btn" href="${B}t/${t.id}/bai/${prev.n}">‹ Bài ${prev.n}</a>` : ""}
        ${next ? `<a class="btn" href="${B}t/${t.id}/bai/${next.n}">Bài ${next.n} ›</a>` : `<a class="btn" href="${B}t/${t.id}/bai">Danh sách</a>`}
      </div>
    </main>`;
  }

  // ---------- mock exams ----------
  const examLimit = () => EXAMS.minutes * 60000;
  const examKey = (n) => `${C.id}:${n}`;
  const examState = (n) => (S.exams[examKey(n)] ||= { history: [] });
  const examScore = (st) => Object.values(st.scores || {}).reduce((a, b) => a + b, 0);
  // An attempt whose time ran out counts as submitted at the deadline.
  function examPhase(n) {
    const st = examState(n);
    if (!st.start) return "idle";
    if (!st.end && Date.now() - st.start >= examLimit()) { st.end = st.start + examLimit(); save(); }
    return st.end ? "done" : "running";
  }
  function examList() {
    return `${header(EXAMS.title, B)}
    <main>
      <details class="k"><summary>📋 Cách luyện đề hiệu quả</summary><div class="content small">${EXAMS.tips}</div></details>
      <div class="list elist">
        ${EXAMS.list.map((e) => {
          const st = S.exams[examKey(e.n)] || { history: [] };
          const phase = st.start ? (st.end || Date.now() - st.start >= examLimit() ? "done" : "running") : "idle";
          const best = st.history?.length ? Math.max(...st.history.map((h) => h.score)) : null;
          const status = phase === "running" ? `<span class="st hint">Đang làm</span>`
            : phase === "done" && Object.keys(st.scores || {}).length < e.questions.length ? `<span class="st hint">Chưa chấm xong</span>`
            : best !== null ? `<span class="st solo">${num(best)}/10</span>` : "";
          return `<a href="${B}thi/${e.n}"><span class="pn">Đề ${e.n}</span>
            <span class="pt small muted">${e.note}</span><span>${status}</span></a>`;
        }).join("")}
      </div>
    </main>`;
  }
  function exam(n) {
    const e = EXAMS.list.find((x) => x.n === n);
    if (!e) return examList();
    const st = examState(n);
    const phase = examPhase(n);
    const top = `${header(`${EXAMS.title.replace(/^Đề/, "Đề")} · số ${n}`, `${B}thi`)}<main>`;
    if (phase === "idle") {
      return `${top}
        <div class="card">
          <h2 style="margin-top:0">Đề ${n}</h2>
          <p class="small muted">${e.note}</p>
          <p>${e.questions.length} câu, mỗi câu 1 điểm · <b>${EXAMS.minutes} phút</b>.</p>
          <p class="notice">Chuẩn bị giấy bút, làm như thi thật. Đồng hồ vẫn chạy nếu bạn thoát app; mở lại đề để tiếp tục.</p>
          <button class="btn primary block" data-act="exam-start">Bắt đầu làm bài</button>
        </div>
        ${historyBlock(st)}
      </main>`;
    }
    if (phase === "running") {
      return `${top}
        <div class="countdown" id="countdown">⏳ Còn lại <b>${clock(examLimit() - (Date.now() - st.start))}</b></div>
        ${e.questions.map((q) => `<div class="card exam-q"><div class="q-head">Câu ${q.n}${q.tag ? ` <span class="muted small">· ${q.tag}</span>` : ""}</div>
          <div class="content">${q.statement}</div></div>`).join("")}
        <button class="btn primary block" data-act="exam-submit">Nộp bài</button>
        <p class="small muted" style="text-align:center">Nộp bài xong mới xem được lời giải.</p>
      </main>`;
    }
    const scored = Object.keys(st.scores || {}).length;
    const total = examScore(st);
    const used = Math.min(st.end - st.start, examLimit());
    return `${top}
      <div class="card scorecard">
        <div><b>${num(total)}</b><span>/10 điểm</span></div>
        <div class="small muted">Đã chấm ${scored}/${e.questions.length} câu · làm trong ${clock(used)}</div>
      </div>
      <p class="notice">Đối chiếu bài làm với lời giải và tự chấm từng câu: 0, ½ hoặc 1 điểm.</p>
      ${e.questions.map((q) => {
        const sc = st.scores?.[q.n];
        const t = TOPIC[q.topic];
        return `<div class="card exam-q"><div class="q-head">Câu ${q.n}${q.tag ? ` <span class="muted small">· ${q.tag}</span>` : ""}</div>
          <div class="content">${q.statement}</div>
          ${q.figures ? revealBlock(`e${n}f${q.n}`, "📐 Hình vẽ", q.figures, "figblk") : ""}
          ${revealBlock(`e${n}q${q.n}`, "📖 Lời giải", q.solution, "sol")}
          <div class="scores">${[0, 0.5, 1].map((v) => `<button class="btn ${sc === v ? "on" : ""}" data-act="score" data-q="${q.n}" data-v="${v}">${v === 0.5 ? "½" : v} đ</button>`).join("")}</div>
          ${sc !== undefined && sc < 1 && t ? `<a class="small" href="${B}t/${t.id}">Ôn lại chủ đề ${t.number}: ${t.short} →</a>` : ""}
        </div>`;
      }).join("")}
      <button class="btn block" data-act="exam-reset">Làm lại đề này</button>
      ${historyBlock(st)}
    </main>`;
  }
  function historyBlock(st) {
    if (!st.history?.length) return "";
    return `<h2>Các lần đã làm</h2><div class="list plist">${st.history
      .slice().reverse()
      .map((h) => `<div class="hrow"><span>${date(h.start)}</span><span class="muted small">${clock(h.used)}</span><b>${num(h.score)}/10</b></div>`)
      .join("")}</div>`;
  }
  // Keep one history entry per attempt, updated as scores change.
  function recordExam(n) {
    const st = examState(n);
    const e = EXAMS.list.find((x) => x.n === n);
    if (Object.keys(st.scores || {}).length < e.questions.length) return;
    const entry = { start: st.start, used: Math.min(st.end - st.start, examLimit()), score: examScore(st) };
    const i = st.history.findIndex((h) => h.start === st.start);
    if (i >= 0) st.history[i] = entry; else st.history.push(entry);
  }

  // ---------- router ----------
  let tick = null;
  function route() {
    clearInterval(tick);
    const h = location.hash.replace(/^#/, "") || "/";
    const all = h.split("/").filter(Boolean);
    let html, timer = null;
    if (all[0] && COURSE[all[0]] && !LOADED[all[0]]) {
      app.innerHTML = `${header("Đang tải…", "#/")}<main><p class="muted">Đang tải ${COURSE[all[0]].title}…</p></main>`;
      const want = location.hash;
      loadCourse(all[0]).then(
        () => { if (location.hash === want) route(); },
        () => { app.innerHTML = `${header("Không tải được", "#/")}<main><p>Không tải được nội dung. Hãy kiểm tra kết nối mạng rồi thử lại.</p><button class="btn primary" onclick="location.reload()">Thử lại</button></main>`; },
      );
      return;
    }
    if (!all[0] || !COURSE[all[0]]) {
      if (all.length) { location.replace("#/"); return; }
      session = null;
      app.innerHTML = courseList();
      showInstall();
      return;
    }
    useCourse(all[0]);
    const parts = all.slice(1);
    if (parts[0] === "on-tap") html = cards("all");
    else if (parts[0] === "t" && TOPIC[parts[1]]) {
      const t = TOPIC[parts[1]];
      if (parts[2] === "kien-thuc") html = knowledge(t);
      else if (parts[2] === "the") html = cards(t.id);
      else if (parts[2] === "bai" && parts[3]) { html = problem(t, +parts[3]); timer = "problem"; }
      else if (parts[2] === "bai") html = problemList(t);
      else html = topicHome(t);
    } else if (parts[0] === "thi" && EXAMS) {
      if (parts[1]) { html = exam(+parts[1]); timer = "exam"; }
      else html = examList();
    } else html = courseHome();
    if (!(parts[0] === "on-tap" || parts[2] === "the")) session = null; // leaving a deck ends the round
    app.innerHTML = html;
    typeset(app);
    if (timer === "problem") {
      tick = setInterval(() => {
        const el = document.getElementById("timer");
        if (el) el.textContent = "⏱ " + clock(Date.now() - view.opened);
      }, 1000);
    } else if (timer === "exam") {
      const n = +parts[1];
      tick = setInterval(() => {
        const st = S.exams[examKey(n)];
        const el = document.getElementById("countdown");
        if (!el || !st?.start || st.end) return;
        const left = examLimit() - (Date.now() - st.start);
        if (left <= 0) { alert("Hết giờ làm bài. Bài của bạn đã được nộp."); rerender(); return; }
        el.innerHTML = `⏳ Còn lại <b>${clock(left)}</b>`;
        el.classList.toggle("late", left < 15 * 60000);
      }, 1000);
    }
  }
  function rerender() {
    const y = scrollY;
    route();
    scrollTo(0, y);
  }

  app.addEventListener("click", (e) => {
    const el = e.target.closest("[data-act]");
    if (!el) return;
    const act = el.dataset.act;
    const parts = location.hash.replace(/^#/, "").split("/").filter(Boolean).slice(1);
    if (act === "theme") {
      S.prefs.theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      save(); applyPrefs();
    } else if (act === "font") {
      S.prefs.font = ((S.prefs.font || 0) + 1) % 3;
      save(); applyPrefs();
    } else if (act === "flip") {
      if (!session.flipped) { session.flipped = true; rerender(); }
    } else if (act === "again" || act === "good") {
      rateCard(act === "good");
      scrollTo(0, 0); route();
    } else if (act === "next-round") {
      startSession(session.scope, false); route();
    } else if (act === "all-cards") {
      startSession(session.scope, true); route();
    } else if (act === "reveal") {
      const id = el.dataset.id;
      if (id === "sol" && !view.open.has(id)) {
        const mins = (Date.now() - view.opened) / 60000;
        if (mins < 10 && !confirm(`Bạn mới nghĩ ${Math.max(1, Math.round(mins))} phút. Vẫn xem lời giải đầy đủ?`)) return;
      }
      view.open.has(id) ? view.open.delete(id) : view.open.add(id);
      el.parentElement.classList.toggle("open");
    } else if (act === "rate") {
      const t = TOPIC[parts[1]];
      const n = +parts[3];
      const v = el.dataset.v;
      const days = v === "hint" ? 7 : v === "fail" ? 3 : 0;
      S.problems[`${C.id}:${t.id}:${n}`] = { status: v, at: Date.now(), review: days ? today() + days * DAY : null };
      save();
      const i = t.problems.findIndex((p) => p.n === n);
      location.hash = t.problems[i + 1] ? `${B}t/${t.id}/bai/${t.problems[i + 1].n}` : `${B}t/${t.id}/bai`;
    } else if (act === "exam-start") {
      const st = examState(+parts[1]);
      Object.assign(st, { start: Date.now(), end: null, scores: {} });
      save(); scrollTo(0, 0); route();
    } else if (act === "exam-submit") {
      if (!confirm("Nộp bài? Sau khi nộp bạn sẽ xem lời giải và tự chấm điểm.")) return;
      examState(+parts[1]).end = Date.now();
      save(); scrollTo(0, 0); route();
    } else if (act === "score") {
      const n = +parts[1];
      const st = examState(n);
      st.scores = { ...st.scores, [el.dataset.q]: +el.dataset.v };
      recordExam(n);
      save(); rerender();
    } else if (act === "exam-reset") {
      if (!confirm("Làm lại đề này từ đầu? Điểm các lần trước vẫn được giữ.")) return;
      const st = examState(+parts[1]);
      Object.assign(st, { start: null, end: null, scores: {} });
      view = { key: "", opened: 0, open: new Set() };
      save(); scrollTo(0, 0); route();
    } else if (act === "reset") {
      if (confirm("Xóa toàn bộ tiến độ (mọi lớp) về thẻ ghi nhớ, bài tập và đề trên máy này?")) {
        S.cards = {}; S.problems = {}; S.exams = {}; save(); route();
      }
    } else if (act === "install" && deferredInstall) {
      deferredInstall.prompt();
      deferredInstall = null;
    }
  });
  addEventListener("hashchange", () => { route(); scrollTo(0, 0); });

  // Android/Chrome install button.
  let deferredInstall = null;
  addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); deferredInstall = e; showInstall(); });
  function showInstall() {
    const slot = document.getElementById("install-slot");
    if (slot && deferredInstall) slot.innerHTML = `<button class="btn primary block" data-act="install">Cài ứng dụng ngay</button>`;
  }

  route();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
})();
