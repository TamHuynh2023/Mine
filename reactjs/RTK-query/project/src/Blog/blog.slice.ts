import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface BlogState {
    postId: string
}

const initialState: BlogState = {
    postId: ''
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        startEditingPost: (state, action: PayloadAction<string>) => {
            state.postId = action.payload
        },
        cancelEditingPost: (state) => {
            state.postId = ''
        }
    }
})

const blogReducer = blogSlice.reducer
export const { cancelEditingPost, startEditingPost } = blogSlice.actions
export default blogReducer
