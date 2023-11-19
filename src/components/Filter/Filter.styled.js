import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  gap: 18px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #8a8a89;
  margin-bottom: 8px;
`;

export const CarMileageWrap = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  display: flex;
  position: relative;
`;

export const InputFrom = styled.input`
  display: block;
  width: 163px;
  height: 48px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: #f7f7fb;
  border-radius: 14px 0 0 14px;
  padding-left: 0;
  text-indent: 70px;
  color: #121417;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  &:focus {
    outline-color: rgba(138, 138, 137, 0.2);
  }
`;

export const InputTo = styled.input`
  display: block;
  width: 162px;
  height: 48px;
  border: none;
  background-color: #f7f7fb;
  border-radius: 0 14px 14px 0;
  padding-left: 0;
  text-indent: 45px;

  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  &:focus {
    outline-color: rgba(138, 138, 137, 0.2);
  }
`;

export const SpanFrom = styled.span`
  position: absolute;
  display: block;
  left: 24px;
  top: 14px;
  z-index: 9;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const SpanTo = styled.span`
  position: absolute;
  display: block;
  left: 180px;
  top: 14px;
  z-index: 9;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;
