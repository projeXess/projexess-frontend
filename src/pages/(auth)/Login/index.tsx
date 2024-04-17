import { Input } from "antd"
import { FaGoogle, FaApple } from "react-icons/fa"
import { Link } from "react-router-dom"

function index() {
    return (
        <div className="w-full grid place-content-center h-full text-left">
            <h1 className="text-[#040308] text-[1.5rem] font-bold">Welcome Back</h1>
            <p className="text-[0.9rem]">Don&apos;t have an account yet ? <Link to={"/auth/signup"} className="text-blue-500">sign up</Link></p>

            <form className="flex w-[100%] flex-col gap-5 mt-10">

                <div className="input__container">
                    <Input
                        placeholder="Email"
                    />
                </div>

                <div className="input__container">
                    <Input.Password className="p-3" placeholder="Password" />
                </div>

                <div className="flex gap-3 items-center justify-end">
                    <Link to={"/"} className="text-[.8rem] text-blue-500" >Forgot password ?</Link>
                </div>

                <div>
                    <Link to={"/dashboard"}>
                        <button className="btn-filled w-full p-2 outline-none mt-5">Login</button>
                    </Link>
                </div>

                <div className="flex p-2 justify-between items-center gap-5">
                    <hr className="w-full" />
                    <p>or</p>
                    <hr className="w-full" />

                </div>
                <div className="flex flex-col gap-4">
                    <button className="w-full p-2 outline-none border border-[#040308] text-[#040308] text-[0.9rem] rounded-md  flex items-center justify-center gap-5"> <FaGoogle />  Continue With Google</button>
                    <button className="w-full p-2 outline-none border border-[#040308] text-[#040308] text-[0.9rem] rounded-md flex items-center justify-center gap-5"> <FaApple /> Continue With Apple</button>
                </div>
            </form>
        </div>
    )
}

export default index