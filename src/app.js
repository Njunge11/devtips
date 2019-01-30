import BlogSection from "./BlogSection.js";
import BlogPost from "./BlogPost.js"
import Utils from "./Utils.js"

const routes = {
  "/": BlogSection,
  "/posts/:id":BlogPost
};

const router = async () => {
//   const header = document.querySelector("#header");
  const content = document.querySelector(".container-fluid");
//   const footer = document.querySelector("#footer");

  const request = Utils.parseRequestURL();
  const parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");
  const page = routes[parsedURL] ? routes[parsedURL] : "kuna error msee";
  console.log('page', page)
  content.innerHTML = await page.render();
  await page.after_render();
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
