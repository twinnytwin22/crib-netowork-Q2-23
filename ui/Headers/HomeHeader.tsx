
import React from 'react'

function HomeHeader() {
  return (
    <section className="bg-white dark:bg-black mt-16 w-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12">
        <a href="#" className="hidden justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-zinc-700 bg-zinc-100 rounded-full dark:bg-zinc-800 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700" role="alert">
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Flowbite is out! See what's new</span>
          <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </a>
        <h1 className="mb-4 text-4xl font-normal tracking-normal  text-zinc-900 md:text-5xl lg:text-7xl dark:text-white max-w-screen-lg mx-auto font-[owners]">
          <span className="underline underline-offset-3 decoration-8 decoration-red-300">
            Innovating&nbsp;
          </span>
          the&nbsp;digital&nbsp;
          <br />
          <span className='underline underline-offset-3 decoration-8 decoration-red-300 '>
            experience.
          </span>
        </h1>
        <p className="mb-8 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 xl:px-48 dark:text-zinc-400 max-w-screen-lg mx-auto">Here at CRIB we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-b dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Learn more
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-zinc-900 rounded-lg border border-zinc-300 hover:bg-zinc-100 focus:ring-4 focus:ring-zinc-100 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">
            <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
            Watch video
          </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-zinc-400 uppercase">FEATURED IN</span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-zinc-500 sm:justify-between">
            <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-zinc-800 dark:hover:text-zinc-400">

            </a>
            <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-zinc-800 dark:hover:text-zinc-400">

            </a>
            <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-zinc-800 dark:hover:text-zinc-400">

            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default HomeHeader