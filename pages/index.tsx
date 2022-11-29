import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  const handleClickAbout = () => {
    router.push('/about');
  }
  const handleClickDetail = () => {
    router.push({
      pathname: '/details/[detailId]',
      query: {
        detailId: '1',
        ref: 'social'
      }
    });
  }
  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <div className={styles.grid}>


          <Link href="/hello">
            <button className='bg-sky-500/100 rounded-lg px-2'>GO TO HELLO</button>
          </Link>
          <button className='bg-cyan-500 hover:bg-cyan-600 rounded-lg px-2' onClick={() => handleClickAbout()}>Go to About</button>
          <button className='bg-sky-500/50 rounded-lg px-2' onClick={() => handleClickDetail()}>Go to Detail </button>

        </div>
      </main>

    </div>
  )
}
