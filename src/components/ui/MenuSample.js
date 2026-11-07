'use client';

import { useState } from 'react';

export default function ButtonSample(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }
  return (
    <>
      <button type="button" onClick={handleOpen}>
        開くボタン
      </button>
      <button type="button" onClick={handleClose}>
        閉じるボタン
      </button>
      <p>{isOpen ? '開いています' : '閉じています'}</p>
    </>
  );
}
