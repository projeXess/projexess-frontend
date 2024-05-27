import { explorerListItems, socials, useCasesItems, valuePropoItems } from "@/utils/constants"
import { FormEvent, MouseEvent } from "react"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'



function LandingFooter() {

    const handleClick =  async(e: FormEvent<HTMLFormElement> | MouseEvent<HTMLSpanElement>) => {
        e.preventDefault()
        toast.error('No socials yet')
    }
    return (
        <div className="w-full bg-white rounded-t-2xl h-auto mt-5 pb-10">
            <div className="w-full p-5 mb-10 flex items-center gap-3">
                <img src="/logo.svg" width={50}  />
                <h1 className="font-bold text-[1.5rem] ">Projexess</h1>
            </div>

            <div className="sm:flex sm:p-1 w-full justify-around grid grid-cols-2  p-5 gap-5">
                <div className="flex flex-col">
                    <h1 className="mb-5 text-[1.2rem]">Explorer</h1>
                    {
                        explorerListItems.map((item, index) => {
                            return <Link className="flex items-center gap-2 mt-5 text-[#5c5c5c] md:text-[1rem] text-[.7rem]" to={item.link} key={index}>
                                {item.name} 
                            </Link>
                        })
                    }
                </div>
                <div className="flex flex-col">
                    <h1 className="mb-5 text-[1.2rem]">Use Cases</h1>
                    {
                        useCasesItems.map((item, index) => {
                            return <Link className="flex items-center gap-2 mt-5 text-[#5c5c5c] md:text-[1rem] text-[.7rem]" to={item.link} key={index}>
                                {item.name}
                            </Link>
                        })
                    }
                </div>
                <div className="flex flex-col">
                    <h1 className="mb-5 text-[1.2rem]">Value Proposition</h1>
                    {
                        valuePropoItems.map((item, index) => {
                            return <Link className="flex items-center gap-2 mt-5 text-[#5c5c5c] md:text-[1rem] text-[.7rem]" to={item.link} key={index}>
                                {item.name} 
                            </Link>
                        })
                    }

                    <div className="w-full mt-7 p-2 flex flex-col gap-3">
                     <Link to="/auth/signup">  <button className="btn-filled text-center p-1 w-full">Join us</button></Link> 
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col gap-4">
                <hr />
                <div className="w-full flex items-center p-1 justify-around h-full">
                    <h1>Team ProjeXess</h1>

                    <div className="flex items-center gap-2">
                        {
                            socials.map((item, index) => {
                                return (
                                    <span onClick={(e) =>handleClick(e)} key={index} className="bg-[#3AA1FF] text-white sm:p-2 p-[5px] rounded-full cursor-pointer">
                                        {item.icon}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingFooter