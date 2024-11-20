import contactUsImage from './contactUsImage copy.jpg';

export function contactUsPageLoader(){
let mainBox = document.querySelector("#content");
mainBox.innerHTML = "";

const contactUsDiv = document.createElement('div');
contactUsDiv.classList.add("contactUs_page");
mainBox.append(contactUsDiv);

const image = document.createElement("img");
image.src = contactUsImage;
contactUsDiv.append(image);
image.classList.add("contactUs_image");

const contactUsHeading = document.createElement('h2');
contactUsHeading.innerText = "Contact Us!!";
contactUsHeading.classList.add("contactUsHeading_text");
contactUsDiv.append(contactUsHeading);
}