let emailPattern = /^abc.*@bridgelabz\.co/;
console.log(emailPattern.test("abc@bridgelabz.co")); // true
console.log(emailPattern.test("abc.xyz@bridgelabz.co")); // true
console.log(emailPattern.test("abc@bridgelabzcom")); // false
console.log(emailPattern.test("abc@xyz.co.in")); // false
console.log(emailPattern.test("abc@bridgelabz.in")); // false
