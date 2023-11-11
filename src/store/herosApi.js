import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setHerosMap } from "./searchSlice";

export const herousApi = createApi({
  reducerPath: "herousApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://superheroapi.com/api.php/3373053449671680/search/",
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    getHeros: build.query({
      query: (str) => `${str}`,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setHerosMap(data.results));
      },
    }),
  }),
});

export const { useGetHerosQuery } = herousApi;
