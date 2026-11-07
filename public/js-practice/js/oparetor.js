// 条件　? trueのときの値 : falseのときの値
const isLogIn = true;

// const message = isLogIn ? 'ログイン中' : 'ログアウト中';

// let message;
// if (isLogIn) {
//   message = 'ログイン中';
// } else {
//   message = 'ログアウト中';
// }

// console.log(`isLoginが「${isLogIn}」のとき、messageは「${message}」になる。`); // ログイン中

// const message = isLogIn && 'ログイン中';
 const message = isLogIn || 'ログアウト中';
console.log(`isLoginが「${!isLogIn}」のとき、messageは「${message}」になる。`); // ログイン中
