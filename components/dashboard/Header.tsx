import { navLinks } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Bell, BellIcon, ChevronDown, InboxIcon, MailQuestion, MenuIcon, Search } from 'lucide-react'
import { Avatar } from '../ui/avatar'

type Props = {}

function Header({ }: Props) {
    return (
        <div className='w-full p-2 flex items-center justify-between border-b-2 sticky bg-white top-0 left-0 '>
            <div className='flex items-center gap-2'>
                <Button className='bg-white hover:bg-white'>
                    <MenuIcon className='bg-white text-black' />
                </Button>
                <h1 className='lg:text-[1.5rem] text-[0.8rem] font-bold'>ProjeXess</h1>
            </div>
            <div className='hidden p-1 items-center gap-7 lg:flex'>
                {
                    navLinks.map(link => (
                        <Link href={link.link} className='flex items-center gap-2 cursor-pointer hover:text-black text-[#5C5C5C]' key={link.name}>
                            {link.name}
                            <ChevronDown />
                        </Link>
                    )) 
                }

                <Button className='bg-[#3AA1FF] text-white font-bold'>
                    Create
                </Button>
            </div>
            <div className='flex items-center gap-2'>
                <div className='hidden lg:flex items-center p-1 w-[200px] border-2 rounded-md'>
                    <Input placeholder='search' className=' border-none w-full p-0 outline-none' />
                    <Search />
                </div>
                <Button className='bg-white hover:bg-whit' size={'icon'}>
                    <BellIcon fill='black' className='bg-white text-black rotate-[45deg]' />
                </Button>

                <Button className='bg-white hover:bg-white hidden lg:block' size={'icon'}>
                    <InboxIcon className='bg-white text-black' />
                </Button>

                <Avatar className='bg-[#FF9898] '>

                </Avatar>
            </div>
        </div>
    )
}

export default Header