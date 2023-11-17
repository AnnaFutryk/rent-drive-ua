import { MoreBtn } from "./ButtonStyled";

const LoadMoreBtn = ({ onClick, text }) => {
  return (
    <>
      <MoreBtn type="button" onClick={onClick}>
        {text}
      </MoreBtn>
    </>
  );
};

export default LoadMoreBtn;
