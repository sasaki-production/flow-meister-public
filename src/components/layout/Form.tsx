import styles from './Form.module.css';
import Label from '../ui/Label';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Radio from '../ui/Radio';
import Checkbox from '../ui/Checkbox';
import Submit from '../ui/Submit';

const SSG_FORM_URL = process.env.NEXT_PUBLIC_SSG_FORM;

export default function Form() {
  if (!SSG_FORM_URL) {
    return <p>現在フォームの送信ができない状態です。</p>;
  }

  return (
    <form className={styles.form} action={SSG_FORM_URL} method="post">
      <div className={styles.body}>
        <div className={styles.field}>
          <Label text="社名" id="your-company"></Label>
          <Input
            id="your-company"
            type="text"
            name="会社・組織名"
            placeholder="例）山田株式会社"
            required={true}
          ></Input>
          <p className={styles.error}>必須の入力項目です。</p>
        </div>
        <div className={styles.field}>
          <Label text="お名前" id="name"></Label>
          <Input
            id="your-name"
            type="text"
            name="お名前"
            placeholder="例）山田太郎"
            required={true}
          ></Input>
          <p className={styles.error}>必須の入力項目です。</p>
        </div>
        <div className={styles.field}>
          <Label text="従業員数"></Label>
          <Radio
            name="従業員数"
            required={true}
            items={[
              {
                value: '1000',
                text: '1,000名以上',
                checked: true,
              },
              {
                value: '500-1000',
                text: '500名以上1,000名未満',
                checked: true,
              },
              {
                value: '100-500',
                text: '100名以上500名未満',
                checked: true,
              },
            ]}
          ></Radio>
          <p className={styles.error}>必須の入力項目です。</p>
        </div>
        <div className={styles.field}>
          <Label text="メールアドレス"></Label>
          <Input
            id="your-email"
            type="email"
            name="メールアドレス"
            placeholder="例）info@example.com"
            required={true}
            pattern="/^[a-zA-Z0-9.!#$%&amp;'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
          ></Input>
          <p className={styles.error}>
            入力がないか、入力内容に問題があります。
          </p>
        </div>
        <div className={styles.field}>
          <Label text="連絡先電話番号"></Label>
          <Input
            id="your-tel"
            type="tel"
            name="連絡先電話番号"
            placeholder="例）000-0000-0000"
            required={true}
          ></Input>
          <p className={styles.error}>必須の入力項目です。</p>
        </div>
        <div className={styles.field}>
          <Label text="その他" isRequired={false}></Label>
          <Textarea
            id="your-other"
            name="その他"
            placeholder="お伝え事項がございましたらご自由にご記入ください。"
          ></Textarea>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.privacy}>
          <p className={styles.privacyText}>個人情報保護方針に同意しますか？</p>
          <Checkbox
            name="個人情報保護方針に同意しますか？"
            required={true}
            items={[
              {
                value: '同意する',
                text: '同意する',
              },
            ]}
          ></Checkbox>
        </div>
        <div className={styles.submit}>
          <Submit text="送信する"></Submit>
        </div>
      </div>
    </form>
  );
}
