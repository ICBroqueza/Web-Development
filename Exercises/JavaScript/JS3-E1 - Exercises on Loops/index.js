const box = document.getElementById('box-container');
const itemBox = document.getElementById('item-box');
const groceries = {
  Meats: ['Fish', 'Chicken', 'Pork', 'Beef'],
  Vegetables: ['Carrots', 'Petchay', 'Talong', 'Sitaw'],
  'Soaps and Shampoos': ['Head n shoulders', 'safeguard', 'dove', 'rejoice'],
  'Canned goods': ['corned beef', 'sardines', 'spam', 'beef loaf'],
};

let displayItems = '';

for (const [key, value] of Object.entries(groceries)) {
  // console.log(key);
  // console.log(value.length);

  displayItems += `
  <div id="box">
  <label>${key}</label>
  <br>
  <input type="checkbox">${value[0]}
  <br>
  <input type="checkbox">${value[1]}
  <br>
  <input type="checkbox">${value[2]}
  <br>
  <input type="checkbox">${value[3]}
  </div>
  `;
}

// console.log(displayItems);
box.innerHTML = displayItems;
