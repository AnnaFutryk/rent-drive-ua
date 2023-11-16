import { configureStore } from "@reduxjs/toolkit";
import { carsApi } from "./carsSlice";

export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    carsApi.middleware,
  ],
});
