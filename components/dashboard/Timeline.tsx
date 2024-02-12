'use client'
import React from 'react'
import { Input } from '../ui/input'
import { Antenna, Search, User } from 'lucide-react'
import { Avatar } from 'flowbite-react'
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