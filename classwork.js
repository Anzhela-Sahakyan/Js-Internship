// Primitive and Reference Type Coercions - GTU 01
// Please try to guess, test, and then understand following examples:
// primitives
// console.log(Number("0x77") === 0x77); // false     //true
// console.log(Number("077") === 077); // true     //false
// console.log(Number(" 12")); // 12       Number('1 2')
// console.log(isNaN(" ")); // false
// console.log(0 === +0); // true
// console.log(+0 === -0); // true
// console.log(1 / "2"); // 0.5
// console.log(1 / 0); // infinity
// console.log(0 / 0); // 1    // NaN
// console.log(+true); // 1
// console.log(+false); // 0
// console.log(+null); //   0
// console.log(+undefined); // NaN
// console.log(typeof 0x77); // number

// operators
// Suppose that
// and suppose that e isn't declared
// binary + operator

const a = {
  valueOf() {
    return 224;
  },
};

const b = {
  valueOf() {
    return "hey";
  },
};

const c = {
  valueOf() {
    return new String("some");
  },
};

const d = {
  toString() {
    return 22;
  },
};

const f = {
  toString() {
    return new Number(5);
  },
};

// null + undefined   //  + NaN,  == true, === false,   < false,  > true, >= true, <= true
// null + true   // 0 + 1 = 1   // - -1,  * 0, / 0, % 0, == false, === false, < true, > false, >= false, <= true
// null + false  // 0 + 0     // - 0,  * 0, / NaN, % NaN, == false, === false, < false, > false, >= true, <= true
// undefined + true   // NaN + 1 = NaN //  == false, === false, < false, > false, >= false, <= false
// undefined + false  // NaN + 0 = NaN  //  == false, === false, < false, > false, >= false, <= false
// undefined + 5   // NaN + 5 = NaN  //  == false, === false, < false, > false, >= false, <= false
// true + false  // 1 + 0  // - 1,  * 0, / Infinity, % Infinity, == false, === false, < false, > true, >= true, <= false
// true + 2  // 3 // - -1,  * 2, / 0.5, % 1, == false, === false, < true, > false, >= false, <= true
// false + 4  // 4  // - -4,  * 0, / 0, % 0, == false, === false, < true, > false, >= false, <= true
// false + NaN  // NaN //  == false, === false, < false, > false, >= false, <= false
// 5 + 3  // 8
// 5 + NaN   // NaN //  == false, === false, < false, > false, >= false, <= false
// 'hello' + NaN  // NaN //  == false, === false, < false, > false, >= false, <= false
// 'hello' + a + b + c + d + e + f  // "hello224NaNNaN22NaN5"

// try the same also for binary -, *, /, %, ==, ===, <, >, >=, <= operators as you did for binary + operator
// unary - operator
// console.log(-[]); // 0     -0
// console.log(-[2]); // -2
// console.log(-[2, 3]); // NaN
// console.log(-function () {}); //NaN
// console.log(-a); // -224
// console.log(-b); // NaN
// console.log(-c); // NaN
// console.log(-d); // -22
// //console.log(-e); // error
// console.log(-f); // -5        error
// test the same also for b, c, d, e and f
// try the same also for both postfix and prefix ++ and -- operators as you did for unary - operator
// postfix and prefix ++ & -- operators
// . for each one of a, b, c, d, e, f try the following console.log(a, a++, a); &
// console.log(a, ++a, a);
// . do the same also for -- operator
// ? operator
// . 1 ? 234 : 32
// . for each one of a, b, c, d, e, f try the following a[a.hasOwnProperty('valueOf') ?
// 'valueOf' : 'toString']()
// instanceof operator
// console.log(null instanceof Object); // false
// console.log(true instanceof Boolean); // false
// console.log(false instanceof Boolean); // false
// console.log(1 instanceof Number); // false
// console.log(NaN instanceof Number); // false
// console.log("hello" instanceof String); // false
// console.log(function () {} instanceof Function); //true
// in operator
// console.log("valueOf" in null); //error
// console.log("valueOf" in undefined); // error
// console.log("valueOf" in true); // error
// console.log("valueOf" in 1); error
// console.log("valueOf" in "toString"); error
// delete operator
console.log(delete {}.valueOf); // true
console.log(delete 1); // true
console.log(delete a.x); //true
a.y = 3;
console.log(delete a.y); //true
console.log(delete f); // false
