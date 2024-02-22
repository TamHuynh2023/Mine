import { configureStore } from '@reduxjs/toolkit'
import { blogReducer } from 'blog/blog.slice'
import { useDispatch } from 'react-redux'


export const store = configureStore({
    reducer: { blog: blogReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDisPatch = () => useDispatch<AppDispatch>()