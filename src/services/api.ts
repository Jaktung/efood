import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Food } from '../pages/Home'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<Food[], void>({
            query: () => '/restaurantes'
        }),
        getFoodById: builder.query<Food, string>({
            query: (id) => `/restaurantes/${id}`
        })
    })
})

export const {useGetRestaurantsQuery, useGetFoodByIdQuery} = api
export default api