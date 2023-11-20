import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { selectMake } from "../../redux/filterSlice";
import { getSelectedMake } from "../../redux/selectors";
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

const Filter = ({ makes, onFilterChange }) => {
  const dispatch = useDispatch();
  const selectedMake = useSelector(getSelectedMake);

  const makeOptions = makes.map((make) => ({ value: make, label: make }));
  console.log(makeOptions);

  const handleFilterClick = () => {
    const newFilters = {
      make: selectedMake,
    };

    onFilterChange(newFilters);
  };

  return (
    <Wrapper>
      <SelectWrapper>
        <Label htmlFor="selectTitle">Car brand</Label>
        <Select
          inputId="selectTitle"
          placeholder="Enter the text"
          value={selectedMake}
          isClearable={true}
          onChange={(selectedOption) => dispatch(selectMake(selectedOption))}
          options={makeOptions}
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
      <Button
        text="Search"
        width="136px"
        height="48px"
        onClick={handleFilterClick}
      />
    </Wrapper>
  );
};

export default Filter;
