import Button from '@/src/components/ui/Button'
import React from 'react'

const MyOrders = () => {
    return (
        <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black">
            <h1>
                Welcome to My Orders Page.
            </h1>
            <Button href='/dashboard'>
                Go to Dashboard
            </Button>
        </div>
    )
}

export default MyOrders