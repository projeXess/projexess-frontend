import { Avatar, Input } from "antd"
// import { login, logout } from "@/redux/slices/userSlice"
// import { useDispatch } from "react-redux"
// import { RootState } from "@/redux/store"
import { FormEvent, MouseEvent, useRef, useState, ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { toast } from "react-toastify"
import DashboardLoading from "./Loading"


function AccountSettings() {



    const navigate = useNavigate()
    // const dispatch = useDispatch()
    const formRef = useRef<any>(null)
    const [loading, setLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem('userinfo')!).user
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    const handleLogout = () => {
        localStorage.removeItem('userinfo');
        toast.success('Successfully logged out')
        navigate('/')
    };



    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true)
        try {
            const { data } = await axios.put(`https://projexess-backend.onrender.com/api/users/update/${user?._id}`, formData);
            setLoading(false)
            localStorage.setItem('userinfo', JSON.stringify(data));
            toast.success('Successfully updated information')
            navigate('/dashboard');
        } catch (error) {
            setLoading(false)
            toast.error('Failed to update information')
            console.error('There was an error creating the account!', error);
        }
    }

    return (
        <>
            {loading ? (<DashboardLoading />) : (<div className="flex flex-col gap-5 mt-10">
                <Avatar size={"large"} src="/default_profile.svg" className="w-[100px] h-[100px] bg-slate-100 border-dotted border-2 border-black text-black cursor-pointer"  >
                    <img width={'100%'} />
                </Avatar>

                <form ref={formRef} className="w-full flex flex-col gap-11" onSubmit={(e) => e.preventDefault()}>
                    <div className="w-full flex gap-5">
                        <div className="input__container w-1/2">
                            <label htmlFor="firstName">First Name</label>
                            <Input onChange={handleChange}
                                value={formData.firstName}
                                name="firstName" placeholder={user.firstName} className="mt-5" />
                        </div>

                        <div className="input__container w-1/2">
                            <label htmlFor="lastName" >Last Name</label>
                            <Input onChange={handleChange}
                                value={formData.lastName}
                                name="lastName" placeholder={user.lastName} className="mt-5" />
                        </div>
                    </div>

                    <div className="w-full flex gap-5">
                        <div className="input__container w-1/2">
                            <label htmlFor="email">Email</label>
                            <Input onChange={handleChange}
                                value={formData.email}
                                name="email" placeholder={user.email} className="mt-5" />
                        </div>

                        <div className="input__container w-1/2">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <Input placeholder="0785476347" className="mt-5" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="btn-filled p-2 rounded-md" type="submit" onClick={(e) => handleSubmit(e)}>Update</button>
                        <button
                            className="p-2 rounded-md mx-20 bg-red-500 text-white"
                            onClick={handleLogout}
                        >
                            Log out
                        </button>
                    </div>
                </form>
            </div>)}
        </>
    )
}

export default AccountSettings
