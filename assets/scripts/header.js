(() => {
  if (
    window.location.pathname.endsWith("/index.html") ||
    window.location.pathname.endsWith("/")
  ) {
    return;
  }

  const request = new XMLHttpRequest();
  request.open(
    "GET",
    new URL("../../index.html", document.currentScript.src),
    false,
  );
  request.send();

  if (request.status !== 200 && request.status !== 0) {
    return;
  }

  const source = new DOMParser().parseFromString(
    request.responseText,
    "text/html",
  );
  const sourceHeader = source.querySelector("header.header");
  const sourceMenu = source.querySelector(".menu");
  const currentHeader = document.querySelector("header.header");

  if (!sourceHeader || !sourceMenu || !currentHeader) {
    return;
  }

  currentHeader.replaceWith(sourceHeader.cloneNode(true));
  document.querySelector(".header").after(sourceMenu.cloneNode(true));
})();
