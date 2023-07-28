const itemInput = document.getElementById("item-input");
const addItem = document.getElementById("add-btn");
const list = document.getElementById("list");
const li = document.querySelector("li");
console.log(li);

let newItem;
itemInput.addEventListener("change", function (e) {
  newItem = e.target.value;
});
let addList;
addItem.addEventListener("click", function () {
  addList = `<li>${newItem}</li>`;
  list.insertAdjacentHTML("beforeend", addList);
  // addItem.style.backgroundColor = "rgb(128, 0, 70)";
  itemInput.value = "";
  addList = undefined;
});

document.addEventListener("click", function (e) {
  console.log(e.target.nodeName);
  if (e.target.nodeName == "LI") {
    e.target.classList.toggle("strikethrough");
  }
});

// list.addEventListener("click", function () {
//   list.classList.toggle("strikethrough");
// });
