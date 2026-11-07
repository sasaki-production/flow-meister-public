//同期詳細
// console.log('1');
// console.log('2');
// console.log('3');

//非同期詳細
async function run() {
  console.log('1');

  // setTimeout(() => {
  //   console.log('2');
  // }, 1000);

  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((response) => response.json())
  //     .then((json) => console.log('2', json));

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await response.json();
  console.log('2');
  console.log(json);

  console.log('3');
  console.log('json.title');
}
run();
