'use client'
import React, { createContext } from 'react'

type Props = {
    children: React.ReactNode
}

export const AppContext = createContext(null);

function DashboardAppProvider({ children }: Props) {
    return (
        <AppContext.Provider value={null}>
            {children}
        </AppContext.Provider>
    )
}

export default DashboardAppProvider