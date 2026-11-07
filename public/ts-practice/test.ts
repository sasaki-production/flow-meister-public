// 変数に形を付ける
// 文字列：string
const userName: string = '山田';

// 数字：number
const age: number = 1;

// true oa false : boolean
const isActive: boolean = true;

// 関数に形をつける
function hello(name: string): string {
  return `Hello, ${name}さん`;
}
hello('田中');

// 型を使いまわそう
type UserName = string;

const userName1: UserName = '山田';
const userName2: UserName = '田中';
const userName3: UserName = '鈴木';

// リテラル型
type userName2 = '山田' | '田中' | '鈴木';

const userName4: userName2 = '山田';
const userName5: userName2 = '田中';
const userName6: userName2 = '鈴木';

// オブジェクトの型を定義する
type User = {
  name: string;
  age: number;
  email?: string;
};

const user: User = {
  name: '佐藤',
  age: 35,
  email: 'sato@.com',
};

// 配列の型を定義する
// const lines: number[] = [1, 2, 3, 4, 5]
// const texts: string[] = ['a', 'b', 'c', 'd', 'e']

const lines: Array<number> = [1, 2, 3, 4, 5];
const texts: Array<string> = ['a', 'b', 'c', 'd', 'e'];

const userObjects: User[] = [
  {
    name: '佐藤',
    age: 35,
    email: 'sato@.com',
  },
  {
    name: '鈴木',
    age: 25,
    email: 'suzuki@.com',
  },
];

// オプショナル

