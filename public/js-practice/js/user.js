// const user = {
//   fullname: '山田太郎',
//   age: 30,
// };

// 分割代入を使わない
// const fullname = user.fullname;
// const age = user.age;

// console.log(`こんにちは、${fullname}さん`);
// console.log(`年齢は、${age}歳です`);

// 分割代入を使う
// const { fullname } = user;

// console.log(`こんにちは、${fullname}さん`);
// console.log(`年齢は、${age}歳です`);

// function greet({ fullname, age }) {
//   console.log(`こんばんは、${fullname}さん`);
//   console.log(`年齢は、${age}歳です`);
// }

// console.log(greet(user));

const users = ['田中', '鈴木', '高橋'];

// const user1 = users[0];
// const user2 = users[1];
// const user3 = users[2];

// 分割代入を使う
const [user1, user2, user3] = users;

console.log(`ユーザー1:${user1}`);
console.log(`ユーザー2:${user2}`);
console.log(`ユーザー3:${user3}`);
