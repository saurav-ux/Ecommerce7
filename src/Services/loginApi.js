import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react"

export const loginApi = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:5001/'
    }),
    reducerPath: 'loginApi',
    endpoints:(builder)=>({
        getLoginData:builder.query({
            query: () => ({
              url: `/login/`,
              method: 'GET',
            }),
          }),
        signup:builder.mutation({
            query:(data)=>({
              url: `/login/`,
              method: 'POST',
              body:data
            })
          })
    })
})

export const {useGetLoginDataQuery,useSignupMutation} = loginApi;