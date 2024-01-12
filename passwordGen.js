function generatePassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSpecailChars
) {
  const lowerCaseChars = `abcdefghijklmnopqrstuvwxyz`;
  const upperCaseChars = `ABCDEFGHIJKLMOPQERSTUVWXYZ`;
  const numbersChars = `0123456789`;
  const specialChars = `@-_.`;

  let allowedChars = ``;
  let password = ``;

  allowedChars += includeLowerCase ? lowerCaseChars : ``;
  allowedChars += includeUpperCase ? upperCaseChars : ``;
  allowedChars += includeNumbers ? numbersChars : ``;
  allowedChars += includeSpecailChars ? specialChars : ``;

  if (passwordLength <= 0) {
    return `Password length must be greater than 0!`;
  }

  if (allowedChars.length === 0) {
    return `Must include anyone of the cases!`;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

const passwordLength = 16;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSpecailChars = true;

const result = generatePassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSpecailChars
);

console.log(result);
