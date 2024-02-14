'use client'
import { DefaultType } from '@/types/providerTypes'
import React, { } from 'react'

type Props = {
    children: React.ReactNode
}


const DefaultValues: DefaultType = {
    state: true,
    setState: () => { },
}

export const AsideContext = React.createContext<DefaultType>(DefaultValues);


function AsideProvider({ children }: Props) {


    const [state, setState] = React.useState(true);
    const values: DefaultType = {
        state,
        setState: setState
    }

    return (
        <AsideContext.Provider value={values}>
            {children}
        </AsideContext.Provider>
    )
}

export default AsideProvider