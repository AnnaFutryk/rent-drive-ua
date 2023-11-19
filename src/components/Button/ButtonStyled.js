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
  transition: color 250ms linear;
  &:hover {
    color: #0b44cd;
  }
`;

export const Btn = styled.button`
  width: ${(props) => props.width || "274px"};
  height: ${(props) => props.height || "44px"};
  color: white;
  background-color: #3470ff;
  display: inline-block;
  border-radius: 12px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    position: relative;
    top: 3px;
    background-color: #0b44cd;
  }
`;
