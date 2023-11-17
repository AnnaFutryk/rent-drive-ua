import { Btn } from "./ButtonStyled";

const Button = ({ onClick, text, width, textColor, bgcolor }) => {
  return (
    <>
      <Btn
        type="button"
        onClick={onClick}
        width={width}
        textColor={textColor}
        bgcolor={bgcolor}
      >
        {text}
      </Btn>
    </>
  );
};

export default Button;
