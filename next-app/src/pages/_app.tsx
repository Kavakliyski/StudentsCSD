// next
import type { AppProps } from 'next/app'

// styles
import '../styles/styles.css';
import Sidebar from '@/components/navigation/sidebar';

// react
import React from 'react';


// component
import { Headernew } from '@/components/navigation/Headernew';
import Head from 'next/head';

// Auth0
import { UserProvider } from '@auth0/nextjs-auth0/client'
import ProtectedRoute from '@/context/ProtectedRoutes';



export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {


    return (
        <>
            <Head>
                <meta name="description" content="Author: Kavakliyski; Web Application made for VUZF to store their students in recent campaigns." />
                <title>VUZF Students</title>
            </Head>
            <UserProvider>
                <ProtectedRoute>
                    <Headernew />
                    <Sidebar />
                    <Component {...pageProps} />
                </ProtectedRoute>
            </UserProvider>
        </>
    )
};