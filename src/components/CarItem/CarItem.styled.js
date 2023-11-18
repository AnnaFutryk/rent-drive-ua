import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  /* align-items: flex-start; */
`;

export const ImgBlock = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`;

export const Img = styled.img`
  border-radius: 14px;
  width: 100%;
  height: 268px;
  object-fit: cover;
`;

export const TitleBlock = styled.div`
  width: 265px;
  align-items: center;
  color: #121417;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Span = styled.span`
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Title = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const InfoList = styled.ul`
  width: 270px;
  height: 40px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 4px;
  margin-bottom: 28px;

  :not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
`;

export const InfoItem = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;
