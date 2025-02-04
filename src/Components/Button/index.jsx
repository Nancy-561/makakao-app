import { StyledButton } from "./Button.styles";

export const Button = ({
  btnText,
  btnId,
  handleClick = () => {},
  btnClassName = "",
  type = "button",
}) => {
  return (
    <StyledButton
      className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline ${btnClassName}`}
      type={type}
      key={btnId}
      data-testid={btnId}
      onClick={handleClick}
    >
      {btnText}
    </StyledButton>
  );
};
