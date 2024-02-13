'use client'
import React from 'react'
import Subheader from './Subheader'

type Props = {}

function Timeline({ }: Props) {
    return (
        <div className={`w-full h-auto p-3 flex gap-4 flex-col`}>
            <Subheader title={"Timeline"} />
        </div>
    )
}

export default Timeline