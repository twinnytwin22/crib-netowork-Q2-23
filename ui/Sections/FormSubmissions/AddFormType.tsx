'use client'
import { supabaseAdmin } from '@/lib/providers/supabase/supabase-lib-admin'
import { supabase } from '@/lib/site/constants'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { useFormSubmissionTableStore } from './store'

function AddFormType() {
const {setFormTypeInputOpen: setIsOpen} = useFormSubmissionTableStore()


    const handleFormTypeButtonCLick = () => {
        console.log('pop form type input')
        setIsOpen(true)
    }

    return (
        <div className='relative'>
            <button onClick={handleFormTypeButtonCLick} type="button" className="flex items-center justify-center text-black dark:text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                <FaPlus />
                Form Type
            </button>

         
        </div>

    )
}

export default AddFormType