const users = ['田中', '鈴木', '高橋'];

const greetings = users.map((user) => {
  return `こんにちは、${user}さん`;
});

console.log(greetings);