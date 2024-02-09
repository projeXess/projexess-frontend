'use client'
import React, { useEffect } from 'react'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { settingsItems } from '@/utils/constants'
import Link from 'next/link'
import { Collapse, CollapseProps } from 'antd'
import { ArrowRight, BotIcon, CircuitBoard, File, FileStack, Settings, TagsIcon } from "lucide-react";
import { usePathname } from 'next/navigation'


type Props = {}

export const planningItems = [
    { name: "Timeline", link: "/dashboard/timeline", icon: <FileStack /> },
    { name: "Board", link: "/dashboard/board", icon: <CircuitBoard /> },
    { name: "Backlog", link: "/dashboard/backlog", icon: <FileStack /> }
]

export const devItems = [
    { name: "Code", link: "/dashboard/code", icon: <TagsIcon /> },
]

export const assItems = [
    { name: "Ai Bot", link: "/dashboard/bot", icon: <BotIcon /> },
]



function Aside({ }: Props) {

    const pathname = usePathname()

    const asideItems: CollapseProps['items'] = [
        {
            key: '1',
            label: "Planning",
            children: (
                <>
                    {
                        planningItems.map(item => (
                            <Link href={item.link} className={`${pathname === item.link && 'bg-[#3AA1FF] text-white font-bold'}`} key={item.name}>
                                <div className='flex items-center gap-2'>
                                    {item.icon}
                                    {item.name}
                                </div>
                                {pathname === item.link &&
                                    (
                                        <span className=' justify-self-end bg-white rounded-full text-[#3AA1FF]'>
                                            <ArrowRight />
                                        </span>
                                    )}
                            </Link>
                        ))
                    }
                </>
            )
        },
        {
            key: '2',
            label: "Development",
            children: (
                <>
                    {
                        devItems.map(item => (
                            <Link href={item.link} className={`${pathname === item.link && 'bg-[#3AA1FF] text-white font-bold'}`} key={item.name}>
                                <div className='flex items-center gap-2'>
                                    {item.icon}
                                    {item.name}
                                </div>
                                {pathname === item.link &&
                                    (
                                        <span className=' justify-self-end bg-white rounded-full text-[#3AA1FF]'>
                                            <ArrowRight />
                                        </span>
                                    )}
                            </Link>
                        ))
                    }
                </>
            ),
        },
        {
            key: 3,
            label: "Assistant",
            children: (
                <>
                    {
                        assItems.map(item => (
                            <Link href={item.link} className={`${pathname === item.link && 'bg-[#3AA1FF] text-white font-bold'}`} key={item.name}>
                                <div className='flex items-center gap-2'>
                                    {item.icon}
                                    {item.name}
                                </div>
                                {pathname === item.link &&
                                    (
                                        <span className=' justify-self-end bg-white rounded-full text-[#3AA1FF]'>
                                            <ArrowRight />
                                        </span>
                                    )}
                            </Link>
                        ))
                    }
                </>
            ),
        }
    ]


    return (
        <div className='w-[20%] lg:flex hidden flex-col items-center gap-3 overflow-scroll sticky top-16 h-[90%]'>
            <div className='flex items-center gap-2 p-4 w-full justify-center'>
                <Avatar className='bg-gray-200 rounded-none h-[50px] w-[50px]' />
                <div className='flex flex-col'>
                    <h1 className='font-bold'>Project Name</h1>
                    <p className='text-gray-200'>Agriculture Project</p>
                </div>

            </div>
            <Button className='btn-outlined'
                onClick={() => {
                    console.log('clicked')
                }}
            >Take Tour</Button>

            <div className="w-full p-4">
                <Collapse className='w-full' items={asideItems} defaultActiveKey={['1', '2', '3']} />

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

