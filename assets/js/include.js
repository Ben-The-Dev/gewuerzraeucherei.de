// Lädt Header und Footer aus dem Ordner "partials" und markiert die aktuelle Seite.
document.addEventListener("DOMContentLoaded", async () => {
  const seite = location.pathname.split("/").pop() || "index.html";
  for (const el of document.querySelectorAll("[data-include]")) {
    try {
      const antwort = await fetch(el.dataset.include);
      if (!antwort.ok) throw new Error(antwort.status);
      el.outerHTML = await antwort.text();
    } catch (fehler) {
      console.error("Konnte " + el.dataset.include + " nicht laden:", fehler);
    }
  }
  document.querySelectorAll("header a, footer a").forEach((a) => {
    if (a.getAttribute("href") === seite) a.setAttribute("aria-current", "page");
  });
});
