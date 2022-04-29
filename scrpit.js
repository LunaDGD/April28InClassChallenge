// 1.
const arrowMyFunction = (num1, num2) => {
  return num1 + num2;
};

//2.
const arrowAdd100 = (money) => money + 100;

//3.
const arrFunc = (str, letter) => {
  console.log(str.split(letter).length - 1);
};

arrFunc("Be Water, My Friend", "d");
