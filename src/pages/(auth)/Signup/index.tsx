/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import DashboardLoading from "@/components/dashboard/Loading";

function Index() {
    const navigate = useNavigate();
    const formRef = useRef<any>(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.post('https://projexess-backend.onrender.com/api/users/register', formData);
            setLoading(false);
            localStorage.setItem('userinfo', JSON.stringify(data));
            toast.success('Success signup process');
            navigate('/create-project');
        } catch (error: unknown) {
            setLoading(false);
            console.error('There was an error creating the account!', error);
    
            // Handle the error type
            if (axios.isAxiosError(error)) {
                // Axios error
                toast.error(error.response?.data?.message || 'An error occurred during registration');
            } else if (error instanceof Error) {
                // Native Error
                toast.error(error.message);
            } else {
                // Fallback for unexpected errors
                toast.error('An unexpected error occurred');
            }
        }
    };

    useEffect(() => {
        const handleRedirect = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                e.preventDefault();
            }
        };
        window.addEventListener('keydown', handleRedirect);

        return () => window.removeEventListener('keydown', handleRedirect);
    }, []);

    return (
        <>
            {loading ? (
                <DashboardLoading />
            ) : (
                <div className="w-full grid place-content-center h-full text-left p-4">
                    <h1 className="text-[#040308] text-[1.5rem] font-bold">Create Account</h1>
                    <p className="text-[0.9rem]">
                        Already have an account? <Link to={"/auth/login"} className="text-blue-500">login</Link>
                    </p>

                    <form className="flex flex-col gap-5 mt-10 p-2" onSubmit={handleSubmit} ref={formRef}>
                        <div className="flex gap-4">
                            <div className="input__container">
                                <Input
                                    onChange={handleChange}
                                    value={formData.firstName}
                                    name="firstName"
                                    className="w-1/2"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="input__container">
                                <Input
                                    onChange={handleChange}
                                    value={formData.lastName}
                                    name="lastName"
                                    className="w-1/2"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
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
                                className="p-3"
                                name="password"
                                placeholder="Password"
                            />
                        </div>

                        <div className="flex gap-3 items-center">
                            <Checkbox id="terms" />
                            <label htmlFor="terms" className="text-[.8rem]">
                                I agree to Projexess <Link to={"/"} className="text-blue-500">Terms of Services</Link> and <Link to={"/"} className="text-blue-500">Privacy policy</Link>
                            </label>
                        </div>

                        <div>
                            <button className="btn-filled w-full p-2 outline-none mt-5" type="submit">
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default Index;
