import { Checkbox, Input } from "antd"
import { Link } from "react-router-dom"
import { FaGoogle, FaApple } from 'react-icons/fa'

function index() {
    return (
        <div className="w-full grid place-content-center h-full text-left p-4">
            <h1 className="text-[#040308] text-[1.5rem] font-bold">Create Account</h1>
            <p className="text-[0.9rem]">Already have an account ? <Link to={"/auth/login"} className="text-blue-500">login</Link></p>

            <form className="flex flex-col gap-5 mt-10 p-2">
                <div className="flex gap-4">
                    <div className="input__container">
                        <Input
                            className="w-1/2"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="input__container">
                        <Input
                            className="w-1/2"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div className="input__container">
                    <Input
                        placeholder="Email"
                    />
                </div>

                <div className="input__container">
                    <Input.Password className="p-3" placeholder="Password" />
                </div>

                <div className="flex gap-3 items-center">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-[.8rem]">I agree to Projexess <Link to={"/"} className="text-blue-500">Terms of Services</Link> and <Link to={"/"} className="text-blue-500">Privacy policy</Link></label>
                </div>

                <div>
                    <Link to={"/create-project"}>
                        <button className="btn-filled w-full p-2 outline-none mt-5">Create Account</button>
                    </Link>
                </div>

                <div className="flex p-2 justify-between items-center gap-5">
                    <hr className="w-full" />
                    <p>or</p>
                    <hr className="w-full" />

                </div>
                <div className="flex flex-col gap-4">
                    <button className="w-full p-2 outline-none border border-[#040308] text-[#040308] text-[0.9rem] rounded-md  flex items-center justify-center gap-5"> <FaGoogle/>  Continue With Google</button>
                    <button className="w-full p-2 outline-none border border-[#040308] text-[#040308] text-[0.9rem] rounded-md flex items-center justify-center gap-5"> <FaApple/> Continue With Apple</button>
                </div>
            </form>
        </div>
    )
}

export default index