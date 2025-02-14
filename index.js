// define variable Bank Odds Evens in the states section
// Variable "Bank" store the all numbers
// variable "Odds" store the odds number
// variable "Evens" store the even numbers
// === State ===
/** Array of numbers */
let bank = [];

/** Array of odds numbers */
let odds = [];

/** Array of evens number */
let evens = [];

/**
 * Adds `n` numbers to `bank`
 * @param {number} n - the number added to the bank
 */
function addNumber(n) {
  bank.push(n);
  render();
}

/**
 * Moves one number from `bank ` to `Odds` or Evens,
 * but only if there is at least one number to move.
 */
function SortOne() {
  if (bank.length === 0) {
    return;
  }
  const number = bank.shift();
  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }
  render();
}
// === component ===
// create a form that allows users to input a number, form has 3 buttons including "Add number" "Sort 1" "Sort All". form should be created with component function.
//when the user clicks the "Add number" button, the number they entered into the input field, should be added to the number bank.
function NumberForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
      <label>
        Add a number to the bank
        <input name="number" type="number" min="1" />
      </label>
      <button>Add number</button>
      <button>Sort 1</button>
      <button>Sort All</button>
    `;
  $form.addEventListener("Add number", (event) => {
    // this prevents the default form behavior of refreshing the page
    event.preventDefault();

    // Get the number that the user typed
    const data = new FormData($form);
    const newNumber = data.get("number");

    // Add that number to my state
    addNumber(newNumber);
  });
  // TODO: add a `Add number` event listener
  return $form;
}
// create 3 fields with component function including "Bank" "Odds" "Evens" which stored and diplay the state changes

// The number bank should display all of the numbers that the user has entered.

//render the application
