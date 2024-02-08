import React from 'react'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'

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
        </div>
    )
}

export default Aside