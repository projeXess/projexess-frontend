'use client'
import React, { useState } from 'react'

type Props = {
    children: React.ReactNode
}

type DefaultType = {
    isOpen: boolean,
    setIsOpen: (vl: boolean) => void

}

const DefaultValues: DefaultType = {
    isOpen: false,
    setIsOpen: () => { }
}

export const AsideContext = React.createContext<DefaultType>(DefaultValues);

function AsideProvider({ children }: Props) {

    const [isOpen, setIsOpen] = useState(false);

    const values: DefaultType = {
        isOpen,
        setIsOpen
    }
    return (
        <AsideContext.Provider value={values}>
            {children}
        </AsideContext.Provider>
    )
}

export default AsideProvider