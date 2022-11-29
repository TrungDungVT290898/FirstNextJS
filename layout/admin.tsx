
import Link from 'next/link'
import React from 'react'
import { LayoutProps } from '../models'



export function AdminLayout({ children }: LayoutProps) {
    return (
        <div>
            <h1>Admin Layout</h1>
            <div>Sidebar</div>
            <Link href="/">
                HOME
            </Link>
            <Link href="">
                ABOUT
            </Link>
            <div>{children}</div>
        </div>


    )
}