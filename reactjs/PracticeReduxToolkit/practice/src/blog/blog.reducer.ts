import { createAction, createReducer } from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogForState {
    blogForApp: Post[]
    editPost: Post | null
}

const initialState: BlogForState = {
    blogForApp: initialPostList,
    editPost: null
}

export const addPost = createAction<Post>('blog/addPost')
export const deletePost = createAction<string>('blog/deletePost')
export const editingPostList = createAction<string>('blog/edit')
export const cancelEditPost = createAction<Post>('blog/cancelEditPost')
export const updatePost = createAction<Post>('blog/updatePost')

export const blogReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addPost, (state, action) => {
            const post = action.payload
            state.blogForApp = [...state.blogForApp, post]
        })
        .addCase(deletePost, (state, action) => {
            const postId = action.payload
            state.blogForApp = state.blogForApp.filter((item) => item.id !== postId)
        })
        .addCase(editingPostList, (state, action) => {
            const postId = action.payload
            state.editPost = state.blogForApp.find((item) => item.id === postId) || null
        })
        .addCase(cancelEditPost, (state, action) => {
            const post = action.payload
            if (post) {
                state.editPost = null
            }
        })
        .addCase(updatePost, (state, action) => {
            const update = action.payload
            state.blogForApp = state.blogForApp.map((item) => (item.id === update.id ? update : item))
            state.editPost = null
        })
})
