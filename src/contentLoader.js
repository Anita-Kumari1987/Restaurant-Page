import logoImage from './logo_image.jpg';
import restaurangeImage from './restaurangeImage.png';
export function loadContent() {
  const image = document.createElement("img");
  image.src = restaurangeImage;
  
  let mainBox = document.querySelector("#content");
  mainBox.append(image);
  image.classList.add("main_Image");
  
  const restaurangeName = document.createElement("h1");
  mainBox.append(restaurangeName);
  restaurangeName.innerText = "Food Planet";
  restaurangeName.classList.add("restaurange_Name");
  
  const centralLogo = document.createElement("img");
  centralLogo.src = logoImage;
  mainBox.append(centralLogo);
  centralLogo.classList.add("big_logo");
  
  const restroIntro = document.createElement("p");
  mainBox.append(restroIntro);
  restroIntro.innerText = "Enjoy innovative menus featuring seasonal recipes inspired by traditional Indian styles, authentic ingredients, and modern techniques!"
  restroIntro.classList.add("headline");
}