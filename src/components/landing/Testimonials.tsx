import TestimonialCard from "./TestimonialCard"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="w-full flex flex-col gap-5 p-10">
            <h1 className="text-[1.3rem] font-medium">Testimonials</h1>
            <p className="text-[#5C5C5C] text-[.8rem]">See different things that we deal with and what you can do with our platform.</p>

            <div className="slider-container p-5">
                <Slider {...settings}>
                  <TestimonialCard/>
                  <TestimonialCard/>
                  <TestimonialCard/>
                  <TestimonialCard/>
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials