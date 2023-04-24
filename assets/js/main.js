const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "012345678";
const symbol = "!@#$%&'()*+,-./";

const allChars = upperCase + lowerCase + symbol + number;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() *upperCase.length)];
    password += upperCase[Math.floor(Math.random() *lowerCase.length)];
    password += upperCase[Math.floor(Math.random() *number.length)];
    password += upperCase[Math.floor(Math.random() *symbol.length)];

    while (lenght > password.length) {
        password = allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox = select();
    document.execCommand('copy');
}