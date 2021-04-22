const CloseButton = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'
      width={8} height={8}
      stroke="rgba(154, 160, 166, .8)"
      {...props}
    >
      <path strokeLinecap='square' strokeWidth='1.5' d='M0 0 L8 8 M8 0 L0 8' />
    </svg>
  );
};

export default CloseButton;
