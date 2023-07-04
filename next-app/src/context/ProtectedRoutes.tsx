// next
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';



const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {

    const { user, isLoading } = useUser();
    const router = useRouter()
    console.log(user?.email, 'user email')

    useEffect(() => {
        if (!user && !isLoading) {
            router.push('/api/auth/login');
        }
    }, [router, user, isLoading]);


    if (isLoading) {
        // Render loading state if user information is still loading
        return <div>Loading...</div>;
    }


    return <>{user ? children : null}</>

};


export default ProtectedRoute;