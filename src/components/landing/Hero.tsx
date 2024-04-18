import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

function Hero() {
    return (
        <div className="w-full flex bg-[#3aa0ff24] items-center p-5">
            <div className="w-1/2 p-2 flex flex-col gap-5 justify-normal items-start">
                <h1 className="text-[2rem] font-bold">ProjeXess <br />
                    Your <span className="text-[#3AA1FF]">Assistant</span>, your <span className="text-[#3AA1FF]">Success</span></h1>
                <p className="text-[#5C5C5C] text-[.9rem] leading-7">
                    Empowering Dreams, Building Futures, Your Bridge to Project Success . We're here <br />  to bridge the gap between dreams and reality,.
                </p>
                <Link to={"/auth/signin"}>
                    <button className="btn-filled p-2 pl-6 pr-6 outline-none rounded-full">Explore <ArrowRight /> </button>
                </Link>
            </div>
            <div
                className="w-1/2"
            >

                <img src="/Hero.svg" />
            </div>
        </div>
    )
}

export default Hero