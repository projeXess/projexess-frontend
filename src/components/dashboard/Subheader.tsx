// import { RootState } from '@/redux/store'
import { Avatar } from 'flowbite-react'
import { Search } from 'lucide-react'
// import { useSelector } from 'react-redux'

type Props = {
    title: string,
    description: string
}

function Subheader({ title, description }: Props) {

    const project = JSON.parse(localStorage.getItem('userinfo')!).project
    return (
        <div className='w-full p-4 flex flex-col gap-7 items-start justify-start'>
            <div>
                <h1 className="text-gray-400 sm:text-[0.9rem] text-[0.6rem] ">Project / {project?.projectName || "Project Name"}</h1>
            </div>
            <div className='flex items-center justify-center flex-col md:flex-row gap-4 w-full'>

                <div className='flex  gap-5 flex-col sm:w-1/2 w-full'>
                    <h1 className='font-bold text-[1.2rem] text-[#414D55] text-left'>{title}</h1>
                    <p className="text-[#949494] text-[0.9rem]">{description}</p>

                </div>

                <div className='flex justify-end sm:w-1/2 w-full'>
                    <div className='bg-[#3AA1FF] rounded-full flex items-center justify-normal w-auto'>
                        <input  placeholder="search ..." type="text" className='bg-white p-3 rounded-full' />
                        <button className='bg-[#3AA1FF] text-white w-auto flex p-3 gap-2 font-bold  rounded-r-full'>
                            <Search />
                            <span className='hidden sm:block'>
                                Search
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col items-center gap-3 w-full'>
                <div className="sm:flex flex-wrap gap-2 justify-between w-full hidden">
                    {
                        title === "Team" || title === "Profile Settings"? null : (
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