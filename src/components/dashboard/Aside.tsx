/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useContext } from 'react'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { settingsItems } from '@/utils/constants'
import { NavLink } from 'react-router-dom'
import { Collapse, CollapseProps } from 'antd'
import { ArrowRight, BotIcon, CircuitBoard, FileStack, TagsIcon } from "lucide-react";
import { Transition } from '@headlessui/react'
import { AsideContext } from '@/providers/Dashboard/AsideProvider'

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



function Aside() {
    const { state } = useContext(AsideContext)


    const asideItems: CollapseProps['items'] = [
        {
            key: '1',
            label: "Planning",
            children: (
                <>
                    {
                        planningItems.map(item => (
                            <NavLink to={item.link} className={({ isActive }) => `${isActive && 'bg-[#3AA1FF] text-white font-bold'}`} key={item.name}>
                                <div className='flex items-center gap-2'>
                                    {item.icon}
                                    {item.name}
                                </div>
                                <span className='active-icon justify-self-end bg-white rounded-full text-[#3AA1FF] p-1'>
                                    <ArrowRight />
                                </span>
                            </NavLink>
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
                            <NavLink to={item.link} className={({ isActive }) => isActive ? 'bg-[#3AA1FF] text-white font-bold' : ''} key={item.name}>
                                <div className='flex items-center gap-2'>
                                    {item.icon}
                                    {item.name}
                                </div>
                                <span className='active-icon hidden justify-self-end bg-white rounded-full text-[#3AA1FF] p-1'>
                                    <ArrowRight />
                                </span>
                            </NavLink>
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
                            <NavLink to={item.link} className={({ isActive }) => `${isActive && 'bg-[#3AA1FF] text-white font-bold'}`} key={item.name}>
                                <div className='flex items-center gap-2'>
                                    {item.icon}
                                    {item.name}
                                </div>
                                <span className='active-icon justify-self-end bg-white rounded-full text-[#3AA1FF] p-1'>
                                    <ArrowRight />
                                </span>
                            </NavLink>
                        ))
                    }
                </>
            ),
        }
    ]


    return (
        <Transition
            show={state}
            className={`overflow-auto  bg-white  sm:relative fixed left-0 top-0 h-[100%] sm:shadow-none border-r-2 shadow-md w-[25%] lg:flex hidden `}
            as='div'
            enter="transition duration-100 ease-out"
            enterFrom="transform -left-300 opacity-0"
            enterTo="transform left-0 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform left-0 opacity-100"
            leaveTo="transform -left-300 opacity-0"
        >
            <div className='w-[100%] lg:flex hidden flex-col items-center gap-3 overflow-y-scroll  h-[100%]'>
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
                            <NavLink to={item.link} className='flex item-center  text-[#5C5C5C]' key={item.name} >
                                {item.icon}
                                {item.name}
                            </NavLink>
                        ))
                    }

                    <p className='font-bold text-[0.6rem] tracking-wider mt-11 text-center'>Your Project is managed in <br></br> this Panel</p>
                </div>
            </div>
        </Transition>
    )
}

export default Aside

