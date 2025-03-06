let emailPattern = /^abc([._+-]?[a-zA-Z0-9]+)*@bridgelabz\.co(\.[a-z]{2})?$/;
console.log(emailPattern.test("abc@bridgelabz.co")); // true
console.log(emailPattern.test("abc.xyz@bridgelabz.co")); // true
console.log(emailPattern.test("abc-xyz@bridgelabz.co.in")); // true
console.log(emailPattern.test("abc+xyz@bridgelabz.co.us")); // true
console.log(emailPattern.test("abc_xyz@bridgelabz.co.au")); // true
console.log(emailPattern.test("abc@bridgelabz.co.abc")); // false (TLD should be 2 characters)
console.log(emailPattern.test("abc@bridgelabzcom")); // false
console.log(emailPattern.test("abc!xyz@bridgelabz.co")); // false (invalid special character)
console.log(emailPattern.test("abc@xyz.co.in")); // false