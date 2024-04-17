/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { navLinks } from '@/utils/constants'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { BellIcon, ChevronDown, InboxIcon, MenuIcon, Search, CopyXIcon } from 'lucide-react'
import { Avatar } from '../ui/avatar'
import { AsideContext } from '@/providers/Dashboard/AsideProvider'

function Header() {
    const { setState, state } = useContext(AsideContext)
    return (
        <>
            <div className='w-full p-2 flex items-center justify-between border-b-2 sticky bg-white top-0 left-0  z-50'>
                <div className='flex items-center gap-2'>
                    <Button className='bg-white hover:bg-white'
                        onClick={() => {
                            setState(!state)
                        }}
                    >
                      
                        {
                            state ? <CopyXIcon className='bg-white text-black' /> : (<MenuIcon className='bg-white text-black' />)
                        }
                    </Button>
                    <h1 className='md:text-[1.5rem] text-[0.8rem] font-bold' >ProjeXess</h1>
                </div>
                <div className='hidden p-1 items-center gap-7 sm:flex md:text-[1rem] text-[0.6rem]'>
                    {
                        navLinks.map(link => (
                            <Link to={link.link} className='flex items-center gap-1 md:gap-2 cursor-pointer hover:text-black text-[#5C5C5C]' key={link.name}>
                                {link.name}
                                <ChevronDown className='w-[10px]' />
                            </Link>
                        ))
                    }

                    <Button className='bg-[#3AA1FF] text-white font-bold hidden lg:block md:text-[1rem] text-[0.6rem]'>
                        Create
                    </Button>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='items-center p-1 w-[180px] justify-around border-2 rounded-xl bg-white pr-3 pl-3 hidden lg:flex'>
                        <Input placeholder='search' className=' border-none w-full p-0 focus:outline-none' />
                        <Search />
                    </div>
                    <Button className='bg-white hover:bg-white size-6 lg:size-10' size={'icon'}>
                        <BellIcon fill='black' className='bg-white text-black rotate-[45deg]' />
                    </Button>

                    <Button className='bg-white hover:bg-white size-6 lg:size-10' size={'icon'}>
                        <InboxIcon className='bg-white text-black' />
                    </Button>

                    <Avatar className='bg-[#FF9898] size-10 lg:size-10 cursor-pointer'
                
                    >
                            <img src={"/default_profile.svg"} />
                    </Avatar>
                </div>
            </div>


        </>
    )
}

export default Header