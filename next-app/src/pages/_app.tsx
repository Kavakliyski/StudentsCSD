// next
import type { AppProps } from 'next/app'

// styles
import '../styles/styles.css';
import Header from '@/components/navigation/header';
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



export default function App({ Component, pageProps, ...appProps }: AppProps) {

    if ([`/login`].includes(appProps.router.pathname)) {
        return (
            <AuthContextProvider>
                <h1>VUZF Students CSD</h1>
                <SignIn />
            </AuthContextProvider>
        )
    }


    return (
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
    )
}
