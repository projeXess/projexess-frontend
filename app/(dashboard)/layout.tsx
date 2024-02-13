import React from 'react'
import { Poppins } from "next/font/google"
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import "../globals.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Header = dynamic(() => import('@/components/dashboard/Header'));
const Aside = dynamic(() => import('@/components/dashboard/Aside'));
const AsideProvider = dynamic(() => import('@/providers/Dashboard/AsideProvider'))

ChartJS.register(ArcElement, Tooltip, Legend);

const poppins = Poppins({ subsets: ['devanagari'], weight: "400" })

export const metadata: Metadata = {
    title: "ProjeXess - Dashboard",
    description: "Dashboard"
}



function DashboardLayout({ children }:
    Readonly<{
        children: React.ReactNode
    }>) {

    return (
        // <DashboardAppProvider>
        <AsideProvider>
            <section className={poppins.className}>
                <Header />
                <div className='w-full flex items-start  justify-normal h-full '>
                    <Aside />
                    <div className='lg:w-[80%] w-full bg-[rgb(234,245,255)] h-auto'>
                        {children}
                    </div>
                </div>

            </section>
        </AsideProvider>
        // </DashboardAppProvider>
    )
}

export default DashboardLayout