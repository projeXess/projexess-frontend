import FeatureCard from "./FeatureCard"

const features = [
    {
        name: "Progress Management",
        description: "Tracking the progress of every team member is what we do. By using our system then we display in graphs",
        image: "/chart.svg"
    },

    {
        name: "Timeline",
        description: "Time line management is also involved where we track the time and help to inform you on deadlines",
        image:"/calendar.svg"
    },
    {
        name: "AI Market Insights",
        description: "Artificial intelligence is also used to provide you with necessary data and market insights using charts.......",
        image:"/Ai.svg"
    }
]

function Features() {
    return (
        <div
            className="w-full bg-[#3aa0ff24]"
        >
            <p className="text-[#5C5C5C] text-[0.8rem] p-5 text-center">See different things that we deal with and what you can do with our platform.</p>

            <div className="flex w-full items-center justify-evenly mt-5">
                <h1 className="text-[1.5rem] font-bold">Features</h1>
                
            </div>

            <div className="flex p-4 mt-16 justify-around">
                {
                    features.map(feature => {
                        return <FeatureCard {...feature} />
                    })
                }
            </div>
        </div>
    )
}

export default Features