import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favoritesSlice";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import {
  HeartBtn,
  Img,
  ImgBlock,
  InfoItem,
  InfoList,
  Span,
  Title,
  TitleBlock,
  Wrapper,
} from "./CarItem.styled";
import { ReactComponent as HeartSvg } from "../../images/heart.svg";
import { ReactComponent as HeartColorSvg } from "../../images/heart-color.svg";
import { getFavorites } from "../../redux/selectors";

const CarItem = ({ cars }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const fetchedFavorites = useSelector(getFavorites);

  const isLiked = fetchedFavorites.favorites.some(({ id }) => id === cars.id);

  const handleToggleFavorite = () => {
    if (isLiked) {
      dispatch(removeFavorite(cars));
    } else {
      dispatch(addFavorite(cars));
    }
  };

  return (
    <Wrapper>
      <ImgBlock>
        <HeartBtn>
          {isLiked ? (
            <HeartColorSvg onClick={handleToggleFavorite} />
          ) : (
            <HeartSvg onClick={handleToggleFavorite} />
          )}
        </HeartBtn>
        <Img src={cars.img} alt="Car" />
      </ImgBlock>
      <TitleBlock>
        <Title>
          {cars.make} <Span>{cars.model}</Span>, {cars.year}
        </Title>
        <Title> {cars.rentalPrice}</Title>
      </TitleBlock>
      <InfoList>
        <InfoItem>{cars.address.split(",")[1]}</InfoItem>
        <InfoItem>{cars.address.split(",")[2]}</InfoItem>
        <InfoItem>{cars.rentalCompany}</InfoItem>
        <InfoItem>{cars.type}</InfoItem>
        <InfoItem>{cars.model}</InfoItem>
        <InfoItem>{cars.mileage}</InfoItem>
        <InfoItem>{cars.accessories[0]}</InfoItem>
      </InfoList>
      <Button onClick={handleOpen} text="Learn more" />
      {open && <Modal onClose={handleClose} cars={cars} />}
    </Wrapper>
  );
};

export default CarItem;
