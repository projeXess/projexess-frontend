import { Link } from "react-router-dom"

const navItems = [
    { name: "Home", link: '' },
    { name: "Product", link: '' },
    { name: "Analytics", link: '' },
]

function LandingHeader() {
    return (
        <div className="flex p-2 justify-around">
            <div>
                <h1 className="font-bold text-[#3AA1FF] text-[1.6rem]">ProjeXess</h1>
            </div>
            <div className="flex items-center gap-5">
                {
                    navItems.map((item, index) => {
                        return (
                            <Link className="text-[1.01rem]" key={index} to={item.link}>
                                {item.name}
                            </Link>
                        )
                    })
                }
            </div>
            <div className="flex items-center gap-5">
                <button className="btn-outlined p-2 rounded-lg">Login</button>
                <button className="btn-filled p-2 rounded-lg">Create account</button>
            </div>
        </div>
    )
}

export default LandingHeader