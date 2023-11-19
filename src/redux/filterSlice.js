import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  make: "",
  pricePerHour: "",
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
      state.pricePerHour = action.payload.pricePerHour;
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
