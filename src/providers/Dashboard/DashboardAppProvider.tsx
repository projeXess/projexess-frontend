import React, { createContext, useEffect, useState } from 'react'
import AsideProvider from './AsideProvider';

type Props = {
    children: React.ReactNode
}

type DefaultType = {
    screenWidth: number
}

export const DashboardContext = createContext<DefaultType>({
    screenWidth: window.innerWidth
});

function DashboardAppProvider({ children }: Props) {


    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    useEffect(() => {

        const getScreenWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', getScreenWidth)
        // return window.removeEventListener('resize', getScreenWidth)
    }, [])

    useEffect(() => {
        console.log(screenWidth)
    }, [screenWidth])

    const values = {
        screenWidth
    }

    return (
        <DashboardContext.Provider value={values}>
            <AsideProvider>
                {children}
            </AsideProvider>
        </DashboardContext.Provider>
    )
}

export default DashboardAppProvider