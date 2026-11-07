import ButtonSample from './ButtonSample.js';

export default async function CardSample() {
  const buttons = [
    { id: 1, text: '詳細を見る' },
    { id: 2, text: '購入する' },
    { id: 3, text: 'お気に入り' },
    { id: 4, text: '戻る' },
  ];

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await response.json();

  console.log(0 ?? 'データがありません');


 
  return (
    <>
      <div className="card">
        <p style={{ color: '#333', backgroundColor: 'orange' }}>
          カードの内容が入ります。
        </p>
        <p>fetchで取得したタイトルは{json.title}です。</p>
        {buttons.map((button) => (
          <ButtonSample key={button.id} type="button" text={button.text} />
        ))}
      </div>
    </>
  );
}
