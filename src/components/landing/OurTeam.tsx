import { ArrowUpRight } from "lucide-react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


function OurTeam() {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };
    return (
        <div className="w-full p-5 bg-[#00213F] h-auto text-white">
            <h1 className="text-white font-medium text-[1.2rem] text-center">Know more about the Founder</h1>
            <div className="slider-container w-full">

                <div className="slider-container p-5">
                    {/* <Slider {...settings}> */}
                        <div className="flex mt-5 w-full justify-around" >
                            <div className="w-1/2 flex flex-col gap-1 items-start p-4">
                                <h1 className="font-medium text-[1.2rem]">Mico Dan</h1>
                                <p className=" font-extralight">CEO & Founder</p>

                                <p className="font-extralight mt-10">
                                    MICO Dan  is the CEO and Founder of ProjeXess. He was born 2000, October in <br />
                                    a small city in Rwanda. He studied at Rwanda coding academy for 3 years, <br />
                                    worked at DACA company for 2 years and continued to be an entrepreneur launching different startups including this one.  <br />
                                    <br />

                                    He is an experienced software engineer with more than 5 years of experience. <br />
                                    He worked on different project like Daca mobile app and <br />
                                    used different technologies of programming languages of the early age like <br />
                                    Javascript, Typescript and Python.

                                    contact
                                </p>

                            <Link to={"https://mdan.vercel.app"} target="_blank">
                                <button className="btn-filled p-2 rounded-full border-blue-400 mt-5">View Portfolio <ArrowUpRight /></button>
                            </Link>
                            </div>
                            <div
                                className="w-1/2 flex items-center  justify-center"
                            >
                                <img src="/moi.png" width={400} />
                            </div>
                        </div>
                    {/* </Slider> */}
                </div>
            </div>
        </div>
    )
}

export default OurTeam