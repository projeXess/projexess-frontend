/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar } from 'flowbite-react'

type Props = {
    title: string,
    description: string,
    avatar?: string,
}

function Insight({
    description,
    title,
    avatar
}: Props) {
    return (
        <div className='w-full p-2 flex gap-5 items-start cursor-pointer mb-2 justify-start'>
            <Avatar img={avatar} className='w-[50px]' rounded />

            <div className='flex flex-col gap-2'>
                <h1 className='text-[0.9rem] font-bold text-[#5e5e5e]'> {title}</h1>
                <p className='text-[#5D5D5D] text-[0.8rem]'>{description}</p>
            </div>
        </div>
    )
}

export default Insight