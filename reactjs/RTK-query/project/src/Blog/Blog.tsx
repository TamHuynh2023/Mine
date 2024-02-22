import CreatePost from 'Components/CreatePost'
import PostList from 'Components/PostList'

export default function Blog() {
    return (
        <div className='p-5'>
            <CreatePost />
            <PostList />
        </div>
    )
}
