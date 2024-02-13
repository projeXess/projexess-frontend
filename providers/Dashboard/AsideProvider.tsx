'use client'
import { DefaultType } from '@/types/providerTypes'
import React, { } from 'react'

type Props = {
    children: React.ReactNode
}


const DefaultValues: DefaultType = {
    state: false,
    setState: () => { },
}

export const AsideContext = React.createContext<DefaultType>(DefaultValues);


function AsideProvider({ children }: Props) {


    const [state, setState] = React.useState(true);
    const values: DefaultType = {
        state,
        setState,
    }

    return (
        <AsideContext.Provider value={values}>
            {children}
        </AsideContext.Provider>
    )
}

export default AsideProvider