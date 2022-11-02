const textContainer = document.getElementById('text-container');

const car = {
  Manufacturer: 'Toyota',
  'Make and Model': 'Corolla AE101',
  Engine: '1,3 2E',
  'Body Style': 'Sedan',
};

result = '';

for (let [key, value] of Object.entries(car)) {
  // result = `${key}: ${value}`;
  result += `
    <ul>
    <li>${key}: ${value}</li>
    </ul>
  `;
}

// console.log(result);
textContainer.innerHTML = result;
