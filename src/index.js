import showCipher from "./cipherTemplate.js";
import showAbout from "./AboutTemplate.js";
const container = document.getElementById("container");
showCipher();

const aboutButton = () => {
  const about = document.getElementById("about");
  about.addEventListener("click", () => showAbout());
};

aboutButton();
