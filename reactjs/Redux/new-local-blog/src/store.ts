import { configureStore } from '@reduxjs/toolkit'
import { blogReducer } from 'blog/blog.slice'

export const store = configureStore({
    reducer: {
        blog: blogReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type ActionType = typeof store.dispatch
