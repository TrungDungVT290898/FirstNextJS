
import Link from 'next/link'
import React, { useEffect } from 'react'
import { LayoutProps } from '../models'



export function MainLayout({ children }: LayoutProps) {
    useEffect(() => {
        console.log('main layout mounting');
        return () => (console.log('unmounting'))
    }, [])
    return (
        <div className='bg-teal-700'>
            <nav>
                <Link href="/">
                    <h1 className='text-white p-2 m-2'>Home</h1>
                </Link>
                <Link href="/about">
                    About
                </Link>
            </nav>


            <div>{children}</div>
        </div>


    )
}