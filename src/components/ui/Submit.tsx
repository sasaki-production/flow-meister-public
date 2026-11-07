import styles from './Submit.module.css';

type SubmitProps = {
  text: string;
};

export default function Button({ text }: SubmitProps) {
  return (
    <button type="submit" className={styles.submit}>
      {text}
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
      >
        <path
          d="M17.6223 8.62533C18.1246 8.1231 18.1246 7.30748 17.6223 6.80525L11.1938 0.376674C10.6915 -0.125558 9.87589 -0.125558 9.37366 0.376674C8.87143 0.878906 8.87143 1.69453 9.37366 2.19676L13.6125 6.43158H1.28571C0.574554 6.43158 0 7.00614 0 7.7173C0 8.42846 0.574554 9.00301 1.28571 9.00301H13.6085L9.37768 13.2378C8.87545 13.7401 8.87545 14.5557 9.37768 15.0579C9.87991 15.5602 10.6955 15.5602 11.1978 15.0579L17.6263 8.62935L17.6223 8.62533Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
