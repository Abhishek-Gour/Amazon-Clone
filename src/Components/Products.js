/**
 * The Products function returns a JSX element that displays various product categories and a carousel
 * of new international customer purchases.
 * @returns The `Products` component is being returned, which contains HTML elements and a `Carousel`
 * component from the `react-multi-carousel` library.
 */
/* `import React from 'react'` is importing the React library, which is necessary for building React
components and applications. It allows us to use React's core features such as JSX syntax, component
creation, and state management. */
import React from 'react'
import './Products.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
function Products() {
    const myWhite = {
        color: 'white',
    }
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='products'>
            <div className="productRow1">

                <div className="cart">
                    <h3>Get fit at home</h3>
                    <a href="/"><img src="./images/asset 14.jpeg" alt="" /></a>
                    <Link to='/productpage'>
                        <a href="/" className='elporeBtnHover'>Explore now</a>
                    </Link>
                </div>

                <div className="cart">
                    <h3>Dresses</h3>
                    <a href="/"><img src="./images/asset 11.jpeg" alt="" /></a>
                    <Link to='/productpage'>
                        <a href="/" className='elporeBtnHover'>Explore now</a>
                    </Link>
                </div>

                <div className="cart">
                    <h3>Beauty picks</h3>
                    <a href="/"><img src="./images/asset 12.jpeg" alt="" /></a>
                    <Link to='/productpage'>
                        <a href="/" className='elporeBtnHover'>Explore now</a>
                    </Link>
                </div>

                <div className="cart">
                    <h3>Electronics</h3>
                    <a href="/"><img src="./images/asset 15.jpeg" alt="" /></a>
                    <Link to='/productpage'>
                        <a href="/" className='elporeBtnHover'>Explore now</a>
                    </Link>
                </div>

            </div>
            <div className="productRow1">
                <div className="cart">
                    <h3>Your fit in the front of your eye's</h3>\
                    <a href="/"><img src="./images/asset 25.jpeg" alt="" /></a>
                    <Link to='/productpage'>
                        <li href="#" className='elporeBtnHover'>Explore now</li>
                    </Link>

                </div>

                <div className="cart">
                    <h3>Quality like aeroplane on the sky</h3>
                    <a href="/"><img src="./images/asset 26.jpeg" alt="" /></a>
                    <Link to='/productpage'>
                        <li href="#" className='elporeBtnHover'>Explore now</li>
                    </Link>
                </div>

                <div className="cart">
                    <h3>Frequently repurchased in Home</h3>
                    <a href="/"><img src="./images/asset 27.jpeg" alt="" /></a>
                    <Link to='/productpage'>
                        <li href="#" className='elporeBtnHover'>Explore now</li>
                    </Link>
                </div>

                <div className="cart">
                    <h3>Home Decor Unde $20</h3>
                    <a href="/"><img src="./images/asset 28.jpeg" alt="" /></a>
                    <Link to='/productpage'>
                        <li href="#" className='elporeBtnHover'>Explore now</li>
                    </Link>
                </div>
            </div>

            <div className='productRow2slider'>
                <div className="productRow2">
                    <h3>New international customers purchased</h3>
                    <div >
                        <Carousel responsive={responsive}
                            centerMode={true}
                            autoPlay={true}
                            swipeable={true}
                            autoPlaySpeed={1000}
                            infinite={true}
                            keyBoardControl={true}
                            removeArrowOnDeviceType={['tablet', 'mobile']}
                            customTransition='all .5'
                            itemClass="carousel-item-padding-40-px"

                        >
                            <a href="/" className='product2ImageHover'><img src="./images/asset 41.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 42.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 43.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 44.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 45.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 46.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 47.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 48.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 49.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 50.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 51.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 52.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 53.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 54.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 55.jpeg" alt="Product image" /></a>
                            <a href="/"><img src="./images/asset 56.jpeg" alt="Product image" /></a>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="productRow1">
                <div className="cart">
                    <h3>New arrivals in Toys</h3>
                    <a href="#"><img src="./images/asset 75.jpeg" alt="" /></a>
                    <Link to='/productpage'>
                        <li href="#" className='elporeBtnHover'>Explore now</li>
                    </Link>
                </div>

                <div className="cart">
                    <h3>For your Fitness Needs</h3>
                    <a href="#"><img src="./images/asset 76.jpeg" alt="" /></a>
                    <Link to='/productpage'>
                        <li href="#" className='elporeBtnHover'>Explore now</li>
                    </Link>
                </div>

                <div className="cart" style={myWhite}>
                    <h3>Your shop</h3>
                    <a href="#"><img src="./images/asset 101.jpeg" alt="" /></a>
                    <Link to='/productpage'>
                        <li href="#" className='elporeBtnHover'>Explore now</li>
                    </Link>
                </div>

                <div className="cart">
                    <h3>Shop Laptops & Tablets</h3>
                    <a href="#"><img src="./images/asset 135.jpeg" alt="" /></a>
                    <Link to='/productpage'>
                        <li href="#" className='elporeBtnHover'>Explore now</li>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Products

    // < div div className = "slide-div" >
    //     <a href="#"><img src="./images/asset 41.jpeg" alt="" /></a>
    //                 </ >
                    // <div className="slide-div">
                    //     <a href="#"><img src="./images/asset 41.jpeg" alt="" /></a>
                    // </div>
                    // <div className="slide-div">
                    //     <a href="#"><img src="./images/asset 41.jpeg" alt="" /></a>
                    // </div>
                    // <div className="slide-div">
                    //     <a href="#"><img src="./images/asset 41.jpeg" alt="" /></a>
                    // </div>
                    // <div className="slide-div">
                    //     <a href="#"><img src="./images/asset 41.jpeg" alt="" /></a>
                    // </div>
                    // <div className="slide-div">
                    //     <a href="#"><img src="./images/asset 41.jpeg" alt="" /></a>
                    // </div>
                    // <div className="slide-div">
                    //     <a href="#"><img src="./images/asset 41.jpeg" alt="" /></a>
                    // </div>
                    // <div className="slide-div">
                    //     <a href="#"><img src="./images/asset 41.jpeg" alt="" /></a>
                    // </div>
                    // <div className="slide-div">
                    //     <a href="#"><img src="./images/asset 41.jpeg" alt="" /></a>
                    // </div>