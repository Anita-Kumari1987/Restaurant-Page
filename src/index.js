import "./style.css";
import "./homeStyle.css";
import "./menu.css";
import "./contactUs.css"
import { loadContent } from "./contentLoader.js";
import {homePageLoader} from "./homepage.js";
import { menuPageLoader } from "./menu.js";
import { contactUsPageLoader } from "./contactUs.js";
let mainBox = document.querySelector("#content");

loadContent();

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
homePageLoader();
});

const logo = document.querySelector("#logo");
logo.addEventListener("click", () => {
mainBox.innerHTML = "";
loadContent();
})

const menubtn = document.querySelector("#menu");
menubtn.addEventListener("click",() => {
menuPageLoader();
})

const contactUsBtn = document.querySelector("#contactUs");
contactUsBtn.addEventListener("click", () => {
contactUsPageLoader();
})
