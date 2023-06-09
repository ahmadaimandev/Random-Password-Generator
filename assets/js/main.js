const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "012345678";
const symbol = "!@#$%&'()*+,-./";

const allChars = upperCase + lowerCase + symbol + number;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand('copy');
}

/* 

javascript code to make the preloader in the button

const button = document.querySelector('.container button');

function createPassword() {
  // Add 'loading' class to the button
  button.classList.add('loading');

  // Simulate the password generation process
  setTimeout(() => {
    // Generate the password

    // Remove 'loading' class from the button
    button.classList.remove('loading');
  }, 2000);
}

button.addEventListener('click', createPassword);

*/