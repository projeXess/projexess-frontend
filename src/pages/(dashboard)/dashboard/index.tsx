/* eslint-disable no-empty-pattern */
import Aside from '@/components/dashboard/Aside'
import Header from '@/components/dashboard/Header'
import React from 'react'

type Props = object

function Index({}: Props) {
  return (
    <section>
      <Header />
      <div className='w-full flex items-start  justify-normal h-full '>
        <Aside />
        <div className='lg:w-[80%] w-full bg-[rgb(234,245,255)] h-auto'>
          <h1>Dashboard</h1>
        </div>
      </div>
    </section>
  )
}

export default Index