
import Link from 'next/link'
import React from 'react'
import { LayoutProps } from '../models'



export function BlankLayout({ children }: LayoutProps) {
    return (

        <div>{children}</div>



    )
}