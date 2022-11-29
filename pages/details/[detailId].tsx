import { useRouter } from 'next/router'
import React from 'react'



function DetailPage() {
    const router = useRouter();
    return (
        <div>
            this is detail page with query: { }
        </div>
    )
}

export default DetailPage