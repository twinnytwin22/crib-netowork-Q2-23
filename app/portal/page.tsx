import React from 'react'
import Pricing from '@/ui/Sections/Subscriptions/Pricing'
import { getActiveProductsWithPrices, getSession, getSubscription } from '@/lib/providers/supabase/supabase-server'
async function Portal() {
    const [session, products, subscription] = await Promise.all([
        getSession(),
        getActiveProductsWithPrices(),
        getSubscription()
      ]);
    return (

        <section className='w-full h-full mx-auto relative'>
         
       
        </section>
    )
}

export default Portal