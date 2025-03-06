let emailPattern = /^abc([._+-]?[a-zA-Z0-9]+)*@bridgelabz\.co/;
console.log(emailPattern.test("abc@bridgelabz.co")); // true
console.log(emailPattern.test("abc.xyz@bridgelabz.co")); // true
console.log(emailPattern.test("abc-xyz@bridgelabz.co")); // true
console.log(emailPattern.test("abc+xyz@bridgelabz.co")); // true
console.log(emailPattern.test("abc_xyz@bridgelabz.co")); // true
console.log(emailPattern.test("abc!xyz@bridgelabz.co")); // false (invalid special character)
console.log(emailPattern.test("abc@xyz.co.in")); // false