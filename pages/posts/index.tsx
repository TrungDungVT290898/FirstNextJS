import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

export interface PostListPageProps {
    posts: Post[]
}
export interface Post {
    id: string,
    title: string,
    author: string,
    description: string,
    createdAt?: number,
    updatedAt?: number,
    imageUrl?: string
}
const PostListPage = ({ posts }: PostListPageProps) => {
    return (
        <React.Fragment>
            <h1>Post List Page</h1>
            <ul>
                {posts.map(post => (
                    <li key={`post-${post.id}`}>
                        <Link href={`/posts/${post.id}`} >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
}

export default PostListPage
export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {

    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    const data = await response.json();
    return {
        props: {
            posts: data.data as Post[]
        }
    }
}