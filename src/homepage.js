import aboutUsImage from './aboutUs.jpg';

export function homePageLoader(){
let mainBox = document.querySelector("#content");
mainBox.innerHTML = "";

const homepageDiv = document.createElement('div');
homepageDiv.classList.add("home_page");
mainBox.append(homepageDiv);

const image = document.createElement("img");
image.src = aboutUsImage;
homepageDiv.append(image);
image.classList.add("home_image");

const homeHeading = document.createElement('h2');
homeHeading.innerText = "About Us!!";
homeHeading.classList.add("heading_text");
mainBox.append(homeHeading);

const para = document.createElement("p");
para.innerText = "Welcome to Food Planet Restaurant, where you’ll find the best in Indian cuisine in Stockholm. Our focus is on providing premium quality food made with the freshest and finest ingredients. We take pride in our high standards for quality and customer service, ensuring that every meal you enjoy with us is nothing short of exceptional."
para.classList.add("paragraph")
mainBox.append(para);
}