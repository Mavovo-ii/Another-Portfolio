import { info } from "./data.js";
const projectImage = document.getElementById("projectImg");

const projectName = document.getElementById("project-name");
const projectDescription = document.getElementById("project-desc");

const projectLink = document.getElementById("web-link");
const nextBtn = document.getElementById("next-btn");

const prevBtn = document.getElementById("prev-btn");
const currentItem = document.getElementById("current");

const totalItems = document.getElementById("total");

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
