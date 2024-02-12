'use client'
import React, { createContext } from 'react'
import AsideProvider from './AsideProvider';
import ResponsiveAside from '@/components/dashboard/ResponsiveAside';

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