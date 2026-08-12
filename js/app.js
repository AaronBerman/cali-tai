(function () {
  const THEME_PREFS_KEY = "cali-tai-prefs-v1";

  function detectSystem() {
    const el = document.querySelector("[data-system]");
    return el ? el.getAttribute("data-system") : null;
  }

  function siteConfig() {
    const system = detectSystem();
    if (system && window.MARTIAL && window.MARTIAL[system]) {
      return {
        system,
        progressKey: "martial-progress-v1",
        prefsKey: "martial-prefs-v1",
        data: window.MARTIAL[system],
        trackLabel: "martial",
      };
    }
    return {
      system: null,
      progressKey: "cali-tai-progress-v1",
      prefsKey: "cali-tai-prefs-v1",
      data: window.CALI_TAI,
      trackLabel: "cali",
    };
  }

  let CONFIG = null;
  function cfg() {
    if (!CONFIG) CONFIG = siteConfig();
    return CONFIG;
  }

  function resetConfig() {
    CONFIG = null;
  }

  function getData() {
    return cfg().data;
  }

  function todayKey() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function loadProgress() {
    try {
      const raw = JSON.parse(localStorage.getItem(cfg().progressKey) || "{}");
      if (cfg().system) {
        return raw[cfg().system] || {};
      }
      return raw;
    } catch {
      return {};
    }
  }

  function saveProgress(data) {
    if (cfg().system) {
      let all = {};
      try {
        all = JSON.parse(localStorage.getItem(cfg().progressKey) || "{}");
      } catch {
        all = {};
      }
      all[cfg().system] = data;
      localStorage.setItem(cfg().progressKey, JSON.stringify(all));
      return;
    }
    localStorage.setItem(cfg().progressKey, JSON.stringify(data));
  }

  function loadPrefs() {
    try {
      return JSON.parse(localStorage.getItem(cfg().prefsKey) || "{}");
    } catch {
      return {};
    }
  }

  function savePrefs(prefs) {
    localStorage.setItem(cfg().prefsKey, JSON.stringify(prefs));
  }

  function loadThemePrefs() {
    try {
      return JSON.parse(localStorage.getItem(THEME_PREFS_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function saveThemePrefs(prefs) {
    localStorage.setItem(THEME_PREFS_KEY, JSON.stringify(prefs));
  }

  function getStreak(completions) {
    const set = new Set(completions);
    let streak = 0;
    const cursor = new Date();
    // If nothing today, allow streak to count from yesterday
    const today = todayKey();
    if (!set.has(today)) {
      cursor.setDate(cursor.getDate() - 1);
    }
    for (;;) {
      const y = cursor.getFullYear();
      const m = String(cursor.getMonth() + 1).padStart(2, "0");
      const d = String(cursor.getDate()).padStart(2, "0");
      const key = `${y}-${m}-${d}`;
      if (!set.has(key)) break;
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }

  function howToLinks(ids) {
    const data = getData();
    const howTos = (data && data.howTos) || [];
    return ids
      .map((id) => howTos.find((h) => h.id === id))
      .filter(Boolean);
  }

  /** Extract countdown seconds from prescriptions like "2×30–45s" or "3–5 min". */
  function parseTimerSeconds(dose) {
    if (!dose) return null;
    const text = String(dose).toLowerCase().replace(/[–—]/g, "-");
    let match = text.match(/(\d+)\s*-\s*(\d+)\s*(seconds?|secs?|s|minutes?|mins?|min)\b/);
    if (match) {
      const high = Number(match[2]);
      const isMin = match[3].indexOf("min") === 0;
      return high * (isMin ? 60 : 1);
    }
    match = text.match(/(\d+)\s*(seconds?|secs?|s|minutes?|mins?|min)\b/);
    if (match) {
      const value = Number(match[1]);
      const isMin = match[2].indexOf("min") === 0;
      return value * (isMin ? 60 : 1);
    }
    return null;
  }

  function formatClock(totalSeconds) {
    const s = Math.max(0, Math.floor(totalSeconds));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}:${String(r).padStart(2, "0")}`;
  }

  const timerStates = new Map();
  let activeTimerId = null;

  function stopTimer(timerId, reset) {
    const state = timerStates.get(timerId);
    if (!state) return;
    if (state.intervalId) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
    state.running = false;
    if (reset) state.remaining = state.duration;
    if (activeTimerId === timerId) activeTimerId = null;
    syncTimerUi(timerId);
  }

  function syncTimerUi(timerId) {
    const root = Array.from(document.querySelectorAll("[data-timer-id]")).find(
      (el) => el.getAttribute("data-timer-id") === timerId
    );
    const state = timerStates.get(timerId);
    if (!root || !state) return;
    const display = root.querySelector("[data-timer-display]");
    const startBtn = root.querySelector("[data-timer-start]");
    if (display) display.textContent = formatClock(state.remaining);
    if (startBtn) startBtn.textContent = state.running ? "Pause" : state.remaining < state.duration ? "Resume" : "Start";
    root.classList.toggle("is-running", state.running);
    root.classList.toggle("is-done", !state.running && state.remaining === 0);
  }

  function chime() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 880;
      gain.gain.value = 0.04;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.45);
      osc.stop(ctx.currentTime + 0.5);
      setTimeout(() => ctx.close(), 600);
    } catch {
      /* ignore audio failures */
    }
  }

  function startTimer(timerId) {
    if (activeTimerId && activeTimerId !== timerId) {
      stopTimer(activeTimerId, false);
    }
    let state = timerStates.get(timerId);
    if (!state) return;
    if (state.remaining <= 0) state.remaining = state.duration;
    if (state.running) {
      stopTimer(timerId, false);
      return;
    }
    state.running = true;
    activeTimerId = timerId;
    syncTimerUi(timerId);
    state.intervalId = setInterval(() => {
      state.remaining -= 1;
      if (state.remaining <= 0) {
        state.remaining = 0;
        stopTimer(timerId, false);
        chime();
        return;
      }
      syncTimerUi(timerId);
    }, 1000);
  }

  function ensureTimerState(timerId, duration) {
    if (!timerStates.has(timerId)) {
      timerStates.set(timerId, {
        duration,
        remaining: duration,
        running: false,
        intervalId: null,
      });
    } else {
      const state = timerStates.get(timerId);
      if (!state.running && state.remaining === state.duration) {
        state.duration = duration;
        state.remaining = duration;
      }
    }
  }

  function clearAllTimers() {
    timerStates.forEach((_, id) => stopTimer(id, true));
    timerStates.clear();
    activeTimerId = null;
  }

  function exerciseCard(exId, levelId, checkedMap, dayId) {
    const data = getData();
    const ex = data.exercises[exId];
    if (!ex) return "";
    const dose = (data.levels[levelId].prescriptions || {})[exId] || "As comfortable";
    const guides = howToLinks(ex.howToIds || ex.videoIds || []);
    const checkId = `${dayId}::${exId}`;
    const isChecked = !!checkedMap[checkId];
    const timerSeconds = parseTimerSeconds(dose);
    const guideHtml = guides.length
      ? `<ul class="resource-list how-to-list">${guides
          .map((g) => {
            const kind = g.type === "video" ? "Video" : "Instructions";
            return `<li><span class="how-to-kind">${kind}</span> <a href="${g.url}" target="_blank" rel="noopener noreferrer">${g.title}</a> <span class="muted">(${g.org})</span></li>`;
          })
          .join("")}</ul>`
      : `<p class="muted how-to-missing">How-to link missing — check data.js</p>`;

    const timerHtml =
      timerSeconds != null
        ? `<div class="move-timer" data-timer-id="${checkId}" data-duration="${timerSeconds}">
            <span class="timer-display" data-timer-display>${formatClock(timerSeconds)}</span>
            <button type="button" class="timer-btn" data-timer-start>Start</button>
            <button type="button" class="timer-btn timer-btn-quiet" data-timer-reset>Reset</button>
          </div>`
        : "";

    if (timerSeconds != null) ensureTimerState(checkId, timerSeconds);

    return `
      <li class="move" data-check-id="${checkId}">
        <div class="move-main">
          <label class="move-check">
            <input type="checkbox" data-progress-check="${checkId}" ${isChecked ? "checked" : ""} />
            <span class="move-body">
              <span class="move-name">${ex.name}</span>
              <span class="move-dose">${dose}</span>
              <span class="move-cue">${ex.cue}</span>
            </span>
          </label>
          ${timerHtml}
        </div>
        ${guideHtml}
      </li>`;
  }

  function renderPlan(container, levelId, days) {
    clearAllTimers();
    const data = getData();
    const plan = data.plans[levelId][days];
    const progress = loadProgress();
    const checked = progress.checks || {};
    const completions = progress.completions || {};
    const system = cfg().system;

    const blockLabels = {
      warmup: "Warm-up",
      strength: "Calisthenics",
      taiChi: "Tai chi",
      cooldown: "Cool-down",
      fundamentals: "Fundamentals",
      conditioning: "Conditioning",
      ethos: "Mindset & review",
      supervised: "Instructor-only notes",
    };

    container.innerHTML = plan
      .map((day, index) => {
        const dayId = system
          ? `${system}-${levelId}-${days}d-${index + 1}`
          : `${levelId}-${days}d-${index + 1}`;
        const done = !!completions[dayId + "::" + todayKey()];
        const blocks = Object.entries(day.blocks)
          .filter(([, ids]) => ids && ids.length)
          .map(([key, ids]) => {
            return `
              <div class="block">
                <h4>${blockLabels[key] || key}</h4>
                <ul class="move-list">
                  ${ids.map((id) => exerciseCard(id, levelId, checked, dayId)).join("")}
                </ul>
              </div>`;
          })
          .join("");

        return `
          <article class="day-panel" data-day-id="${dayId}">
            <header class="day-header">
              <div>
                <p class="eyebrow">Session ${index + 1} of ${days}</p>
                <h3>${day.name}</h3>
                <p class="day-focus">${day.focus}</p>
              </div>
              <button type="button" class="btn ${done ? "btn-done" : "btn-primary"}" data-complete-day="${dayId}">
                ${done ? "Completed today" : "Mark day complete"}
              </button>
            </header>
            ${blocks}
          </article>`;
      })
      .join("");

    container.querySelectorAll("[data-timer-id]").forEach((el) => {
      syncTimerUi(el.getAttribute("data-timer-id"));
    });
  }

  function bindPlanInteractions(container) {
    container.addEventListener("change", (e) => {
      const input = e.target.closest("[data-progress-check]");
      if (!input) return;
      const id = input.getAttribute("data-progress-check");
      const progress = loadProgress();
      progress.checks = progress.checks || {};
      if (input.checked) progress.checks[id] = true;
      else delete progress.checks[id];
      saveProgress(progress);
      updateProgressWidgets();
    });

    container.addEventListener("click", (e) => {
      const startBtn = e.target.closest("[data-timer-start]");
      if (startBtn) {
        e.preventDefault();
        const root = startBtn.closest("[data-timer-id]");
        if (root) startTimer(root.getAttribute("data-timer-id"));
        return;
      }

      const resetBtn = e.target.closest("[data-timer-reset]");
      if (resetBtn) {
        e.preventDefault();
        const root = resetBtn.closest("[data-timer-id]");
        if (root) stopTimer(root.getAttribute("data-timer-id"), true);
        return;
      }

      const btn = e.target.closest("[data-complete-day]");
      if (!btn) return;
      const dayId = btn.getAttribute("data-complete-day");
      const key = `${dayId}::${todayKey()}`;
      const progress = loadProgress();
      progress.completions = progress.completions || {};
      progress.days = progress.days || [];

      if (progress.completions[key]) {
        delete progress.completions[key];
      } else {
        progress.completions[key] = {
          at: new Date().toISOString(),
          dayId,
        };
        if (!progress.days.includes(todayKey())) {
          progress.days.push(todayKey());
        }
      }
      saveProgress(progress);
      btn.textContent = progress.completions[key] ? "Completed today" : "Mark day complete";
      btn.classList.toggle("btn-done", !!progress.completions[key]);
      btn.classList.toggle("btn-primary", !progress.completions[key]);
      updateProgressWidgets();
    });
  }

  function updateProgressWidgets() {
    const progress = loadProgress();
    const days = progress.days || [];
    const streak = getStreak(days);
    const total = days.length;

    document.querySelectorAll("[data-stat='streak']").forEach((el) => {
      el.textContent = String(streak);
    });
    document.querySelectorAll("[data-stat='sessions']").forEach((el) => {
      el.textContent = String(total);
    });
    document.querySelectorAll("[data-stat='today']").forEach((el) => {
      el.textContent = days.includes(todayKey()) ? "Yes" : "Not yet";
    });

    const list = document.querySelector("[data-history-list]");
    if (list) {
      const recent = [...days].sort().reverse().slice(0, 14);
      list.innerHTML = recent.length
        ? recent.map((d) => `<li><time datetime="${d}">${d}</time></li>`).join("")
        : `<li class="muted">No sessions logged yet. Complete a workout day to start.</li>`;
    }
  }

  function initNav() {
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".site-nav a").forEach((a) => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href === path || (path === "" && href === "index.html")) {
        a.setAttribute("aria-current", "page");
      }
    });
  }

  const THEMES = ["light", "dark", "sepia"];

  function currentTheme() {
    const fromDom = document.documentElement.getAttribute("data-theme");
    if (THEMES.includes(fromDom)) return fromDom;
    const prefs = loadThemePrefs();
    return THEMES.includes(prefs.theme) ? prefs.theme : "light";
  }

  function applyTheme(theme) {
    const next = THEMES.includes(theme) ? theme : "light";
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next === "dark" ? "dark" : "light";
    saveThemePrefs({ ...loadThemePrefs(), theme: next });
    document.querySelectorAll("[data-theme-toggle]").forEach((host) => {
      host.querySelectorAll("button[data-theme]").forEach((btn) => {
        btn.setAttribute("aria-pressed", String(btn.getAttribute("data-theme") === next));
      });
    });
  }

  function initThemeToggle() {
    const hosts = document.querySelectorAll("[data-theme-toggle]");
    if (!hosts.length) return;
    const active = currentTheme();
    hosts.forEach((host) => {
      host.innerHTML = THEMES.map(
        (theme) =>
          `<button type="button" data-theme="${theme}" aria-pressed="${theme === active}">${theme}</button>`
      ).join("");
      host.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-theme]");
        if (!btn) return;
        applyTheme(btn.getAttribute("data-theme"));
      });
    });
    applyTheme(active);
  }

  function initSafety() {
    const host = document.querySelector("[data-safety]");
    const data = getData();
    if (!host || !data) return;
    host.innerHTML = `
      <ul class="safety-list">
        ${data.safetyBullets.map((b) => `<li>${b}</li>`).join("")}
      </ul>`;
  }

  function initSources() {
    const host = document.querySelector("[data-sources]");
    const data = getData();
    if (!host || !data) return;
    const { sources, howTos } = data;
    const videos = (howTos || []).filter((h) => h.type === "video");
    const articles = (howTos || []).filter((h) => h.type === "article");
    host.innerHTML = `
      <div class="source-grid">
        <div>
          <h3>Articles & guidelines</h3>
          <ul class="resource-list">
            ${sources
              .map(
                (s) =>
                  `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.title}</a>
                   <span class="muted"> — ${s.org}. ${s.note}</span></li>`
              )
              .join("")}
          </ul>
        </div>
        <div>
          <h3>How-to videos</h3>
          <ul class="resource-list">
            ${videos
              .map(
                (v) =>
                  `<li><a href="${v.url}" target="_blank" rel="noopener noreferrer">${v.title}</a>
                   <span class="muted"> — ${v.org}</span></li>`
              )
              .join("")}
          </ul>
          <h3 style="margin-top:1rem">Exercise instruction pages</h3>
          <ul class="resource-list">
            ${articles
              .map(
                (a) =>
                  `<li><a href="${a.url}" target="_blank" rel="noopener noreferrer">${a.title}</a>
                   <span class="muted"> — ${a.org}</span></li>`
              )
              .join("")}
          </ul>
        </div>
      </div>`;
  }

  function initLevelPage() {
    const root = document.querySelector("[data-level-page]");
    const data = getData();
    if (!root || !data) return;
    const levelId = root.getAttribute("data-level-page");
    const level = data.levels[levelId];
    if (!level) return;

    const prefs = loadPrefs();
    const prefKey = cfg().system ? `planDays:${cfg().system}:${levelId}` : `planDays:${levelId}`;
    let days = Number(prefs[prefKey] || 3);
    if (days !== 3 && days !== 5) days = 3;

    const planHost = root.querySelector("[data-plan]");
    const toggle = root.querySelector("[data-plan-toggle]");

    function sync() {
      if (toggle) {
        toggle.querySelectorAll("button").forEach((btn) => {
          const val = Number(btn.getAttribute("data-days"));
          btn.setAttribute("aria-pressed", String(val === days));
        });
      }
      renderPlan(planHost, levelId, days);
      savePrefs({ ...loadPrefs(), [prefKey]: days, lastLevel: levelId, lastSystem: cfg().system || "cali" });
    }

    if (toggle) {
      toggle.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-days]");
        if (!btn) return;
        days = Number(btn.getAttribute("data-days"));
        sync();
      });
    }

    bindPlanInteractions(planHost);
    sync();
  }

  function initProgressPage() {
    const clearBtn = document.querySelector("[data-clear-progress]");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        const label = cfg().system ? `${cfg().data.shortTitle || cfg().system} progress` : "Cali-Tai progress";
        if (!confirm(`Clear all local ${label} on this device?`)) return;
        if (cfg().system) {
          saveProgress({});
        } else {
          localStorage.removeItem(cfg().progressKey);
        }
        updateProgressWidgets();
        alert("Progress cleared.");
      });
    }

    const exportBtn = document.querySelector("[data-export-progress]");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => {
        const payload = cfg().system
          ? { system: cfg().system, progress: loadProgress() }
          : loadProgress();
        const blob = new Blob([JSON.stringify(payload, null, 2)], {
          type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        const prefix = cfg().system || "cali-tai";
        a.download = `${prefix}-progress-${todayKey()}.json`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }
  }

  function initHomePlanPeek() {
    const form = document.querySelector("[data-home-plan]");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const level = fd.get("level");
      const days = fd.get("days");
      const system = fd.get("system");
      if (system) {
        savePrefs({
          ...loadPrefs(),
          [`planDays:${system}:${level}`]: Number(days),
          lastLevel: level,
          lastSystem: system,
        });
        location.href = `${system}-${level}.html`;
        return;
      }
      savePrefs({ ...loadPrefs(), [`planDays:${level}`]: Number(days), lastLevel: level });
      location.href = `${level}.html`;
    });
  }

  function initMartialSystemSwitch() {
    const select = document.querySelector("[data-switch-system]");
    if (!select) return;
    select.addEventListener("change", () => {
      const system = select.value;
      document.querySelectorAll("[data-system]").forEach((el) => {
        el.setAttribute("data-system", system);
      });
      document.body.setAttribute("data-system", system);
      resetConfig();
      initSafety();
      initSources();
      updateProgressWidgets();
      const title = document.querySelector("[data-system-title]");
      if (title && getData()) title.textContent = getData().title;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initThemeToggle();
    initSafety();
    initSources();
    initLevelPage();
    initProgressPage();
    initHomePlanPeek();
    initMartialSystemSwitch();
    updateProgressWidgets();
  });
})();
