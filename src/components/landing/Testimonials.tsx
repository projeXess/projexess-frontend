import TestimonialCard from "./TestimonialCard"
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {


    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };
    return (
        <div className="w-full bg-[#3aa0ff24] flex flex-col gap-5 p-10">
            <h1 className="text-[1.3rem] font-medium">Testimonials</h1>
            <div className="slider-container p-5">
                {/* <Slider {...settings}> */}
                  <TestimonialCard/>
                  {/* <TestimonialCard/>
                  <TestimonialCard/>
                  <TestimonialCard/> */}
                {/* </Slider> */}
            </div>
        </div>
    )
}

export default Testimonials