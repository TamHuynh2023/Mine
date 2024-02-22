// import { deletePost, startEditPost } from 'pages/blog/blog.slice'
import { deletePost, getPostList, startEditPost } from 'blog/blog.slice'
import PostItem from 'components/PostItem/PostItem'
import SkeletonPost from 'components/SkeletonPost'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, useAppDisPatch } from 'store'

export default function PostList() {
    const postList = useSelector((state: RootState) => state.blog.postList)
    const loading = useSelector((state: RootState) => state.blog.loading)
    const dispatch = useAppDisPatch()

    useEffect(() => {
        const promise = dispatch(getPostList())

        return () => {
            promise.abort()
        }
    }, [dispatch])

    function handleDelete(postId: string) {
        dispatch(deletePost(postId))
    }
    function handleStartEdit(postId: string) {
        dispatch(startEditPost(postId))
    }

    return (
        <div>
            <div className='bg-white py-6 sm:py-8 lg:py-12'>
                <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
                    <div className='mb-10 md:mb-16'>
                        <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
                            Tâm Dev Blog
                        </h2>
                        <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
                            Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ. Nhưng ngày mốt sẽ có nắng
                        </p>
                    </div>
                    <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
                        {loading && (
                            <>
                                <SkeletonPost />
                                <SkeletonPost />
                            </>
                        )}
                        {!loading && (
                            <>
                                {postList.map((post) => (
                                    <PostItem
                                        post={post}
                                        key={post.id}
                                        handleDelete={handleDelete}
                                        handleStartEdit={handleStartEdit}
                                    />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
