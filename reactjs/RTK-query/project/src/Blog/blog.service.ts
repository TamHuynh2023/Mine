import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'types/blog.type'

export const blogApi = createApi({
    reducerPath: 'blogApi',
    tagTypes: ['Post'],
    keepUnusedDataFor: 10,
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/',
        prepareHeaders(headers) {
            headers.set('authorization', 'Bearer ABX')
            return headers
        }
    }),
    endpoints: (build) => ({
        getPosts: build.query<Post[], void>({
            query: () => 'post',
            providesTags: (result) => {
                if (result) {
                    const final = [
                        ...result.map(({ id }) => ({ type: 'Post' as const, id })),
                        { type: 'Post' as const, id: 'LIST' }
                    ]
                    return final
                }
                return [{ type: 'Post', id: 'LIST' }]
            }
        }),
        addPost: build.mutation<Post, Omit<Post, 'id'>>({
            query(body) {
                return {
                    url: 'post',
                    method: 'POST',
                    body
                }
            },
            invalidatesTags: (result, error, body) => [{ type: 'Post', id: 'LIST' }]
        }),
        getPost: build.query<Post, string>({
            query: (id) => `post/${id}`
            // keepUnusedDataFor
        }),

        updatePost: build.mutation<Post, { id: string; body: Post }>({
            query({ id, body }) {
                // query(data)
                return {
                    url: `post/${id}`, // `post/${data.id}`
                    method: 'PUT',
                    body // body: data.body
                }
            },
            invalidatesTags: (result, error, body) => [{ type: 'Post', id: body.id }] // error, result, data => id: data.id
        }),
        deletePost: build.mutation<{}, string>({
            query(id) {
                return {
                    url: `post/${id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: (result, error, id) => [{ type: 'Post', id }]
        })
    })
})

export const { useGetPostsQuery, useAddPostMutation, useGetPostQuery, useUpdatePostMutation, useDeletePostMutation } =
    blogApi
