import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

type Props = {
    name: String,
    description: String
}

function TaskCompleted({ name, description }: Props) {
    return (
        <div className='p-3 bg-[#F1FBFF] rounded-lg  flex lg:flex-row flex-col items-center gap-5 border-2'>
            <div className='flex items-start gap-3 flex-col text-center lg:text-left  w-full'>
                <h1 className='lg:text-[1.4rem] text-[0.9rem] font-bold lg:text-center text-left'>{name}</h1>
                <p className='text-[0.8rem] text-[#5C5C5C]'> { description}</p>
            </div>
            <Button className='btn-filled'>
                Code
                <ArrowRight className='rotate-[-45deg]' />
            </Button>
        </div>
    )
}

export default TaskCompleted