// next
import type { AppProps } from 'next/app'

// styles
import '../styles/styles.css';
import Sidebar from '@/components/navigation/sidebar';

// react
import React from 'react';

// Context
import { AuthContextProvider } from '../context/AuthContext';       // auth
import ProtectedRoute from '@/context/ProtectedRoutes';             // protected routes
// import { WebSocketContextProvider } from '@/context/WebSocketContext';          // web socket for table refresh

// component
import SignIn from '@/components/SignIn';
import { Headernew } from '@/components/navigation/Headernew';
import Head from 'next/head';



export default function App({ Component, pageProps, ...appProps }: AppProps) {

    if ([`/login`].includes(appProps.router.pathname)) {
        return (
            <AuthContextProvider>
                <SignIn />
            </AuthContextProvider>
        )
    }


    return (
        <>
            <Head>
                <meta name="description" content="Author: Kavakliyski; Web Application made for VUZF to store their students in recent campaigns." />
                <title>VUZF Students</title>
            </Head>
            <AuthContextProvider>
                <ProtectedRoute>
                    {/* <WebSocketContextProvider> */}
                    {/* <Header /> to delete later */}
                    <Headernew />
                    <Sidebar />
                    <Component {...pageProps} />
                    {/* </WebSocketContextProvider> */}
                </ProtectedRoute>
            </AuthContextProvider>
        </>
    )
}
