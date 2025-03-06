let emailPattern = /^abc.*@bridgelabz/;
console.log(emailPattern.test("abc@bridgelabz")); // true
console.log(emailPattern.test("abc.xyz@bridgelabz")); // true
console.log(emailPattern.test("abc@xyz.co.in")); // false
console.log(emailPattern.test("xyz@bridgelabz")); // false
