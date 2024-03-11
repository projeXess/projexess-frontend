import { explorerListItems, socials, useCasesItems, valuePropoItems } from "@/utils/constants"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "../ui/input"



function LandingFooter() {
    return (
        <div className="w-full bg-white rounded-t-2xl h-auto mt-5 pb-10">
            <div className="w-full p-5 mb-10">
                <h1 className="font-bold text-[1.5rem] ">LOGO</h1>
            </div>

            <div className="flex p-1 w-full justify-around">
                <div className="flex flex-col">
                    <h1 className="mb-5 text-[1.2rem]">Explorer</h1>
                    {
                        explorerListItems.map((item, index) => {
                            return <Link className="flex items-center gap-2 mt-5 text-[#5c5c5c] text-[.9rem]" to={item.link} key={index}>
                                {item.name} <span className="text-[15px] "><ArrowUpRight className="size-4" /></span>
                            </Link>
                        })
                    }
                </div>
                <div className="flex flex-col">
                    <h1 className="mb-5 text-[1.2rem]">Use Cases</h1>
                    {
                        useCasesItems.map((item, index) => {
                            return <Link className="flex items-center gap-2 mt-5 text-[#5c5c5c] text-[.9rem]" to={item.link} key={index}>
                                {item.name} <span className="text-[15px] "><ArrowUpRight className="size-4" /></span>
                            </Link>
                        })
                    }
                </div>
                <div className="flex flex-col">
                    <h1 className="mb-5 text-[1.2rem]">Value Proposition</h1>
                    {
                        valuePropoItems.map((item, index) => {
                            return <Link className="flex items-center gap-2 mt-5 text-[#5c5c5c] text-[.9rem]" to={item.link} key={index}>
                                {item.name} <span className="text-[15px] "><ArrowUpRight className="size-4" /></span>
                            </Link>
                        })
                    }

                    <div className="w-full mt-7 p-2 flex flex-col gap-3">
                        <h1 className="text-[#484846] text-[1.03rem]">Join us</h1>
                        <Input className="bg-[#89c6ff]" />
                        <button className="btn-filled text-center p-1 w-full">Join us</button>
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
                                    <span onClick={() => window.open(item.link, 'blank')} key={index} className="bg-[#3AA1FF] text-white p-2 rounded-full cursor-pointer">
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