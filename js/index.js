// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(oneMush =>{
    if(state.mushrooms){
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(oneGreenPep => {
    if(state.greenPeppers){
      oneGreenPep.style.visibility = "visible";
    } else {
      oneGreenPep.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceElement = document.querySelector(".sauce");

  if (!state.whiteSauce) {
      sauceElement.classList.remove('sauce-white');
  } else {
    sauceElement.classList.add('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const glutenFreeCrustEl = document.querySelector(".crust");

  if(!state.glutenFreeCrust) {
    glutenFreeCrustEl.classList.remove("crust-gluten-free");
  } else {
    glutenFreeCrustEl.classList.add("crust-gluten-free");
  }

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttons = document.querySelectorAll(".btn");
  console.log(buttons);
  const arrIngredientsState = Object.values(state);
  console.log(arrIngredientsState);

  //peperoni
  if(state.pepperoni){
    document.querySelector(".btn.btn-pepperoni").classList.add("active");
  } else {
    document.querySelector(".btn.btn-pepperoni").classList.remove("active");
  }

  //mushrooms
  if(state.mushrooms){
    document.querySelector(".btn.btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active");
  }

  //green-pepper
  if(state.greenPeppers){
    document.querySelector(".btn.btn-green-peppers").classList.add("active");
  } else {
    document.querySelector(".btn.btn-green-peppers").classList.remove("active");
  }

  //white sauce
  if(!state.whiteSauce) {
    document.querySelector(".btn.btn-sauce").classList.remove("active");
  } else {
    document.querySelector(".btn.btn-sauce").classList.add("active");
  }

  //gluten-free crust
  if(!state.glutenFreeCrust) {
    document.querySelector(".btn.btn-crust").classList.remove("active");
  } else {
    document.querySelector(".btn.btn-crust").classList.add("active");
  }

};

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  
  // Selecting the price elements
  let totalPrice = document.querySelector(".panel.price strong");
  let sumPrice = basePrice;

  //Eraising the current HTML content of the <ul>
  const panelPriceList = document.querySelector('.panel.price ul');
  panelPriceList.innerHTML = '';

  //Defining a rule by which the ingredients with a "state{ ingredientName:true}" will be printed
  for(let prop in state) {
    if(state[prop]) {
      let newItem = document.createElement("li");
      newItem.innerHTML =`$${ingredients[prop].price} ${ingredients[prop].name}`;
      panelPriceList.appendChild(newItem)

      console.log(ingredients[prop].price);
      sumPrice = sumPrice + ingredients[prop].price;
      console.log(sumPrice);
    }
  }

  totalPrice.innerHTML = `<strong>$ ${sumPrice}</strong>`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener("click", () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})