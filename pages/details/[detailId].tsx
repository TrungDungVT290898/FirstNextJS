import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

function DetailPage({ }: Props) {
    const router = useRouter();
    return (
        <div>
            this is detail page with query: { }
        </div>
    )
}

export default DetailPage