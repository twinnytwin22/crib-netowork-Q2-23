
import { PortalPageTitle } from '@/lib/hooks/PortalPageTitle'
import AccountForm from '@/ui/Sections/Account'
import React from 'react'
function AccountPage() {
    return (
        <section className='w-full h-full mx-auto relative'>
            <PortalPageTitle title='Account Settings' toolTip='Get ya mind right' />
            <div className='relative flex place-items-center min-h-full mx-auto w-full'>
                <AccountForm />
            </div>
        </section>
    )
}

export default AccountPage


