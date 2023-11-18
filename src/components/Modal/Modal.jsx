import React, { useEffect } from "react";
import { ReactComponent as SvgClose } from "../../images/x.svg";
import { createPortal } from "react-dom";
import {
  ModalWindow,
  Overlay,
  Wrapper,
  Title,
  Span,
  Item,
  Description,
  Info,
  ConditionItem,
  ConditionList,
  ConditionSpan,
  SvgCloseStyled,
  CarImg,
  InfoContainer,
  TitleContainer,
  InfoList,
} from "./Modal.styled";
import Button from "../Button/Button";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ cars, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <Wrapper>
          <SvgCloseStyled onClick={onClose}>
            <SvgClose />
          </SvgCloseStyled>
          <CarImg src={cars.img} alt={cars.make} />
          <InfoContainer>
            <TitleContainer>
              <Title>
                {cars.make} <Span>{cars.model}</Span>, {cars.year}
              </Title>
            </TitleContainer>
            <InfoList>
              <Item>{cars.address.split(",")[1]}</Item>
              <Item>{cars.address.split(",")[2]}</Item>
              <Item>Id: </Item>
              <Item>Year: {cars.year}</Item>
              <Item>Type: {cars.type}</Item>
            </InfoList>
            <InfoList>
              <Item>Fuel Consumption: {cars.fuelConsumption}</Item>
              <Item>Engine Size: {cars.engineSize}</Item>
            </InfoList>
            <Description>{cars.description}</Description>
            <Info>Accessories and functionalities:</Info>
            <InfoList>
              {cars.accessories.map((item) => (
                <Item key={item}>{item}</Item>
              ))}
            </InfoList>
            <InfoList>
              {cars.functionalities.map((item) => (
                <Item key={item}>{item}</Item>
              ))}
            </InfoList>
            <Info>Rental Conditions:</Info>
            <ConditionList>
              <ConditionItem>
                Minimum age:{" "}
                <ConditionSpan>
                  {new Date().getFullYear() - cars.year}
                </ConditionSpan>
              </ConditionItem>
              <ConditionItem>
                {cars.rentalConditions.split("\n")[1]}
              </ConditionItem>
              <ConditionItem>
                {cars.rentalConditions.split("\n")[2]}
              </ConditionItem>
              <ConditionItem>
                Mileage:{" "}
                <ConditionSpan>
                  {cars.mileage.toLocaleString("en-US")}
                </ConditionSpan>
              </ConditionItem>
              <ConditionItem>
                Price: <ConditionSpan>{cars.rentalPrice}</ConditionSpan>
              </ConditionItem>
            </ConditionList>
          </InfoContainer>
          <Button
            text="Rental car"
            width="168px"
            onClick={() => {
              window.location.href = "tel:+380730000000";
            }}
          />
        </Wrapper>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
