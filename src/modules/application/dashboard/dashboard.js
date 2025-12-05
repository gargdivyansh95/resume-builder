"use client"
import React from 'react'
import { useSelector } from 'react-redux'

export const Dashboard = () => {

    const authState = useSelector(state => state.auth);
    console.log(authState, 'authState')

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-6">Welcome {authState?.user?.firstName} {authState?.user?.lastName}</h1>
        </div>
    )
}
