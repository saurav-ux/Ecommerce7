import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react"

export const commentapi = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://sauravvbackend.vercel.app/',
    baseUrl:'http://localhost:5003/'
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
     
      query: () => {
      //  const token = localStorage.getItem('token');
      //  console.log("apiToken",token) // Retrieve token from localStorage
        return {
          url: `/conData/`,
          method: "GET",
          // headers: {
          //   Authorization: token ? `Bearer ${token}` : '', // Include token in Authorization header if it exists
          // },
        };
      },
    
      //   query: () => ({
      //     url: `/conData/`,
      //     method: 'GET',
      //   }),
      }),

      container2apiData: builder.query({
        query: () => ({
          url: `/con2Data/`,
          method: 'GET',
        }),
      }),

      container3apiData: builder.query({
        query: () => ({
          url: `/con3Data/`,
          method: 'GET',
        }),
      }),
      container4apiData: builder.query({
        query: () => ({
          url: `/con4Data/`,
          method: 'GET',
        }),
      }),
      container5apiData: builder.query({
        query: () => ({
          url: `/con5Data/`,
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
