let str = "naman";
let flag = true;
for (let i = 0; i < str.length; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    flag = false;
    break;
  }
}
if (!flag) {
  console.log("not palindrome");
} else {
  console.log("it is a palindrome");
}
