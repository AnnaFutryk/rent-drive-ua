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
    getCarById: builder.query({
      //використати в модалці
      query: (id) => `/advert/${id}`,
      providesTags: ["Advert"],
    }),
    deleteCar: builder.mutation({
      //використати в картці
      query: (id) => ({
        url: `/advert/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Advert"],
    }),
  }),
});

export const { useGetCarsQuery, useDeleteCarMutation, useGetCarByIdQuery } =
  carsApi;
