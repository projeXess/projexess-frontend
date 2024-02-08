import React from 'react'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { asideItems, settingsItems } from '@/utils/constants'
import Collapsible from '../ui/Collapsible'
import Link from 'next/link'

type Props = {}

function Aside({ }: Props) {
    return (
        <div className='w-[20%] sticky top-16 left-0 lg:flex hidden flex-col items-center gap-3'>
            <div className='flex items-center gap-2 p-4 w-full justify-center'>
                <Avatar className='bg-gray-200 rounded-none h-[50px] w-[50px]' />
                <div className='flex flex-col'>
                    <h1 className='font-bold'>Project Name</h1>
                    <p className='text-gray-200'>Agriculture Project</p>
                </div>

            </div>
            <Button className='btn-outlined'>Take Tour</Button>

            <div>
                {
                    asideItems.map(item => (
                        <Collapsible title={item.title} value={item.children} key={item.title} />
                    ))
                }
            </div>

            <div className='w-full border-t-2 p-4 flex flex-col gap-4'>
                {
                    settingsItems.map(item => (
                        <Link href={item.link} className='flex item-center gap-2 text-[#5C5C5C]' key={item.name} >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))
                }

                <p className='font-bold text-[0.6rem] tracking-wider mt-11 text-center'>Your Project is managed in <br></br> this Panel</p>
            </div>
        </div>
    )
}

export default Aside

