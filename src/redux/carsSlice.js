import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carsApi = createApi({
  reducerPath: "cars",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6556061484b36e3a431edb1c.mockapi.io",
  }),
  tagTypes: ["Advert"],
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (page = 1, limit = 12) => `/advert?page=${page}&limit=${limit}`,
      providesTags: ["Advert"],
    }),
    toggleFavorite: builder.mutation({
      query: ({ id, isFavorite }) => ({
        url: `/favorites/${id}`, // Adjust the endpoint based on your API
        method: isFavorite ? "DELETE" : "POST",
      }),
      invalidatesTags: ["Advert"],
    }),
  }),
});

export const { useGetCarsQuery, useToggleFavoriteMutation } = carsApi;
