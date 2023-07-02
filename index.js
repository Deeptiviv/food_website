import { foodItem } from "./foodItem.js";
console.log(foodItem);
function displayItems() {
  var biryani = document.getElementById("Biryani");
  var chicken = document.getElementById("Chicken");
  var Paneer = document.getElementById(" Paneer ");
  var chinese = document.getElementById("Chinese");
  var southIndian = document.getElementById("SouthIndian ");
  const BiryaniData = foodItem.filter((item) => item.category == "Biryani");
  console.log(BiryaniData);
  const chickenData = foodItem.filter((item) => item.category == "Chicken");
  console.log(chickenData);
  const PaneerData = foodItem.filter((item) => item.category == "Paneer");
  console.log(PaneerData);
  const chineseData = foodItem.filter((item) => item.category == "chinese");
  console.log(chineseData);
  const southIndianData = foodItem.filter((item) => item.category =="southIndian");
  console.log(southIndianData);
  
}                                                                                       
BiryaniData.map(item=>{

  var itemCard= document.createElement('div');
  itemCard.setAttribute('id','item-card');

  var cartop =document.createElement('div');
  cardTop.setAttribute('id', 'card-top');


  var star= document.createElement('i');
  star.setAttribute('class', 'fa fa-star');
  star.setAttribute('id','rating');
  star.innerText= ' '+item.rating;

  var heart= document.createElement('i');
  heart.setAttribute('class', 'fa fa-heart-o add -to- cart');
  heart.setAttribute('id',item.id);

  cardTop.appendChild(star);
  cardTop.appendChild(heart);

  var image =document.createElement ('img');
  img.src = item.img;

  var itemName=document.createElement('p');
  itemName.setAttribute('id','item-name');
  itemName.innerText= item.name; 

  var itemPrice=document.createElement('p');
  itemPrice.setAttribute('id','item-price');
  itemPrice.innerText= item.price;

  itemCard.appendChild(cardTop);
  itemCard.appendChild(img);
  itemCard.appendChild(itemName);
   itemCard.appendChild(itemPrice);
 
  Biryani.appendChild(itemCard);

  
  


  

}
  )
displayItems();
