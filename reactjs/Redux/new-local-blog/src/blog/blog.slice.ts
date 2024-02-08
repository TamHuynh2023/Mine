import { createAction, createReducer, current, nanoid, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
    postList: Post[]
    editingPost: Post | null
}

const initialState: BlogState = {
    postList: initialPostList,
    editingPost: null
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addPost: {
            reducer: (state, action: PayloadAction<Post>) => {
                const post = action.payload
                state.postList.push(post)
            },
            prepare: (post: Omit<Post, 'id'>) => ({
                payload: {
                    ...post,
                    id: nanoid()
                }
            })
        },
        deletePost: (state, action: PayloadAction<string>) => {
            const postId = action.payload
            state.postList = state.postList.filter((item) => item.id !== postId)
        },
        startEditPost: (state, action: PayloadAction<string>) => {
            const postId = action.payload
            state.editingPost = state.postList.find((item) => item.id === postId) || null
        },
        cancelEditPost: (state, action: PayloadAction<Post>) => {
            const post = action.payload
            if (post) {
                state.editingPost = null
            }
        },
        finishEditingPost: (state, action: PayloadAction<Post>) => {
            const post = action.payload
            state.postList = state.postList.map((item) => (item.id === post.id ? post : item))
            state.editingPost = null
        }
    },
    extraReducers(builder) {
        builder
            .addMatcher(
                (action) => action.type.includes('cancel'),
                (state, action) => {
                    console.log(current(state))
                }
            )
            .addDefaultCase((state, action) => {
                console.log(current(state))
            })
    }
})

export const { addPost, cancelEditPost, deletePost, finishEditingPost, startEditPost } = blogSlice.actions

export const blogReducer = blogSlice.reducer
