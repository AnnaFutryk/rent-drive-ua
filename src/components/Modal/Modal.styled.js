import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  margin-top: 150px;
  width: 541px;
  height: 752px;
  border-radius: 24px;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  position: relative;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  padding-bottom: 52px;
  overflow-y: auto;
  max-height: 80vh;
`;

export const SvgCloseStyled = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const CarImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 14px;
  position: relative;
`;

export const InfoContainer = styled.div`
  margin-top: 14px;
  margin-bottom: 24px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #121417;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  :not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
    margin-bottom: 4px;
  }
`;

export const Item = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  color: #121417;
  font-weight: 400;
  line-height: 1.43;
  margin-top: 14px;
  width: 100%;
`;

export const InfoHead = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const ConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const ConditionItem = styled.li`
  border-radius: 35px;
  background-color: #f9f9f9;
  color: #363535;
  padding: 7px 14px;
`;

export const ConditionSpan = styled.span`
  color: #3470ff;
  font-weight: 600;
`;
