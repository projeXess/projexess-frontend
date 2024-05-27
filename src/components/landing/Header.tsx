/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

const navItems = [
    { name: "Home", link: '' },
    { name: "Explore", link: '/auth/login' },
]

function LandingHeader() {
    const menuButton = React.useRef<HTMLButtonElement>(null)
    const closeButton = React.useRef<HTMLButtonElement>(null)
    const navItemsDiv = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const handleClose = () => {
            navItemsDiv.current?.classList.remove("active")
        }
        closeButton.current?.addEventListener('click', handleClose)

        return () => closeButton.current?.removeEventListener('click', handleClose)
    }, [])

    React.useEffect(() => {

        const handleOpenCloseMenu = () => {
            navItemsDiv.current?.classList.add('active');
        }
        menuButton.current?.addEventListener("click", handleOpenCloseMenu)

        return () => menuButton.current?.removeEventListener("click", handleOpenCloseMenu)
    }, [])

    return (
        <div className="w-full flex p-2 justify-around shadow-lg top-0 sticky z-50 bg-white items-center">
            <div className="flex items-center gap-3">
                <img src="/logo.svg" width={50} />
                <h1 className="font-bold text-[#3AA1FF] md:text-[1.6rem] text-[1rem] ">ProjeXess</h1>
            </div>
            <div className="hidden p-1 items-center gap-7 sm:flex md:text-[1rem] text-[0.8rem]" ref={navItemsDiv}>
                <button className="btn-filled outline-none p-2 block sm:hidden" ref={closeButton}>
                    <X />
                </button>
                {
                    navItems.map((item, index) => {
                        return (
                            <Link className="" key={index} to={item.link}>
                                {item.name}
                            </Link>
                        )
                    })
                }

              
                <div className="hidden items-center gap-3">
                    <img src="/logo.svg" width={50} />
                    <h1 className="font-bold text-[#3AA1FF] md:text-[1.6rem] text-[1rem] ">ProjeXess</h1>
                </div>
                <div className="items-center gap-5 hidden">
                    <Link to={"/auth/login"}> <button className="btn-outlined p-2 md:text-[1rem] text-[0.9rem] rounded-lg">Login</button></Link>
                    <Link to={"/auth/signup"}>  <button className="btn-filled p-2 md:text-[1rem] text-[0.9rem] rounded-lg ">Create account</button></Link>
                </div>
            </div>
            <button className="btn-filled outline-none p-2 block sm:hidden" ref={menuButton}>
                <Menu />
            </button>
            <div className="items-center gap-5 hidden sm:flex">
                <Link to={"/auth/login"}> <button className="btn-outlined p-2 md:text-[1rem] text-[0.9rem] rounded-lg">Login</button></Link>
                <Link to={"/auth/signup"}>  <button className="btn-filled p-2 md:text-[1rem] text-[0.9rem] rounded-lg ">Create account</button></Link>
            </div>
        </div>
    )
}

export default LandingHeader