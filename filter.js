// function filterNumbers(array) {
//   const result = array.filter((element) => {
//     if (typeof element === "number") {
//       return element;
//     }
//   });
//   return result;
// }

// const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

// console.log(filterNumbers(arr));

// function filterUsers(array) {
//   array.filter((element, index) => {
//     if (array[index].lang === "ru") {
//       delete array[index];
//     }
//   });
//   return array.filter(Boolean);
// }

// const users = [
//   {
//     username: "Yuri Gagarin",
//     lang: "ru",
//   },
//   {
//     username: "Nil Armstrong",
//     lang: "ENG",
//   },
// ];
// console.log(filterUsers(users));

function filterByField(array) {
  return array.filter((element) => element.isAstronaut);
}
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

console.log(filterByField(users, "isAstronaut"));
