import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react"

export const loginApi = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://sauravvbackend.vercel.app/'
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
          }),
        validateLogin:builder.mutation({
            query:(data)=>({
              url: `/login/validate`,
              method: 'POST',
              body:data
            })
          })
    })
})

export const {useGetLoginDataQuery,useSignupMutation,useValidateLoginMutation} = loginApi;