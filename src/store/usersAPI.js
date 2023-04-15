import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://64382f9bc1565cdd4d68498e.mockapi.io/api"
    }),
    tagTypes: ['followers'],
    endpoints: (build) =>({
        getAllUsers:build.query({
            query: ()=>'/users'
        }),
        getUserByID:build.query({
            query: (id)=>`/users/${id}`
        }),
        incrementFollowers: build.mutation({
            query: ({id, followers}) => ({
                url: `/users/${id}`,
                method: "PUT",
                body: {followers:followers}
            }),
            providesTags: ['followers'],
        }),
        decrementFollowers: build.mutation({
            query: ({id, followers}) => ({
                url: `/users/${id}`,
                method: "PUT",
                body: {followers:followers}
            }),
            providesTags: ['followers'],
        }),
    })
})
export const {
    useGetAllUsersQuery,
    useGetUserByIDQuery,
    useIncrementFollowersMutation,
    useDecrementFollowersMutation,
} = usersAPI