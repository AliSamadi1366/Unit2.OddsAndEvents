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
//create a function for sort all the numbers
function SortAll() {
  if (bank.length === 0) {
    return;
  }
  while (bank.length > 0) {
    const number = bank.shift();
    if (number % 2 === 0) {
      evens.push(number);
    }
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  render();
}
// === component ===
// create a form that allows users to input a number, form has 3 buttons including "Add number" "Sort 1" "Sort All". form should be created with component function.
//when the user clicks the "Add number" button, the number they entered into the input field, should be added to the number bank.
function NumberForm() {
  const $form = document.createElement("form");
  $form.classList.add("form");
  $form.innerHTML = `
      <label>
        Add a number to the bank
        <input name="number" type="number" min="1" />
      </label>
      <button type="submit">Add number</button>
      <button type="button" id="sortOne">Sort 1</button>
      <button type="button" id="sortAll">Sort All</button>

    `;
  $form.addEventListener("submit", (event) => {
    // this prevents the default form behavior of refreshing the page
    event.preventDefault();

    // Get the number that the user typed
    const data = new FormData($form);
    const newNumber = data.get("number");

    // Add that number to my state
    addNumber(Number(newNumber));
  });
  $form.querySelector("#sortOne").addEventListener("click", () => SortOne());
  $form.querySelector("#sortAll").addEventListener("click", () => SortAll());

  return $form;
}
// craete a box function for display the `odds` or `evens` numbers
function BoxNumbers() {
  const $box = document.createElement("section");
  $box.classList.add("box");
  const bankNumbers = bank.join(" ");
  $box.innerHTML = `
        <p>
          <span>Bank</span>
          <div class="boxnum">${bankNumbers}</div>
        </p>  
        <p>
          <span>Odds</span>
          <div class="boxnum">${odds}</div>
        </p>  
        <p>
          <span>Evens</span>
          <div class="boxnum">${evens}</div>
        </p> 
  `;
  return $box;
}
// The bank should display all of the numbers that the user has entered
// create 3 fields with component function including "Bank" "Odds" "Evens" which stored and diplay the state changes
//render the application
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <hr>
    <main>
      <h2>Odds and Events</h2>
      <form></form>
      <BoxNumbers></BoxNumbers>
    </main>
    `;
  $app.querySelector("form").replaceWith(NumberForm());
  $app.querySelector("BoxNumbers").replaceWith(BoxNumbers(bank));
}
render();
