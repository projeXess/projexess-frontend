'use client'
import dynamic from 'next/dynamic';
import React, { createContext } from 'react'
const AsideProvider = dynamic(() => import('./AsideProvider'));

type Props = {
    children: React.ReactNode
}

export const AppContext = createContext(null);

function DashboardAppProvider({ children }: Props) {
    return (
        <AppContext.Provider value={null}>
            <AsideProvider>
                {children}
            </AsideProvider>
        </AppContext.Provider>
    )
}

export default DashboardAppProvider