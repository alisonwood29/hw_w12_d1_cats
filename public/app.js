const addCat = function (name, favFood, image){

  const catListItem = document.createElement("ul");
  catListItem.classList.add('cat');

  const nameListItem = document.createElement("li");
  nameListItem.innerText = "Name: " + name;

  const favFoodListItem = document.createElement("li");
  favFoodListItem.innerText = "Favourite food: " + favFood;

  const imageItem = document.createElement("img");
  imageItem.width = 500;
  imageItem.src = image;

  const imageListItem = document.createElement("li");
  imageListItem.innerText = imageItem;

  imageListItem.appendChild(imageItem);
  favFoodListItem.appendChild(imageListItem);
  nameListItem.appendChild(favFoodListItem);
  catListItem.appendChild(nameListItem);

  const cats = document.querySelector('#cats');
  cats.appendChild(catListItem);
};

const app = function () {
  addCat("Boots", "cat food", "http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg")
}

document.addEventListener("DOMContentLoaded", app);
