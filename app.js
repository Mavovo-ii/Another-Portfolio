import { info } from "./data.js";

const projectImage = document.getElementById("projectImg");

const projectName = document.getElementById("project-name");
const projectDescription = document.getElementById("project-desc");

const projectLink = document.getElementById("web-link");
const nextBtn = document.getElementById("next-btn");

const prevBtn = document.getElementById("prev-btn");
const currentItem = document.getElementById("current");

const totalItems = document.getElementById("total");
const scrolltoWork = document.getElementById("work");

const scrolltoAbout = document.getElementById("about");
const scrolltContact = document.getElementById("contact");

const scrollWorkBtn = document.getElementById("my-work");

let defaultItem = 0;
window.addEventListener("DOMContentLoaded", () => {
  showProject(defaultItem);
});

function showProject(project) {
  const element = info[project];
  projectName.textContent = element.name;
  projectImage.src = element.image;
  projectDescription.textContent = element.concept;
  projectLink.href = element.link;
  currentItem.textContent = element.id;
  totalItems.textContent = info.length;
}

nextBtn.addEventListener("click", function () {
  defaultItem++;
  if (defaultItem > info.length - 1) {
    defaultItem = 0;
  }
  showProject(defaultItem);
});

prevBtn.addEventListener("click", function () {
  defaultItem--;
  if (defaultItem < 0) {
    defaultItem = info.length - 1;
  }
  showProject(defaultItem);
});

scrolltoWork.addEventListener("click", function () {
  window.scrollTo({ top: 850, behavior: "smooth" });
});

scrolltoAbout.addEventListener("click", function () {
  window.scrollTo({ top: 1540, behavior: "smooth" });
});

scrolltContact.addEventListener("click", function () {
  window.scrollTo({ top: 1545, behavior: "smooth" });
});

scrollWorkBtn.addEventListener("click", function () {
  window.scrollTo({ top: 506, behavior: "smooth" });
});
