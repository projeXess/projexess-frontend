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
                <h1 className="text-gray-400 sm:text-[0.9rem] text-[0.6rem] ">Project / Project Name</h1>
            </div>
            <div className='flex items-center justify-between flex-col md:flex-row gap-4'>

                <div className='flex  gap-5 flex-col '>
                    <h1 className='font-bold text-[1.2rem] text-[#414D55] text-left'>{title}</h1>
                    <p className="text-[#949494] text-[0.9rem]">{description}</p>

                </div>
                <div className='flex items-center justify-between border-none w-auto  bg-white rounded-full'>
                    <input className='p-3 rounded-full z-10  rounded-r-full ' placeholder={`Search ${title} ...`} />
                    <span className='flex p-3 text-white font-bold items-center gap-2 bg-[#3AA1FF] rounded-r-full cursor-pointer'>
                        <Search />
                        <span className='sm:block hidden'>Search</span>
                    </span>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col items-center gap-3 w-full'>
                <div className="sm:flex flex-wrap gap-2 justify-between w-full hidden">
                    {
                        title === "Team" ? null : (
                            <Avatar.Group>
                                <Avatar placeholderInitials='T' rounded stacked />
                                <Avatar rounded placeholderInitials='D' stacked />
                                <Avatar rounded placeholderInitials="L" stacked />
                                <Avatar.Counter total={5} href="#" />
                            </Avatar.Group>
                        )
                    }

                </div>

            </div>

        </div>
    )
}

export default Subheader