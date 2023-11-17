import styled from "styled-components";

export const MoreBtn = styled.button`
  display: inline-block;
  margin-left: 50%;
  margin-top: 100px;
  margin-bottom: 150px;
  color: #3470ff;
  font-family: "Manrope";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #0b44cd;
  }
`;

// export const Btn = styled.button`
//   width: ${(props) => props.width || "160px"};
//   color: ${(props) => props.textColor || "black"};
//   background-color: ${(props) => props.bgcolor || "lightgray"};
//   height: 80px;
//   display: inline-block;
//   margin-left: 50%;
//   margin-bottom: 28px;
//   transform: translateX(-50%);
//   min-width: 60;
//   padding: 14px;
//   border-radius: 20px;
//   border: none;
//   font-size: 18px;
//   cursor: pointer;

//   &:hover,
//   &:focus {
//     position: relative;
//     top: 3px;
//   }
// `;
