import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://64382f9bc1565cdd4d68498e.mockapi.io/api"
    }),
    endpoints: (build) =>({
        getAllUsers:build.query({
            query: ()=>'/users'
        }),
        getUserByID:build.query({
            query: (id)=>`/users/${id}`
        })
    })
})
export const {
    useGetAllUsersQuery,
    useGetUserByIDQuery,
} = usersAPI