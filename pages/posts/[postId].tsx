import React from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { IPost } from '.'
import Image from 'next/image'
export interface IDetailPageProps {
    post: IPost
}

const DetailPost = ({ post }: IDetailPageProps) => {
    return (
        <div>
            {post.id}-----{post.title}
            <div>
                <img width="300" height="300" src={post.imageUrl!} alt="background" />

            </div>
        </div>

    )
}

export default DetailPost
export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch("https://js-post-api.herokuapp.com/api/posts?_page=1");
    const { data } = await response.json();
    console.log("all data:", data)
    return {
        paths: data.map((post: IPost) => ({
            params: {
                postId: post.id
            }
        })),
        fallback: false
    }
}
export const getStaticProps: GetStaticProps<IDetailPageProps> = async (context: GetStaticPropsContext) => {
    console.log("\nGet static props", context.params?.postId);
    const id = context.params?.postId as string;
    if (!id) return { notFound: true }
    const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${id}`);
    const data = await response.json();
    console.log("id:", id)
    console.log("data:", data)
    return {
        props: {
            post: data as IPost
        }
    }
}