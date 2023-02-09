// next
import Head from 'next/head'
import React from 'react';

// styles

// components
import SignIn from '@/components/SignIn'
import { initFirebase } from '../../firebase/firebase';


export default function Home() {

    const app = initFirebase();

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className=''>
                    <SignIn />
                </div>
            </main>
        </>
    )
}