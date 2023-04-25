/**
 * The function exports a React component that displays a slider of images using the react-slick
 * library.
 * @returns The `ImageSlider` component is being returned, which renders a `Slider` component from the
 * `react-slick` library with the specified settings and a list of images passed as props.
 */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import React from 'react'

const ImageSlider = ({ images }) => {

    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 1000,

    };
    return (
        <>
            <div className="imgslider imgs">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}
export default ImageSlider;
