export function generatePassword() {
  let possibleLocations = Array.from({ length: 20 }, (_, i) => i);

  const uppercaseLocation = Math.floor(
    Math.random() * possibleLocations.length,
  );
  possibleLocations.slice(uppercaseLocation, 1);

  const numberLocation = Math.floor(Math.random() * possibleLocations.length);
  possibleLocations.slice(numberLocation, 1);

  let password: string[] = [];

  for (let i = 0; i < 20; i++) {
    if (i === uppercaseLocation) password.push(generateUppercase());
    else if (i === numberLocation) password.push(generateNumber());
    else password.push(generateLowercase());
  }

  password.splice(6, 0, "-");
  password.splice(13, 0, "-");

  return password.join("");
}

function generateUppercase() {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercase.charAt(Math.floor(Math.random() * uppercase.length));
}

function generateLowercase() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  return lowercase.charAt(Math.floor(Math.random() * lowercase.length));
}

function generateNumber() {
  const numbers = "0123456789";
  return numbers.charAt(Math.floor(Math.random() * numbers.length));
}
