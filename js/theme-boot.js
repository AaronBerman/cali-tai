/**
 * Apply saved theme before paint to avoid a flash of the wrong mode.
 * Keep this file dependency-free and tiny.
 */
(function () {
  var KEY = "cali-tai-prefs-v1";
  var allowed = { light: 1, dark: 1, sepia: 1 };
  var theme = "light";
  try {
    var prefs = JSON.parse(localStorage.getItem(KEY) || "{}");
    if (prefs && allowed[prefs.theme]) theme = prefs.theme;
  } catch (e) {
    /* ignore */
  }
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme === "dark" ? "dark" : "light";
})();
