import BlogSection from "./BlogSection.js";
import Utils from "./Utils.js"

const routes = {
  "/": BlogSection
};

const router = async () => {
//   const header = document.querySelector("#header");
  const content = document.querySelector(".blog");
//   const footer = document.querySelector("#footer");

  const request = Utils.parseRequestURL();
  const parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");
  const page = routes[parsedURL] ? routes[parsedURL] : "kuna error msee";
  content.innerHTML = await page.render();
  await page.after_render();
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
