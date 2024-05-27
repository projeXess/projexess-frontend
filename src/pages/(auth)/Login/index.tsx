/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "antd";
import { useRef, useState, ChangeEvent, FormEvent, useEffect, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import DashboardLoading from "@/components/dashboard/Loading";

function Index() {

    const navigate = useNavigate();
    const formRef = useRef<any>(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
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
            const { data } = await axios.post('https://projexess-backend.onrender.com/api/users/login', formData);
            setLoading(false);
            if (data) {
                localStorage.setItem('userinfo', JSON.stringify(data));
                toast.success('successfully logged in');
                navigate('/dashboard');
            }
        } catch (error: unknown) {
            setLoading(false);
            console.error('There was an error logging in!', error);

            // Handle the error type
            if (axios.isAxiosError(error)) {
                // Axios error
                toast.error(error.response?.data?.message || 'An error occurred during login');
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
                <div className="w-full grid place-content-center h-full text-left">
                    <h1 className="text-[#040308] text-[1.5rem] font-bold">Welcome Back</h1>
                    <p className="text-[0.9rem]">
                        Don&apos;t have an account yet? <Link to={"/auth/signup"} className="text-blue-500">sign up</Link>
                    </p>

                    <form className="flex flex-col gap-5 mt-10 p-2" onSubmit={handleSubmit} ref={formRef}>
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

                        <div>
                            <button className="btn-filled w-full p-2 outline-none mt-5" type="submit">
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default Index;
