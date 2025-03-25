import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { MediaApiResponse } from "../../types/media"
import { i } from "vitest/dist/reporters-w_64AS5f.js"

export const mediaApi = createApi({
  reducerPath: "mediaApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: builder => ({
    searchMedia: builder.query<
      MediaApiResponse,
      { search: string; type?: string; page?: number }
    >({
      query: ({ search, type = "", page = 1 }) => ({
        url: ``,
        params: {
          apikey: import.meta.env.VITE_API_KEY,
          s: search,
          type, // movie | series
          page,
        },
      }),
    }),
  }),
})

export const { useSearchMediaQuery } = mediaApi
