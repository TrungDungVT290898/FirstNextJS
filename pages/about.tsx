import HeaderComponent from '@/components/common/header';
import { AdminLayout } from 'layout';



import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { NextPageWithLayouts } from '../models';
import { Post } from './posts';

const About: NextPageWithLayouts = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>();
  const page = router.query?.page;
  useEffect(() => {
    (async function getPosts() {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
      const data = await response.json();

      setPosts(() => data.data);
    })();
  }, [page])
  const handleChangePageClick = () => {
    router.push({
      pathname: '/about',
      query: {
        page: (Number(page) || 1) + 1
      }
    }, undefined, { shallow: true })
  }
  return (
    <>
      <h1 className='bg-gray-500'>About page</h1>
      <HeaderComponent />
      <ul className='list-decimal list-inside'>
        {
          !posts ? (<>Not Found</>) : (
            posts.map(post => (<li key={`li-key-${post.id}`}>{post.title}</li>))

          )
        }
      </ul>
      <div>
        <button name='previous' className='bg-yellow-50' onClick={handleChangePageClick}>Next Page</button>
      </div>

    </>

  )
}
About.Layout = AdminLayout;
export default About
export async function getStaticProps() {
  console.log('get static props');
  return {
    props: {

    },
  }

}
// export async function getServerSideProps() {
//   return {
//     props: {}
//   }
// }

