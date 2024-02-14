import { Avatar } from 'flowbite-react'
import { Search } from 'lucide-react'

type Props = {
    title: string,
    description: string
}

function Subheader({ title, description }: Props) {
    return (
        <div className='w-full p-4 flex flex-col gap-7'>
            <div>

                <h1 className="text-gray-400 text-[0.9rem]">Project / Project Name</h1>
            </div>
            <div className='flex flex-col gap-5'>

                <h1 className='font-bold'>{title}</h1>
                <p className="text-[#949494] text-[0.9rem]">{description}</p>
            </div>
            <div className='flex items-center gap-3'>
                <div className="flex flex-wrap gap-2 justify-between w-full">
                    <Avatar.Group>
                        <Avatar placeholderInitials='T' rounded stacked />
                        <Avatar rounded placeholderInitials='D' stacked />
                        <Avatar rounded placeholderInitials="L" stacked />
                        <Avatar.Counter total={5} href="#" />
                    </Avatar.Group>

                </div>
                <div className='flex items-center justify-between border-none w-auto  bg-white rounded-full '>
                    <input className='p-4 rounded-full z-10 rounded-r-full ' placeholder='Search ...' />
                    <span className='flex p-4 text-white font-bold items-center gap-2 bg-[#3AA1FF] rounded-r-full cursor-pointer'>
                        <Search />
                        Search
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Subheader