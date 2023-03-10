function getUserNames(array) {
  return array.map((element) => element.username);
}

function getUserNameLengths(array) {
  return array.map((element) => element.username.length);
}

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
console.log(getUserNames(users));
console.log(getUserNameLengths(users));

function parseInteger(array) {
  let res = array.map((element) => {
    if (isNaN(+element)) {
      return null;
    }
    return +element;
  });
  return res;
}

console.log(parseInteger(["1", "px", "3", "sd"]));
