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

      container2apiData: builder.query({
        query: () => ({
          url: `/container2/`,
          method: 'GET',
        }),
      }),

      container3apiData: builder.query({
        query: () => ({
          url: `/container3/`,
          method: 'GET',
        }),
      }),
      container4apiData: builder.query({
        query: () => ({
          url: `/container4/`,
          method: 'GET',
        }),
      }),
      container5apiData: builder.query({
        query: () => ({
          url: `/container5/`,
          method: 'GET',
        }),
      }),
  }),
 
  

  
});

export const { useCommentapiDataQuery ,
   useContainer1apiDataQuery,
   useContainer2apiDataQuery,
   useContainer3apiDataQuery,
   useContainer4apiDataQuery,
   useContainer5apiDataQuery
   
  } = commentapi;
