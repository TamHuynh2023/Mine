import { configureStore } from '@reduxjs/toolkit'
import { blogReducer } from 'blog/blog.reducer'

export const store = configureStore({
    reducer: {
        blog: blogReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type ActionType = typeof store.dispatch
