let emailPattern = /^abc/;
console.log(emailPattern.test("abc.xyz@bridgelabz.co.in")); // true
console.log(emailPattern.test("xyz.abc@bridgelabz.co.in")); // false
