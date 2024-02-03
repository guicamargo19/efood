import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'
import { MenuItensType, MenuType } from '../pages/Perfil'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getCardapio: builder.query<MenuItensType[], string>({
      query: (id) => `restaurantes/${id}`,
      transformResponse: (response: Restaurante) => {
        return response.cardapio
      }
    }),
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getRestauranteId: builder.query<MenuType, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetCardapioQuery,
  useGetRestauranteIdQuery
} = api

export default api
