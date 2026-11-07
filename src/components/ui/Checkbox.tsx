import styles from './Checkbox.module.css';

type CheckboxProps = {
  items: {
    value: string;
    text: string;
    checked?: boolean;
  }[];
  name: string;
  required?: boolean;
};

export default function Checkbox({
  name,
  items,
  ...restOfProps
}: CheckboxProps) {
  return (
    <div className={styles.checkbox}>
      {items.map((item) => {
        return (
          <label key={item.value} className={styles.item}>
            <input
              className={styles.input}
              type="checkbox"
              name={name}
              value={item.value}
              defaultChecked={item.checked}
              {...restOfProps}
            />
            <span className={styles.text}>{item.text}</span>
          </label>
        );
      })}
      <p className={styles.error}>必須の入力項目です。</p>
    </div>
  );
}
