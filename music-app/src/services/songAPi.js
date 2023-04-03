import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"



const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const getSong = createApi({
    reducerPath: "getSong",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getSong:builder.query({
            query: (count) => createRequest(baseUrl.concat(``))
        }),
    })
})


export const {
    useGetCryptosQuery
} = songAPI