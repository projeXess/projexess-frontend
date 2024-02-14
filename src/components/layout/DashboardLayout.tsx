import React from 'react'
import Header from '../dashboard/Header'
import Aside from '../dashboard/Aside'

type Props = { children: React.ReactNode }

function DashboardLayout({ children }: Props) {
    return (
        <section>
            <Header />
            <div className='w-full flex items-start  justify-normal h-[90dvh] overflow-hidden'>
                <Aside />
                <div className='lg:w-[80%] w-full bg-[rgb(234,245,255)] h-[100%] overflow-auto'>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default DashboardLayout