const specialCharacters = `!@#$%¨&*_-+º^~.;/?`;
const numberCharacters = `1234567890`;
const letters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;

let generatedPassword = "";

const $passwordLength = document.querySelector("input#Tam");
const $currentPasswordLength = document.querySelector("span#TamValue");
const $checkboxes = [...document.querySelectorAll("input[type=checkbox]")];
const $generate = document.querySelector("button");

let $generatedPassword = document.querySelector("input#res");
let $passwordStatus = document.querySelector("small#powerPW");

$passwordLength.addEventListener("input", () => ($currentPasswordLength.innerHTML = $passwordLength.value));

function power(arr) {
  if (arr.length === 0) {
    return "";
  } else {
    if (arr.length == 1) {
      $passwordStatus.innerHTML = "SENHA FRACA";
      $passwordStatus.style.color = "red";
    } else if (arr.length == 2) {
      $passwordStatus.innerHTML = "SENHA MÉDIA";
      $passwordStatus.style.color = "#c28e00";
    } else {
      $passwordStatus.innerHTML = "SENHA FORTE";
      $passwordStatus.style.color = "green";
    }
  }
}

$generate.addEventListener("click", (event) => {
  generatedPassword = "";
  event.preventDefault();
  const pass = $checkboxes.filter((input) => input.checked).map((input) => input.dataset.value);

  pass.includes("Num") ? (generatedPassword += numberCharacters) : "";
  pass.includes("Esp") ? (generatedPassword += specialCharacters) : "";
  pass.includes("Ltr") ? (generatedPassword += letters) : "";

  let finalPass = "";
  for (let i = 0; i < $passwordLength.value; i++) {
    // chatAt retorna o elemento da posição passada
    finalPass += generatedPassword.charAt(Math.floor(Math.random() * generatedPassword.length));
  }
  $generatedPassword.value = finalPass;
  power(pass);
});
