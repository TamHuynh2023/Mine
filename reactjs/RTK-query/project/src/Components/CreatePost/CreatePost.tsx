import { useAddPostMutation, useGetPostQuery, useUpdatePostMutation } from 'Blog/blog.service'
import { cancelEditingPost } from 'Blog/blog.slice'
import classNames from 'classnames'

import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { Post } from 'types/blog.type'
import { isEntityError, isFetchBaseQueryError } from 'utils/helper'

const initialState: Omit<Post, 'id'> = {
    description: '',
    featuredImage: '',
    publishDate: '',
    published: false,
    title: ''
}

type FormError =
    | {
          [key in keyof typeof initialState]: string
      }
    | null

export default function CreatePost() {
    const [formData, setFormData] = useState<Omit<Post, 'id'> | Post>(initialState)
    const [addPost, addPostResult] = useAddPostMutation()
    const [updatePost, upDatePostResult] = useUpdatePostMutation()

    const postId = useSelector((state: RootState) => state.blog.postId)
    const { data } = useGetPostQuery(postId, { skip: !postId })

    const dispatch = useDispatch()

    const errorForm: FormError = useMemo(() => {
        const errorResult = postId ? upDatePostResult.error : addPostResult.error
        if (isEntityError(errorResult)) {
            console.log('error result: ', errorResult)
            return errorResult.data.error as FormError
        }

        return null
    }, [postId, upDatePostResult, addPostResult])

    useEffect(() => {
        if (data) {
            setFormData(data)
        }
    }, [data])

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            if (postId) {
                await updatePost({
                    body: formData as Post,
                    id: postId
                }).unwrap()
            } else {
                await addPost(formData).unwrap()
            }
            setFormData(initialState)
        } catch (error) {
            console.log(error)
        }
    }

    function handleCancel() {
        setFormData(initialState)
        dispatch(cancelEditingPost())
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleCancel}>
            <div className='mb-6'>
                <label htmlFor='title' className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
                    Title
                </label>
                <input
                    type='text'
                    id='title'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
                    placeholder='Title'
                    required
                    value={formData.title}
                    onChange={(event) => setFormData({ ...formData, title: event.target.value })}
                />
            </div>
            <div className='mb-6'>
                <label
                    htmlFor='featuredImage'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                    Featured Image
                </label>
                <input
                    type='text'
                    id='featuredImage'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
                    placeholder='Url image'
                    required
                    value={formData.featuredImage}
                    onChange={(event) => setFormData({ ...formData, featuredImage: event.target.value })}
                />
            </div>
            <div className='mb-6'>
                <div>
                    <label
                        htmlFor='description'
                        className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'
                    >
                        Description
                    </label>
                    <textarea
                        id='description'
                        rows={3}
                        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
                        placeholder='Your description...'
                        required
                        value={formData.description}
                        onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                    />
                </div>
            </div>
            <div className='mb-6'>
                <label
                    htmlFor='publishDate'
                    className={classNames('mb-2 block text-sm font-medium  dark:text-gray-300', {
                        'text-red-700': Boolean(errorForm?.publishDate),
                        'text-gray-900': !Boolean(errorForm?.publishDate)
                    })}
                >
                    Publish Date
                </label>
                <input
                    type='datetime-local'
                    id='publishDate'
                    className={classNames(
                        'block w-56 rounded-lg border  p-2.5 text-sm  focus:outline-none focus:ring-blue-500',
                        {
                            'border-red-500 bg-red text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-blue-500':
                                Boolean(errorForm?.publishDate),
                            'border-gray-300 bg-gray-50  text-gray-900 focus:border-blue-500 focus:ring-blue-500':
                                Boolean(errorForm?.publishDate)
                        }
                    )}
                    required
                    value={formData.publishDate}
                    onChange={(event) => setFormData({ ...formData, publishDate: event.target.value })}
                />
                {errorForm?.publishDate && (
                    <>
                        <p className='mt2 text-sm text-red-600'>
                            <span className='font-medium'>loi! </span>
                            {errorForm.publishDate}
                        </p>
                    </>
                )}
            </div>
            <div className='mb-6 flex items-center'>
                <input
                    id='publish'
                    type='checkbox'
                    checked={formData.published}
                    onChange={(event) => setFormData({ ...formData, published: event.target.checked })}
                    className='h-4 w-4 focus:ring-2 focus:ring-blue-500'
                />
                <label htmlFor='publish' className='ml-2 text-sm font-medium text-gray-900'>
                    Publish
                </label>
            </div>
            <div>
                {Boolean(!postId) && (
                    <>
                        <button
                            className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'
                            type='submit'
                        >
                            <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                                Publish Post
                            </span>
                        </button>
                    </>
                )}

                {Boolean(postId) && (
                    <>
                        <button
                            type='submit'
                            className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800'
                        >
                            <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                                Update Post
                            </span>
                        </button>
                        <button
                            type='reset'
                            className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400'
                        >
                            <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                                Cancel
                            </span>
                        </button>
                    </>
                )}
            </div>
        </form>
    )
}
