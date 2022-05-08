import React, { useState } from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-height"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Green Lab City Nursery</h3>
                        <p>A famouse library ,which you are founding.All your favorite plants available here.You can visit our place.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-height"
                        src={banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Best Service We Provide.</h3>
                        <p>We provide not only best sapling.We also provide best service. Like delevery ,introduction and other services. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-height"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Our Offer </h3>
                        <p>
                            Exciting offer we present our customer. See below in this site. You can gain all offer.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;