import { Menu } from "lucide-react"
import { Link } from "react-router-dom"

const navItems = [
    { name: "Home", link: '' },
    { name: "Product", link: '' },
    { name: "Analytics", link: '' },
]

function LandingHeader() {

    return (
        <div className="w-full flex p-2 justify-around shadow-lg top-0 sticky z-50 bg-white items-center">
            <div className="flex items-center gap-3"> 
                <img src="/logo.svg" width={50} />
                <h1 className="font-bold text-[#3AA1FF] md:text-[1.6rem] text-[1rem] ">ProjeXess</h1>
            </div>
            <div className="hidden p-1 items-center gap-7 sm:flex md:text-[1rem] text-[0.8rem]">
                {
                    navItems.map((item, index) => {
                        return (
                            <Link className="" key={index} to={item.link}>
                                {item.name}
                            </Link>
                        )
                    })
                }
            </div>
            <button className="btn-filled outline-none p-2 block sm:hidden">
                <Menu/>
            </button>
            <div className="items-center gap-5 hidden sm:flex">
                <Link to={"/auth/login"}> <button className="btn-outlined p-2 md:text-[1rem] text-[0.9rem] rounded-lg">Login</button></Link>
                <Link to={"/auth/signup"}>  <button className="btn-filled p-2 md:text-[1rem] text-[0.9rem] rounded-lg ">Create account</button></Link>
            </div>
        </div>
    )
}

export default LandingHeader