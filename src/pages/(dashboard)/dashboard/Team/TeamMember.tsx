import { Avatar, Empty, Tag } from "antd"
import { LocateFixedIcon, LucideMedal, Search, Star, StarsIcon } from "lucide-react"
import { useParams } from "react-router-dom"


function TeamMember() {

    const { name } = useParams()
    return (
        <div className="w-full h-auto p-3 flex gap-4 flex-col">
            <div className='w-full p-4 flex flex-col gap-7'>
                <div>
                    <h1 className="text-gray-400 sm:text-[0.9rem] text-[0.6rem] ">Project / Project Name</h1>
                </div>
                <div className='flex items-center justify-between flex-col md:flex-row gap-4'>

                    <div className='flex  gap-5 sm:text-left text-center flex-col items-center'>
                        <h1 className='font-bold text-[1.2rem] text-[#414D55]'>{name}</h1>

                    </div>
                    <div className='flex items-center justify-between border-none w-auto  bg-white rounded-full'>
                        <input className='p-3 rounded-full z-10  rounded-r-full ' placeholder={`Search ...`} />
                        <span className='flex p-3 text-white font-bold items-center gap-2 bg-[#3AA1FF] rounded-r-full cursor-pointer'>
                            <Search />
                            <span className='sm:block hidden'>Search</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full p-3 flex items-start justify-center gap-5 flex-col sm:flex-row">
                <div className="p-4 bg-white md:w-[35%] rounded-md flex flex-col items-center gap-3 sm:w-1/2 w-full">
                    <Avatar
                        size={"large"}
                        src="https://media.istockphoto.com/id/1291318636/photo/put-more-in-get-more-out.jpg?s=612x612&w=0&k=20&c=KRvn1x6r9x9GmYMLpW6AVZzkvOA0bmn14fKle-O6CVc="
                        className=" w-[150px] h-[150px]"
                    />
                    <h1 className='font-bold text-[1.5rem] text-[#414D55]'>Agence Dn&apos;D</h1>
                    <p className="text-[#696969]">UI/UX Designer</p>
                    <p className="underline text-[#696969]">website.com</p>
                    <br />
                    <br />
                    <p className="text-[#696969] flex items-center gap-1"><LocateFixedIcon className="w-5" /> Paris, France</p>
                    <button className="btn-outlined p-2 text-[0.7rem] rounded-full w-[60%]"> Remove from Team</button>

                    <br />
                    <p className="text-[#191919] font-bold text-[0.8rem] uppercase">Member Since: December 3, 2018</p>
                    <button className="text-[#969696]">Report</button>
                </div>
                <div className="p-4 bg-white md:w-[35%] rounded-md flex flex-col gap-10 sm:w-1/2 w-full">

                    <div className="w-[100%] p-2 border-slate-300 border-2 rounded-lg flex items-center justify-around">
                        <div className="text-[0.8rem] flex flex-col gap-2">
                            <h1 className="text-[#222222] font-bold">Professional Details/About</h1>
                            <p className="text-[#49454F]">This are the professional details <br /> shown to users in the app.</p>
                        </div>
                        <div>
                            <StarsIcon />
                        </div>

                    </div>

                    <div>
                        <h1 className="text-[#222222] text-[0.8rem]">Epertise In</h1>

                        <div className="w-full p-2">
                            <Tag className="bg-white p-2 border border-slate-300  text-[#49454F]">Mortgage</Tag>
                            <Tag className="bg-white p-2 border border-slate-300 text-[#49454F]">Career</Tag>
                            <Tag className="bg-white p-2 border border-slate-300 text-[#49454F]">Money</Tag>
                            <Tag className="bg-white p-2 border border-slate-300 text-[#49454F]">Stock</Tag>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-[#222222] text-[0.8rem]">Total Experience</h1>
                        <div className="w-[100%] border-slate-300 border-2 rounded-lg mt-4 flex items-center justify-between">
                            <div className="text-[0.8rem] p-2 flex flex-col gap-2">
                                <h1 className="text-[#222222] font-bold">7 Years</h1>
                                <p className="text-[#49454F]">of total experience</p>
                            </div>
                            <div className="p-6 bg-[#FFA78D] h-[100%]">
                                <LucideMedal className="text-white" stroke="white" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-[#222222] text-[0.8rem]">Ratings</h1>
                        <div className="w-[100%]  border-slate-300 border-2 rounded-lg mt-4 flex items-start justify-between">
                            <div className="p-3 text-[0.8rem] flex flex-col gap-2">
                                <h1 className="text-[#222222] font-bold">4 Stars</h1>
                                <p className="text-[#49454F]">from 35 customers</p>
                            </div>
                            <div className="p-6 bg-[#FFCB00] h-[100%]">
                                <Star fill="white" stroke="white" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[#222222] text-[0.8rem]">Customer Reviews</h1>

                        <Empty />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMember