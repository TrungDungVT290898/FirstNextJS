import React from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { Post } from '.'
export interface DetailPageProps {
    post: Post
}

const DetailPost = ({ post }: DetailPageProps) => {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading</div>
    }
    return (
        <div>
            {post.id}-----{post.title}
            <div>
                <Image width="300" height="300" src={post.imageUrl!} alt="background" />

            </div>
        </div>

    )
}

export default DetailPost
export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    const { data } = await response.json();
    console.log('all data:', data)
    return {
        paths: data.map((post: Post) => ({
            params: {
                postId: post.id
            }
        })),
        fallback: true
    }
}
export const getStaticProps: GetStaticProps<DetailPageProps> = async (context: GetStaticPropsContext) => {
    console.log('\nGet static props', context.params?.postId);
    const id = context.params?.postId as string;
    if (!id) return { notFound: true }
    const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${id}`);
    const data = await response.json();
    return {
        props: {
            post: data as Post
        },
        revalidate: 5
    }
}