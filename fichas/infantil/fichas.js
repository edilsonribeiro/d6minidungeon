(function () {
  const pages = Array.from(document.querySelectorAll(".page"));
  const tabs = Array.from(document.querySelectorAll(".tab"));
  const resetBtn = document.getElementById("resetBtn");
  const printBtn = document.getElementById("printBtn");

  function setView(view) {
    pages.forEach((page) => {
      const show = view === "all" || page.dataset.sheet === view;
      page.classList.toggle("is-hidden", !show);
    });

    tabs.forEach((tab) => {
      tab.classList.toggle("is-active", tab.dataset.view === view);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => setView(tab.dataset.view));
  });

  function tokenIcon(kind) {
    const id =
      kind === "hp" ? "icon-heart" : kind === "armor" ? "icon-shield" : "icon-orb";
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#${id}"></use></svg>`;
  }

  function initTokenRow(row) {
    const kind = row.dataset.kind;
    const max = Number.parseInt(row.dataset.max || "0", 10) || 0;
    const start = Number.parseInt(row.dataset.start || "0", 10) || 0;

    row.innerHTML = "";
    for (let i = 0; i < max; i++) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `token token--${kind}`;
      button.innerHTML = tokenIcon(kind);
      button.classList.toggle("is-on", i < start);
      button.addEventListener("click", () => {
        button.classList.toggle("is-on");
      });
      row.appendChild(button);
    }
  }

  function initTokens(page) {
    page.querySelectorAll(".token-row").forEach(initTokenRow);
  }

  function applyDefaults(page) {
    page.querySelectorAll("[data-default]").forEach((el) => {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        if (!el.value) el.value = el.dataset.default || "";
      }
    });
  }

  function refreshChipSelection(page) {
    page.querySelectorAll(".chip[data-target][data-value]").forEach((chip) => {
      const target = page.querySelector(`[data-field="${chip.dataset.target}"]`);
      if (!target) return;
      chip.classList.toggle("is-selected", (target.value || "") === chip.dataset.value);
    });
  }

  function initChips(page) {
    page.querySelectorAll(".chip[data-target][data-value]").forEach((chip) => {
      chip.addEventListener("click", () => {
        const target = page.querySelector(`[data-field="${chip.dataset.target}"]`);
        if (!target) return;
        target.value = chip.dataset.value || "";
        refreshChipSelection(page);
      });
    });

    refreshChipSelection(page);
  }

  function initPage(page) {
    initTokens(page);
    applyDefaults(page);
    initChips(page);

    if (page.dataset.listenersAttached !== "1") {
      page.querySelectorAll("[data-field]").forEach((el) => {
        el.addEventListener("input", () => refreshChipSelection(page));
        el.addEventListener("change", () => refreshChipSelection(page));
      });
      page.dataset.listenersAttached = "1";
    }
  }

  pages.forEach(initPage);

  resetBtn?.addEventListener("click", () => {
    const visible = pages.filter((p) => !p.classList.contains("is-hidden"));
    visible.forEach((p) => {
      p.querySelectorAll("input, textarea").forEach((el) => {
        if (el.type === "checkbox") el.checked = false;
        else el.value = "";
      });
      initTokens(p);
      applyDefaults(p);
      refreshChipSelection(p);
    });
  });

  printBtn?.addEventListener("click", () => window.print());

  setView("all");
})();
