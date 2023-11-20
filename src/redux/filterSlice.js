import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  make: "",
  rentalPrice: "",
  mileageMin: "",
  mileageMax: "",
  selectedMake: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    setFilter(state, action) {
      state.make = action.payload.make;
      state.rentalPrice = action.payload.rentalPrice;
      state.mileageMin = action.payload.mileageMin;
      state.mileageMax = action.payload.mileageMax;
    },
    selectMake(state, action) {
      state.selectedMake = action.payload;
    },
  },
});

export const { setFilter, selectMake } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
