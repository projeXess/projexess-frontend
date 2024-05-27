import { LucideCheckCheck } from "lucide-react"

const list = [
    "Utilize our AI to gather and analyze localized market data from various sources, providing users with real-time insights and trends specific to their region. This could include information on consumer behavior and market demands tailored to different geographical areas.",
    "Implementation of AI algorithms to predict project outcomes based on historical data and current trends. This functionality can help users make informed decisions and anticipate potential challenges, improving project planning and execution.",
    "Integration of a virtual assistant powered by AI to provide users with project-related support and guidance. This assistant can answer queries, provide suggestions, and offer reminders, enhancing the overall user experience.",
    "Utilization of AI algorithms to assess project risks and suggest mitigation strategies. By analyzing historical data and current project parameters, our AI can help users anticipate and address potential risks, leading to more successful project outcomes.",
]

function Product() {
    return (
        <div className="w-full p-5 bg-[#3AA0FF0A] ">
            <h1 className="font-medium text-[1.5rem] text-center mt-10">Uniqueness</h1>
            <p className="text-[#5C5C5C] text-[0.8rem]  text-center mt-5">See our uniqueness from other platforms which potrays our creativity.</p>

            <div className="w-full flex items-start justify-between p-3 mt-10">
                <div className="w-1/2">
                    <h1 className="font-medium text-[1.5rem] ">Artificial Intelligence</h1>
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