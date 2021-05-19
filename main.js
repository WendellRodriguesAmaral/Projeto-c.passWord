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

function getPasswordStatus({ length }) {
  if (length === 0) return "";

  const status = {
    1: { label: "SENHA FRACA", color: "red" },
    2: { label: "SENHA MÉDIA", color: "#c28e00" },
    3: { label: "SENHA FORTE", color: "green" },
  };

  return status[length];
}

$generate.addEventListener("click", (event) => {
  generatedPassword = "";
  event.preventDefault();
  const passwordOptions = $checkboxes.filter((input) => input.checked).map((input) => input.dataset.value);

  passwordOptions.includes("Num") ? (generatedPassword += numberCharacters) : "";
  passwordOptions.includes("Esp") ? (generatedPassword += specialCharacters) : "";
  passwordOptions.includes("Ltr") ? (generatedPassword += letters) : "";

  let finalPass = "";
  for (let i = 0; i < $passwordLength.value; i++) {
    // chatAt retorna o elemento da posição passada
    finalPass += generatedPassword.charAt(Math.floor(Math.random() * generatedPassword.length));
  }
  $generatedPassword.value = finalPass;

  const { label, color } = getPasswordStatus(passwordOptions);
  $passwordStatus.innerHTML = label;
  $passwordStatus.style.color = color;
});
