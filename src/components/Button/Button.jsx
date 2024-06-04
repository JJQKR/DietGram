import { NewPostButton } from "./Button.style";

const Button = ({ type, onclickFunc }) => {
  return (
    <NewPostButton type={type} onClick={onclickFunc}>
      +
    </NewPostButton>
  );
};

export default Button;
