import styled from "styled-components";

export const VideoBg = styled.video`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  object-fit: cover;
`;

export const OverLay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Text = styled.p`
  color: white;
  font-size: 24px;
  width: 360px;
  position: absolute;
  top: 220px;
  left: 80px;
`;
