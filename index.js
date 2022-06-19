//1
// const number1 = 1; //value 1 --> bộ nhớ máy
// const number2 = 1; //value 1 --> bộ nhớ máy

// console.log(number1 === number2); //true

// const array1 = [1, 2, 3, 4]; //địa chỉ abc xuống bộ nhớ máy
// const array2 = [1, 2, 3, 4]; //dịa chỉ def .................

// console.log(array1 === array2); //false

//2
//const = constant

// console.log(nameSchool); //undefined

// const nameSchool = "mindx"; // 2 tac vu

// console.log(nameSchool); //mindx

// //4 template string

// const name = "MindX";

// console.log("Hello" + name);

// //template string

let array = [1, 2, 3, 4, 5, 6];

// array.unshift(7);
//array.push(7)
// array[length]=7

console.log([...array]);

let person = {
  name: "MindX",
  age: 19,
};

//c1
// console.log(person.name);

//c2
// const { age, name } = person;

// console.log(age, name);

//address : 'HN'

person = { ...person, address: "HN" };

console.log(person);

// let number = [1, 2, 3];

// number = [...number, 4];

// console.log(number);
