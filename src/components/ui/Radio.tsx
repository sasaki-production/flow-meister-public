import styles from './Radio.module.css';

type RadioProps = {
  items: {
    value: string;
    text: string;
    checked?: boolean;
  }[];
  name: string;
  required?: boolean;
};

export default function Radio({ name, items, ...restOfProps }: RadioProps) {
  return (
    <div className={styles.radio}>
      {items.map((item) => {
        return (
          <label key={item.value} className={styles.item}>
            <input
              className={styles.input}
              type="radio"
              name={name}
              value={item.value}
              defaultChecked={item.checked}
              {...restOfProps}
            />
            <span className={styles.text}>{item.text}</span>
          </label>
        );
      })}
    </div>
  );
}
