const passwordOptions = {
  numbers: "1234567890",
  specialCharacters: "!@#$%¨&*_-+º^~.;/?",
  letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
};

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
  event.preventDefault();

  const passwordOptions = $checkboxes
    .filter((input) => input.checked)
    .map(({ dataset: { option } }) => passwordOptions[option]);

  const mergedOptions = [...passwordOptions];

  const newPassword = pickRandomValues(passwordOptions.length, mergedOptions);

  $generatedPassword.value = newPassword;

  const { label, color } = getPasswordStatus(passwordOptions);
  $passwordStatus.innerHTML = label;
  $passwordStatus.style.color = color;
});

function pickRandomValues(qtd, arr) {
  const randomIndex = () => Math.floor(Math.random() * arr.length);
  return Array.from(Array(qtd), () => arr[randomIndex()]).join("");
}
