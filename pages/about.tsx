import HeaderComponent from '@/components/common/header';
import dynamic from 'next/dynamic';
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ButtonHTMLAttributes, useEffect, useState } from 'react'
import { IPost } from './posts';

// const Header = dynamic(() => import("@/components/common/header"), {
//   ssr: false
// })
function About() {
  const router = useRouter();
  const [posts, setPosts] = useState<IPost[]>();
  const page = router.query?.page;
  useEffect(() => {
    (async function getPosts() {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
      const data = await response.json();

      setPosts(d => data.data);
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
    <React.Fragment>
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

    </React.Fragment>

  )
}

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