import Button from "../Button/Button";
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
      <Button text="Learn more" />
      {/* модалка */}
    </Wrapper>
  );
};

export default CarItem;
