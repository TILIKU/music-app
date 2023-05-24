import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const baseUrl = "https://api.deezer.com/search"

const createRequest = (url) => ({url})

export const getSong = createApi({
    reducerPath: "getSong",
    baseQuery: fetchBaseQuery({
        baseUrl,
    //     // crendentials: "include" will face CORS if credential is not provided
    // credentials: "same-origin", 
    // prepareHeaders: (headers) => {
    //     const accessToken = localStorage.getItem("token");
    //     if (accessToken) {
    //         headers.set("authorization", `Bearer ${accessToken}`);
    //         headers.set("Content-Type", "application/json");
    //     }

    //     return headers;
    // },


    // mode: "cors",
    // prepareHeaders: (headers, { getState }) => {
    //     headers.set('Access-Control-Allow-Origin', '*')
    //     return headers
    // }
    }),
    endpoints:(builder) =>({
        getSong:builder.query({
            // query: (musicTitle) => createRequest(`https://tiliku-server-musicapp-production.up.railway.app/${musicTitle}`) use this when i'll actually have a server 
            query: (musicTitle) => createRequest(`https://api.deezer.com/search?q=${musicTitle}`)
            // query: (musicTitle) => createRequest(`http://localhost:3001/${musicTitle}`)
        }),
    })
})


export const {
    useGetSongQuery
} = getSong