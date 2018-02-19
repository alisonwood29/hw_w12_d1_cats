const CATS_ARRAY = [
  {name: "Boba", favFood: "Sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {name: "Barnaby", favFood: "Tuna", image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
  {name: "Max", favFood: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
  {name: "Boots", favFood: "cat food", image: "http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg"}
]

const addCat = function (name, favFood, image){

  const catListItem = document.createElement("ul");
  catListItem.classList.add('cat');

  const nameListItem = document.createElement("li");
  nameListItem.innerText = "Name: " + name;

  const favFoodListItem = document.createElement("li");
  favFoodListItem.innerText = "Favourite food: " + favFood;

  const imageListItem = document.createElement("li");
  imageListItem.innerHTML = '<img width="500" src="'+ image + '">';

  favFoodListItem.appendChild(imageListItem);
  nameListItem.appendChild(favFoodListItem);
  catListItem.appendChild(nameListItem);

  const cats = document.querySelector('#cats');
  cats.appendChild(catListItem);
};

const app = function () {
  // addCat("Boots", "cat food", "http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg")
  CATS_ARRAY.forEach(function (cat) {
    addCat(cat.name, cat.favFood, cat.image);
  })

}

document.addEventListener("DOMContentLoaded", app);
