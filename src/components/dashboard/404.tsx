import { Link, useNavigate } from 'react-router-dom'


function NotFound() {

    const navigate = useNavigate()
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <img
                className="w-[30%] mb-11"
                src="/404.svg"

            />
            <h1 className="sm:text-[1.5rem] text-[1rem] text-[#5c5c5c] mb-5">The Page You Visited Is not yet implemented</h1>
            <Link to="#" onClick={() => navigate(-1)} className="text-[#3AA1FF]" >
                go back
            </Link>
        </div>
    )
}

export default NotFound