import { Avatar } from 'flowbite-react'
import React from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

type Props = {
    title: string
}

function Subheader({ title }: Props) {
    return (
        <div className='w-full p-4 flex flex-col gap-7'>
            <div>

                <h1 className="text-gray-400 text-[0.9rem]">Project / Project Name</h1>
            </div>
            <div>

                <h1 className='font-bold'>{title}</h1>
            </div>
            <div className='flex items-center gap-3'>
                <div className="flex flex-wrap gap-2">
                    <Avatar.Group>
                        <Avatar placeholderInitials='T' rounded stacked />
                        <Avatar rounded placeholderInitials='D' stacked />
                        <Avatar rounded placeholderInitials="L" stacked />
                        <Avatar.Counter total={5} href="#" />
                    </Avatar.Group>

                </div>
                <div className='flex items-center p-1 w-[300px] justify-around border-2 rounded-xl bg-white pr-3'>
                    <Input placeholder='search' className=' border-none w-full p-0 focus:outline-none' />
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Subheader