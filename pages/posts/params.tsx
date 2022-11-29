import React from 'react'



function params() {
    return (
        <div>params</div>
    )
}

export default params
export async function getServerSideProps() {
    await new Promise<void>(resolve => setTimeout(resolve, 3000));
    return {
        props: {

        }
    }
}