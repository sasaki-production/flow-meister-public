'use client';

export default function ButtonSample({ type, text, ...restOfProps }) {
  function handleButtonClick() {
    alert('click!');
  }
  const buttonProps = {
    type: type,
    onClick: handleButtonClick,
  };
  return (
    <button type={type} onClick={handleButtonClick} {...restOfProps}>
      {text}
    </button>
    // <button {...buttonProps}>
    //   {text}
    // </button>
  );
}
