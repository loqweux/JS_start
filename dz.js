// // 1 DZ

// let user = prompt("Ваше имя");
// alert("Привет, " + user);

// // 2 DZ

// let num = prompt("Введите число");
// let stepen = prompt("Введите степень, в которую нужно возвести это число");
// console.log(num ** stepen);

// 3 DZ

// // 4 DZ

// let string = "my text";
// if (string == "some text") {
//   string = "another text";
// } else {
//   string = "some text";
// }
// console.log(string); // для проверки

// // 5 DZ

// let num = 5;
// if (num < 0) {
//   num = "less then zero";
// } else if (num > 0) {
//   num *= 10;
// } else {
//   num = 1;
// }
// console.log(num); // для проверки

// // 6 DZ

// let num = prompt("Введите число");
// let result;
// if (Number(num) < 5) {
//   result = 0;
// } else if (Number(num) > 5) {
//   result = 1;
// }
// console.log(result); // для проверки

// // 7 DZ

// let num1 = prompt("Введите 1 число");
// let num2 = prompt("Введите 2 число");

// let maxnum;

// if (Number(num1) > Number(num2)) {
//   maxnum = num1;
//   console.log(maxnum);
// } else if (Number(num2) > Number(num1)) {
//   maxnum = num2;
//   console.log(maxnum);
// } else {
//   console.log("числа одинаковы");
// }

// // 8 DZ

// let num1 = prompt("Введите 1 число");
// let num2 = prompt("Введите 2 число");

// if (num1 % num2) {
//   console.log("первое число кратно второму");
// } else {
//   console.log("не кратны");
// }

// // 9 DZ

// let ball = prompt("Введите средний балл");
// if (Number(ball) >= 1 && Number(ball) <= 4) {
//   console.log("Двоечник, иди учись!");
// } else if (Number(ball) >= 5 && Number(ball) <= 8) {
//   console.log("Неплохо, но давай еще поднажмем!");
// } else {
//   console.log("Ого, да ты настоящий отличник!");
// }

// // 10 DZ

// let num1 = prompt("Введите балл за экзамен(от 0 до 100)");
// let num2 = prompt("Введите количество выполненных проектов(от 0 и больше)");

// if (Number(num1) >= 90 && Number(num2) >= 10) {
//   console.log("Общий выпускной балл: 100");
// } else if (Number(num1) >= 75 && Number(num2) >= 5) {
//   console.log("Общий выпускной балл: 90");
// } else if (Number(num1) >= 50 && Number(num2) >= 2) {
//   console.log("Общий выпускной балл: 75");
// } else {
//   console.log("Общий выпускной балл: 0");
// }

// 11 DZ

let days = parseInt(
  prompt("Введите количество дней, на которые надо арендовать авто")
);
const cost = 40;
let result;

if (days >= 7) {
  result = cost * days - 50;
  console.log("Общая стоимость аренды: ", result);
} else if (days >= 3) {
  result = cost * days - 20;
  console.log("Общая стоимость аренды: ", result);
} else {
  result = cost * days;
  console.log("Общая стоимость аренды: ", result);
}
