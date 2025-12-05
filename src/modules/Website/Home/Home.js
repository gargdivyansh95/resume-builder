"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import React from 'react'

export const Home = () => {

    const router = useRouter();

    const handleSignup = () => {
        router.push('/signup');
    }

    return (
        <div>
            <h1 className="text-4xl font-bold">Welcome to Resume Builder</h1>
            <Button variant='default' className="mt-4" onClick={handleSignup}>Get Started</Button>
        </div>
    )
}
