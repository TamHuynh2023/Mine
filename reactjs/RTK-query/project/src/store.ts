import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { blogApi } from 'Blog/blog.service'
import blogReducer from 'Blog/blog.slice'
import { rtkQuerryErrorLogger } from 'middleware'

export const store = configureStore({
    reducer: {
        blog: blogReducer,
        [blogApi.reducerPath]: blogApi.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(blogApi.middleware, rtkQuerryErrorLogger)
    }
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDisPatch = typeof store.dispatch
