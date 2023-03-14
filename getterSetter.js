const obj = {
  _name: [], // [name, length] []
  get name() {
    return obj._name;
  },
  set name(value) {
    const items = value.split(", ");
    // console.log(items)
    items.map((elem) => obj._name.push([elem, elem.length]));
  },
};
console.log(obj.name); // []

obj.name = "Artak, Artavazd, Samvel";

console.log(obj.name); //[['Artak',5],['Artavazd', 8],['Samvel, 6]];
