//1 Data types : nguyên thủy(string,number,boolean,undefined,null) và object<array,object,fuction>

- Sự khác biẹt nguyên thủy và object : <tham trị> và <tham chiếu>
  khai baos nguyen thuy ---> giá trị của biến xuống vùng nhớ của máy
  const number = 1 -> lưu value 1 xuống bộ nhớ của máy
  khai bao object --> lưu địa chỉ nơi chứa giá trị --> bộ nhớ máy

  const newArray = [1,2,3] -> abc : address xuống bộ nhớ máy

//2 const ,var,let

1. gán lại giá trị
   const : ko dc,
   let : dc,
   var : dc

2. gán lại biện
   var : được,
   const : k dc,
   let : đ

3 Scope
var : Global Scope
let, const : Local Scope

4 Hoisting
var : có hoisting
let : k bi
const : k bị

//3 không ép buộc và ép buộc == && === (so sánh)

// ko ép buộc

const number = 1; // giá trj là 1 và kiểu dữ liệu number
const number2 = "1"; // giá trí là 1 và .......... string

console.log(number == number2); //true --> so sanh giá trí

//ep buoc
console.log(number === number2); // false -> so sánh giá trị và so sánh kiểu dữ liệu

//4 template string

const name = "MindX";

console.log("Hello" + name);

//template string

console.log(`Hello ${name}`);

//5 toán tử ba ngôi

1. ?

const results = 4 > 5 ? true : false;

// conditions ? logic 1 : logic2

// if(conditions){
logic 1
}
else{
logic 2
}

console.log(results);

2. &&

const name = 4 > 5 && "Mindx";

conditions && logic 1

if(conditions){
logic 1
}

console.log(name);

// 6 array : [] <DataTypes : Object> : tham chiếu : lưu địa chỉ xuống vùng nhớ;

index : đánh từ 0;
index lớn nhát = độ dài array -1

- detructing : [...array]

//7.Object : <doi tuong >
