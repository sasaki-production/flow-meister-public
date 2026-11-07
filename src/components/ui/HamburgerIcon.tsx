'use client';

import styles from './HamburgerIcon.module.css';
type HamburgerIconProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function HeadingIcon({
  isOpen = false,
  onClick,
}: HamburgerIconProps) {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      className={`${styles.hamburger} ${isOpen && styles.isOpen}`}
      type="button"
      aria-label="メニューを開閉"
      onClick={handleClick}
    >
      <span className={styles.bar1}></span>
      <span className={styles.bar2}></span>
      <span className={styles.bar3}></span>
    </button>
  );
}
