'use client';

import PageFirstView from '@/components/layout/PageFirstView';
import OneColumn from '@/components/layout/OneColumn';
import styles from './Error.module.css';
import Image from 'next/image';
import ButtonOutline from '@/components/ui/ButtonOutline';

export default function Error() {
  return (
    <>
      <PageFirstView
        subText="Error"
        mainText="システムエラー"
        textAlign="isCenter"
      />
      <OneColumn isSlim={false}>
        <div className={styles.thanks}>
          <p className={styles.lead}>Error</p>
          <p className={styles.text}>
           現在システムでエラーが発生しております。<br >
           </br>
           しばらくしてからもう一度アクセスしていただくが、「support@example.com」まで連絡ください。
          </p>
          <Image
            src="/thanks.png"
            alt="Thank you!"
            width="320"
            height="160"
            loading="lazy"
            decoding="async"
            className={styles.image}
          />
          <div className={styles.button}>
            <ButtonOutline href="/" text="ホームへ戻る"></ButtonOutline>
          </div>
        </div>
      </OneColumn>
    </>
  );
}
