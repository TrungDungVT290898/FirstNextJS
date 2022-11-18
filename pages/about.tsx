import Link from 'next/link'
import React from 'react'

type Props = {}

function About({ }: Props) {
  return (
    <React.Fragment>
      <div>
        About Page
      </div>
      <div>
        <Link href='http://localhost:3000/'>Go to Home Page</Link>
      </div>
      <div>
        <Link href='/hello'>Go to Hello Page</Link>
      </div>
    </React.Fragment>

  )
}

export default About
