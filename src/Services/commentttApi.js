import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react"

export const commentapi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
  }),
  reducerPath: 'commentapi', 
  endpoints: (builder) => ({
   commentapiData: builder.query({
      query: () => ({
        url: `/comments/`,
        method: 'GET',
      }),
    }),

    container1apiData: builder.query({
        query: () => ({
          url: `/container1/`,
          method: 'GET',
        }),
      }),
  }),
});

export const { useCommentapiDataQuery , useContainer1apiDataQuery} = commentapi;
