import menuImage from "./menu.jpg";
import imgpth from "./ChickenBiryani.png";

export function menuPageLoader(){
  let mainBox = document.querySelector("#content");
  mainBox.innerHTML = "";
  
  const menuPageDiv = document.createElement('div');
  menuPageDiv.classList.add("menu_page");
  mainBox.append(menuPageDiv);
  
  const image = document.createElement("img");
  image.src = menuImage;
  menuPageDiv.append(image);
  image.classList.add("menu_image");
  
  const menuHeading = document.createElement('h2');
  menuHeading.innerText = "Our Endless Menu....!!";
  menuHeading.classList.add("heading_text");
  mainBox.append(menuHeading);

  const menuItems = [
    {
      name: "Chicken Biryani",
      discription: "Recipe is a traditional Mughlai delicacy that is quite popular among both vegetarians and non-vegetarians. Our Biryani is the best of all biryanis with additional chicken or lamb flavour.",
      Image: "./ChickenBiryani.png",
      price: "179 Kr"
    },
    {
      name: "Aloo Paratha",
      discription: "popular stuffed flatbread recipe made with wheat flour and spiced & mashed potatoes. it is a perfect flatbread recipe for Breakfast",
      Image: "./menuImages/AalooParatha.png",
      price: "59 Kr/st"
    },
    {
      name: "Aloo Matar",
      discription: "Delicious Aloo Matar Potatoes and peas curry cooked together with special spices and perfection. It’s vegan, light, and delicious. Must try our Vegan Menu. Suitable for Vegetarians.",
      Image: "./menuImages/AalooMatar.png",
      price: "129 kr"
    },
    {
      name: "Tandoori Chicken",
      discription: "Tandoori Chicken is a lip-smacking, soft, juicy, and flavourful dry chicken dish from the Tandoor Of Anmol Restaurant. Visit today Anmol restaurant near Spagna, Stockholm Sweden,",
      imagepath: "./menuImages/TandooriChicken.png",
      price: "169 Kr"
    }
  ];

  menuItems.forEach(item => {
  const menuItemDiv = document.createElement("div");
  menuItemDiv.classList.add("menu-item");

  const image = document.createElement("image");
  //alert(item.Image);
  image.src = "./ChickenBiryani.png";
  image.alt = item.name;
  
  const name = document.createElement("h3");
  name.textContent = item.name;
  

  const discription = document.createElement("p");
  discription.textContent = item.discription;
  
  const price = document.createElement("p");
  price.textContent = item.price;
  
  menuItemDiv.append(image);
  menuItemDiv.append(name);
  menuItemDiv.append(discription);
  menuItemDiv.append(price);

  mainBox.append(menuItemDiv);
  })


}