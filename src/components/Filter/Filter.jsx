import Select from "react-select";
import Button from "../Button/Button";

import {
  CarMileageWrap,
  InputFrom,
  InputTo,
  InputWrap,
  Label,
  SelectWrapper,
  SpanFrom,
  SpanTo,
  Wrapper,
} from "./Filter.styled";

const Filter = () => {
  return (
    <Wrapper>
      <SelectWrapper>
        <Label htmlFor="selectTitle">Car brand</Label>
        <Select
          inputId="selectTitle"
          placeholder="Enter the text"
          isClearable={true}
          styles={{
            control: (styles) => ({
              ...styles,
              width: "224px",
              height: "48px",
              border: "none",
              borderRadius: "14px",
              padding: "8px",
              fontSize: "18px",
              backgroundColor: "#f7f7fb",
              appearance: "none",
              fontWeight: 500,
              lineHeight: 1.11,
            }),
            option: (styles, { isFocused }) => {
              return {
                ...styles,
                color: isFocused ? "black" : "#121417",
              };
            },

            placeholder: (styles) => ({
              ...styles,
              color: "rgba(18, 20, 23, 1)",
            }),
          }}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </SelectWrapper>

      <SelectWrapper>
        <Label htmlFor="priceSelect">Price/ 1 hour</Label>
        <Select
          inputId="priceSelect"
          placeholder="To $"
          styles={{
            control: (styles) => ({
              ...styles,
              width: "125px",
              height: "48px",
              border: "none",
              borderRadius: "14px",
              padding: "8px",
              fontSize: "18px",
              backgroundColor: "#f7f7fb",
              appearance: "none",
              fontWeight: 500,
              lineHeight: 1.11,
            }),
            option: (styles, { isFocused }) => {
              return {
                ...styles,
                color: isFocused ? "black" : "#121417",
              };
            },

            placeholder: (styles) => ({
              ...styles,
              color: "rgba(18, 20, 23, 1)",
            }),
          }}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </SelectWrapper>

      <CarMileageWrap>
        <Label htmlFor="mileage">Car mileage / km</Label>
        <InputWrap>
          <InputFrom type="text" id="mileage" />
          <SpanFrom>From</SpanFrom>
          <InputTo type="text" />
          <SpanTo>To</SpanTo>
        </InputWrap>
      </CarMileageWrap>
      <Button text="Search" width="136px" height="48px" />
    </Wrapper>
  );
};

export default Filter;
