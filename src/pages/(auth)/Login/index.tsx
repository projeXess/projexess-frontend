import { login } from "@/redux/slices/userSlice"
import { Input } from "antd"
import { useRef, useState, ChangeEvent, FormEvent, useEffect, MouseEvent  } from "react"
import { FaGoogle, FaApple } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

function index() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formRef = useRef<any>(null)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(login({ ...formData }))
        navigate('/dashboard')
    }

    useEffect(() => {
        const handleRedirect = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                e.preventDefault()
            }
        }
        window.addEventListener('keydown', e => handleRedirect(e))

        return () => window.removeEventListener('keydown', e => handleRedirect(e))
    }, [])


    return (
        <div className="w-full grid place-content-center h-full text-left">
            <h1 className="text-[#040308] text-[1.5rem] font-bold">Welcome Back</h1>
            <p className="text-[0.9rem]">Don&apos;t have an account yet ? <Link to={"/auth/signup"} className="text-blue-500">sign up</Link></p>

 <form className="flex flex-col gap-5 mt-10 p-2" onSubmit={(e) => e.preventDefault()} ref={formRef}>

                <div className="input__container">
                   <Input
                        onChange={handleChange}
                        value={formData.email}
                        name="email"
                        placeholder="Email"
                    />
                </div>

                <div className="input__container">
                    <Input.Password
                        onChange={handleChange}
                        value={formData.password}
                        className="p-3" name="password" placeholder="Password" />
                </div>

                <div className="flex gap-3 items-center justify-end">
                    <Link to={"/"} className="text-[.8rem] text-blue-500" >Forgot password ?</Link>
                </div>

                <div>
                    <Link to={"/dashboard"}>
                        <button className="btn-filled w-full p-2 outline-none mt-5" type="submit" onClick={(e) => handleSubmit(e)}>Continue </button>
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