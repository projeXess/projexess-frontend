import React from 'react'
import { Poppins } from "next/font/google"
import type { Metadata } from 'next'

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
        <section className={poppins.className}>
            {children}
        </section>
    )
}

export default DashboardLayout