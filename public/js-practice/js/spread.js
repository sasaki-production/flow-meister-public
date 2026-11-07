//配列の場合
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8, 9, 10];

console.log(newNumbers);

//オブジェクトの場合
const book = {
  title: 'JavaScript入門',
  author: '山田太郎',
  price: 2500,
  // pages: 300,
};
const newBook = {
  ...book,
  pages: 320,
};

console.log(newBook);

//分割代入
const { title, author, ...rest } = newBook;

console.log(title);
console.log(author);
console.log(rest);
