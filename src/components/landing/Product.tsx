import { LucideCheckCheck } from "lucide-react"

const list = [
    "AI help you with tips on the development of projects and all theinformation you need for guidance",
    "AI help you with tips on the development of projects and all theinformation you need for guidance",
    "AI help you with tips on the development of projects and all theinformation you need for guidance",
    "AI help you with tips on the development of projects and all theinformation you need for guidance",
]

function Product() {
    return (
        <div className="w-full p-5 bg-[#3AA0FF0A] ">
            <h1 className="font-medium text-[1.5rem] text-center mt-10">Product</h1>
            <p className="text-[#5C5C5C] text-[0.8rem]  text-center mt-5">See different things that we deal with and what you can do with our platform.</p>

            <div className="w-full flex items-start justify-between p-3 mt-10">
                <div className="w-1/2">
                    <h1 className="font-medium text-[1.5rem] ">Artificial Intelligence</h1>
                    <p className="text-[#5C5C5C] text-[0.8rem] p-5">See different things that we deal with and what you can do with our platform.</p>
                    <p className="font-medium p-5">
                        We use AI in our platform which helps you get more and detailed information on how we work and train you and tell you what your project needs to be good and fit for production.
                    </p>

                    <ul className="ml-5 text-[#5C5C5C] mt-10" id="product-ul">
                        {
                            list.map((item) => {
                                return <li className="flex items-start gap-2">
                                    <LucideCheckCheck className="" fill="#3AA1FF" stroke="#3AA1FF"/>
                                    {item}
                                    </li>
                            })
                        }
                    </ul>
                </div>

                <div className="w-1/2 flex justify-center">
                        <img src="/Ai.svg" width={500} />
                </div>
            </div>
        </div>
    )
}

export default Product