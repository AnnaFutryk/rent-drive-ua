import { Btn } from "./ButtonStyled";

const Button = ({ onClick, text, width, height }) => {
  return (
    <>
      <Btn type="button" onClick={onClick} width={width} height={height}>
        {text}
      </Btn>
    </>
  );
};

export default Button;
