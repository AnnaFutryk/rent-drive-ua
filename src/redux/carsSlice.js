import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carsApi = createApi({
  reducerPath: "cars",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6556061484b36e3a431edb1c.mockapi.io",
  }),
  tagTypes: ["Advert"],
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => `/advert`,
      providesTags: ["Advert"],
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
