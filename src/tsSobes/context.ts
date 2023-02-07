// export function hello() {
//   console.log("hello", this); // выведет { name: 'Tamila', hello: [Function: hello] }
// }

// const hello2 = () => {
//   console.log("hello", this); // если написать
// };

// const person = {
//   name: "Tamila",
//   hello: hello,
// };

// //=======================================================

// const printer = {
//   items: [1],
//   print() {
//     //this в foreach ссылается на контекст выше если бы была обычная функция тогда бы создавало свой контекст
//     this.items.forEach(() => console.log(this.items));
//   },
// };

// //=======================================================

// const test = {
//   func: function () {
//     const obj = {
//       name: "Tamils",
//     };
//     return function () {
//       console.log(this);
//     };
//   },
// };

// const newFunc = test.func();
// newFunc(); // выведет контекс func

// //=======================================================

// const obj = {
//   name: "danyil",
//   showName: function () {
//     console.log("Name : " + this.name);
//   },
// };

// const obj2 = {
//   name: "Anton",
// };

// obj.showName.bind(obj2)();

// //=======================================================
export const name=''

