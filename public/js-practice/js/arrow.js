// function greet(name) {
//   // 従来の関数定義
//   return 'こんにちは、' + name + 'さん';
// }
// console.log(greet('ヤマダ'));

// const greetArrow = (name) => {
//   // アロー関数定義
//   return `こんばんは、${name}さん`;
// };

// 短縮形
// const greetArrow = (name) => `こんばんは、${name}さん`;

// 引数が1つの場合、括弧も省略可能
const greetArrow = name => `こんばんは、${name}さん`;

console.log(greetArrow('ヤマダ'));
