import { current, nanoid, PayloadAction, createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { Post } from 'types/blog.type'
import http from 'utils/http'

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

interface BlogState {
    postList: Post[]
    editingPost: Post | null
    loading: boolean
    currentRequestId: undefined | string
}

const initialState: BlogState = {
    postList: [],
    editingPost: null,
    loading: false,
    currentRequestId: undefined
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getPostList = createAsyncThunk('blog/getPostList', async (_, thunkAPI) => {
    const response = await http.get<Post[]>('post', {
        signal: thunkAPI.signal
    })
    return response.data
})
export const addPost = createAsyncThunk('blog/addPost', async (body: Omit<Post, 'id'>, thunkAPI) => {
    const response = await http.post<Post>('post', body, {
        signal: thunkAPI.signal
    })
    return response.data
})
export const updatePost = createAsyncThunk(
    'blog/updatePost',
    async ({ postId, body }: { postId: string; body: Post }, thunkAPI) => {
        try {
            const response = await http.put<Post>(`post/${postId}`, body, {
                signal: thunkAPI.signal
            })
            return response.data
        } catch (error) {
            console.log(error)
            throw error
        }
    }
)
export const deletePost = createAsyncThunk('blog/delePost', async (postId: string, thunkAPI) => {
    const reponse = await http.delete<Post>(`post/${postId}`, {
        signal: thunkAPI.signal
    })
    return reponse.data
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        startEditPost: (state, action: PayloadAction<string>) => {
            const postId = action.payload
            state.editingPost = state.postList.find((item) => item.id === postId) || null
        },
        cancelEditPost: (state) => {
            state.editingPost = null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(deletePost.fulfilled, (state, action) => {
                const postId = action.meta.arg
                const foundIndex = state.postList.findIndex((item) => item.id === postId)
                if (foundIndex !== -1) {
                    state.postList.splice(foundIndex, 1)
                }
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                const post = action.payload
                state.postList = state.postList.map((item) => (item.id === post.id ? post : item))
                state.editingPost = null
                // state.postList.find((item, index) => {
                //     if (item.id === action.payload.id) {
                //         state.postList[index] = action.payload
                //         return true
                //     }
                //     return false
                // })
                // state.editingPost = null
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.postList.push(action.payload)
            })
            .addCase(getPostList.fulfilled, (state, action: any) => {
                state.postList = action.payload
            })
            .addMatcher<PendingAction>(
                (action) => action.type.endsWith('/pending'),
                (state, action) => {
                    state.loading = true
                    state.currentRequestId = action.meta.requestId
                }
            )
            .addMatcher<RejectedAction | FulfilledAction>(
                (action) => action.type.endsWith('/rejected') || action.type.endsWith('/fulfilled'),
                (state, action) => {
                    if (state.loading && state.currentRequestId === action.meta.requestId) {
                        state.loading = false
                        state.currentRequestId = undefined
                    }
                }
            )

            .addDefaultCase((state, action) => {
                // console.log(current(state))
            })
    }
})

export const { cancelEditPost, startEditPost } = blogSlice.actions

export const blogReducer = blogSlice.reducer
