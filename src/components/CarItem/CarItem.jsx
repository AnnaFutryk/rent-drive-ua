import { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import {
  Img,
  ImgBlock,
  InfoItem,
  InfoList,
  Span,
  Title,
  TitleBlock,
  Wrapper,
} from "./CarItem.styled";

const CarItem = ({ cars }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <ImgBlock>
        {/* іконка hart */}
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
