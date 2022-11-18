import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();
  const handleClickAbout = () => {
    router.push("/about");
  }
  const handleClickDetail = () => {
    router.push({
      pathname: "/details/[detailId]",
      query: {
        detailId: "1",
        ref: "social"
      }
    });
  }
  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <div className={styles.grid}>


          <Link href="/hello">
            <button>GO TO HELLO</button>
          </Link>
          <button onClick={() => handleClickAbout()}>Go to About</button>
          <button onClick={() => handleClickDetail()}>Go to Detail </button>

        </div>
      </main>

    </div>
  )
}
