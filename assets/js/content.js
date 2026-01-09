const servicesData = [
  ["icon-clock", "Opened 24/7", "We are available around the clock, ensuring that you can enjoy our services anytime you need, with consistent care and attention."],
  ["icon-streetsign", "Free parking", "Enjoy hassle-free visits with our complimentary parking, making your experience smooth and convenient from the moment you arrive."],
  ["icon-map", "Central Location", "Our prime location in the city center ensures easy access for everyone, so you can reach us quickly and comfortably."],
  ["icon-heart", "High quality", "We prioritize excellence in every detail, delivering top-notch services and a premium experience for all our guests."]
];

const specialitiesData = [
  ["assets/images/restaurant/dish1.jpg", "Lamb"],
  ["assets/images/restaurant/dish2.jpg", "Eggs"],
  ["assets/images/restaurant/dish3.jpg", "Veal"],
  ["assets/images/restaurant/dish4.jpg", "Pork"]
];

document.addEventListener("DOMContentLoaded", () => {

  const servicesContainer = document.getElementById("services-list");
  const specialitiesContainer = document.getElementById("specialities-list");

  servicesData.forEach(item => {
    servicesContainer.innerHTML += `
      <div class="col-sm-6 col-md-3 col-lg-3">
        <div class="features-item">
          <div class="features-icon">
            <span class="${item[0]}"></span>
          </div>
          <h3 class="features-title font-alt">${item[1]}</h3>
          ${item[2]}
        </div>
      </div>
    `;
  });

  specialitiesData.forEach(item => {
  specialitiesContainer.innerHTML += `
    <div class="col-sm-6 col-md-3 col-lg-3">
      <div class="content-box">
        <div class="content-box-image">
          <img src="${item[0]}" alt="${item[1]}">
        </div>
        <h3 class="content-box-title font-serif">${item[1]}</h3>
      </div>
    </div>
  `;
});

});



const menuItems = [
  { title: "Wild Mushroom Bucatini with Kale", detail: "Mushroom / Veggie / White Sauce", price: "$10.5" },
  { title: "Lemon and Garlic Green Beans", detail: "Lemon / Garlic / Beans", price: "$14.5" },
  { title: "LambBeef Kofka Skewers with Tzatziki", detail: "Lamb / Wine / Butter", price: "$18.5" },
  { title: "Imported Oysters Grill (5 Pieces)", detail: "Oysters / Veggie / Ginger", price: "$15.9" },
  { title: "Meatloaf with Black Pepper-Honey BBQ", detail: "Pepper / Chicken / Honey", price: "$16.4" },
  { title: "Wild Mushroom Bucatini with Kale", detail: "Mushroom / Veggie / White Sauce", price: "$12.5" },
  { title: "Lemon and Garlic Green Beans", detail: "Lemon / Garlic / Beans", price: "$13.5" },
  { title: "LambBeef Kofka Skewers with Tzatziki", detail: "Lamb / Wine / Butter", price: "$17.9" },
  { title: "Imported Oysters Grill (5 Pieces)", detail: "Oysters / Veggie / Ginger", price: "$14.9" },
  { title: "Meatloaf with Black Pepper-Honey BBQ", detail: "Pepper / Chicken / Honey", price: "$15.7" }
];


const menuContainer = document.getElementById("menu-container");

const col1Items = menuItems.slice(0, Math.ceil(menuItems.length / 2));
const col2Items = menuItems.slice(Math.ceil(menuItems.length / 2));

function generateColumnHTML(items) {
  return `<div class="col-sm-6">
    ${items.map(item => `
      <div class="menu">
        <div class="row">
          <div class="col-sm-8">
            <h4 class="menu-title font-alt">${item.title}</h4>
            <div class="menu-detail font-serif">${item.detail}</div>
          </div>
          <div class="col-sm-4 menu-price-detail">
            <h4 class="menu-price font-alt">${item.price}</h4>
          </div>
        </div>
      </div>
    `).join('')}
  </div>`;
}

menuContainer.innerHTML = generateColumnHTML(col1Items) + generateColumnHTML(col2Items);


const app = document.getElementById('app');

const section = document.createElement('div');
section.id = 'reserve-section';
app.appendChild(section);


const colLeft = document.createElement('div');
colLeft.className = 'form-container';


const form = document.createElement('form');
form.id = 'reserveForm';
form.noValidate = true;

const fields = [
  {
    label: 'Full Name',
    type: 'text',
    name: 'name',
    placeholder: 'Enter your full name',
    required: true,
    regex: /^[a-zA-Z ]{2,30}$/,
    example: 'Example: John Doe'
  },
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'Enter your email',
    required: true,
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    example: 'Example: email@example.com'
  },
  {
    label: 'Date',
    type: 'date',
    name: 'date',
    required: true,
    regex: /^\d{4}-\d{2}-\d{2}$/,
    example: 'Example: 2026-01-02'
  },
  {
    label: 'Time',
    type: 'time',
    name: 'time',
    required: true,
    regex: /^([0-1]\d|2[0-3]):([0-5]\d)$/,
    example: 'Example: 18:30'
  },
  {
    label: 'Number of Guests',
    type: 'number',
    name: 'guests',
    required: true,
    min: 1,
    max: 20,
    regex: /^\d{1,2}$/,
    example: 'Example: 2'
  }
];


fields.forEach(f => {
  const div = document.createElement('div');
  div.className = 'mb-3';

  const label = document.createElement('label');
  label.className = 'form-label';
  label.htmlFor = f.name;
  label.textContent = f.label;
  div.appendChild(label);

  const input = document.createElement('input');
  input.className = 'form-control';
  input.type = f.type;
  input.name = f.name;
  input.id = f.name;
  if(f.placeholder) input.placeholder = f.placeholder;
  if(f.min) input.min = f.min;
  if(f.max) input.max = f.max;
  div.appendChild(input);

  const help = document.createElement('div');
  help.className = 'form-help';
  help.style.display = 'none';
  help.textContent = f.example;
  div.appendChild(help);

  form.appendChild(div);
});

const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.id = 'reserveSubmit';
submitBtn.textContent = 'Reserve';
form.appendChild(submitBtn);

colLeft.appendChild(form);
section.appendChild(colLeft);



form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  fields.forEach(f => {
    const input = form.querySelector(`[name="${f.name}"]`);
    const help = input.nextElementSibling;

    if(f.required && !input.value){
      input.classList.add('form-error');
      help.style.display = 'block';
      valid = false;
      return;
    }

    if(f.regex && !f.regex.test(input.value)){
      input.classList.add('form-error');
      help.style.display = 'block';
      valid = false;
    } else {
      input.classList.remove('form-error');
      help.style.display = 'none';
    }
  });

  if(valid){
    alert('Form submitted successfully! (demo only)');
    form.reset();
  }
});


