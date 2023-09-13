'use client'
import React, { Suspense } from 'react'
import Panel from './Panel'
import { useAuthProvider } from '@/app/context/auth'
import Link from 'next/link'
import { FaRightLong } from 'react-icons/fa6'
import { redirectToCustomerPortal } from '@/ui/Buttons/ManageSubButton/ManageSubButton'
import { useRouter } from 'next/navigation'

function WelcomePanel({ children, subscription, href }: { children: React.ReactNode, subscription?: any, href?: string }) {
    const router = useRouter()
    const { profile } = useAuthProvider()
    return (
        <Suspense fallback='loading...'>
            <Panel
                title={`Welcome back, ${profile ? profile?.full_name : ''}`}>
                <div>
                 
                    {children}
                    <p className='text-zinc-800 dark:text-zinc-300 text-center'>
                        {profile ? profile?.full_name : ''}
                    </p>
                    <div className='absolute bottom-8 left-8'>

                    {subscription ?
                        <div className='flex items-center space-x-4 text-zinc-800 dark:text-zinc-300 cursor-pointer '>
                            <p
                                onClick={(() => redirectToCustomerPortal(router))}

                                className='text-center font-semibold hover:font-bold duration-300 ease-in-out'>
                                Manage Subscription
                            </p>
                            <FaRightLong />
                        </div>
                        :
                        <div className='flex items-center space-x-4 text-zinc-800 dark:text-zinc-300 cursor-pointer '>
                            <Link href={'/portal/account'}

                                className='text-center font-semibold hover:font-bold duration-300 ease-in-out'>
                                Manage Account
                            </Link>
                            <FaRightLong />
                        </div>
                    }
                    </div>
                </div>

            </Panel>
        </Suspense>
    )
}

export default WelcomePanel