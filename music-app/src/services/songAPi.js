import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const baseUrl = "https://api.deezer.com/search"

const createRequest = (url) => ({url})

export const getSong = createApi({
    reducerPath: "getSong",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getSong:builder.query({
            query: (musicTitle) => createRequest(baseUrl.concat(`?q=${musicTitle}&index=12`))
        }),
    })
})


export const {
    useGetSongQuery
} = getSong