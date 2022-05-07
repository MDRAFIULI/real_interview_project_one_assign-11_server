import React from 'react';
import './ExtraSection.css';
import section1 from '../../../images/banner/section1.png';
import section2 from '../../../images/banner/section2.png';
const ExtraSection = () => {
    return (
        <div className='container'>
            <section className='row section-space'>
                <div className='col-sm-12 col-lg-6 d-flex justify-content-center align-items-center'>
                    <div>
                        <h3>How Famous We Are?</h3>
                        <p>Our quality of plants is believeable and famous all over the country. People come our place from far and wide.We produce these sablings efficiently.Our Nursery not only business. It's a industry. Our inistitute Is a brand. </p>
                    </div>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <img className='w-100 section-img' src={section1} alt="" />
                </div>
            </section>
            <section className='row section-space'>

                <div className='col-sm-12 col-lg-6'>
                    <img className='w-100 section-img' src={section2} alt="" />
                </div>
                <div className='col-sm-12 col-lg-6 d-flex justify-content-center align-items-center'>
                    <div>
                        <h3>Special offer for you?</h3>
                        <p>
                            <strong>*</strong> If you buy from us 1 van products you can get delevery charge free.
                            <br />
                            <strong>*</strong> For regular customer we consider 10 % discount.
                            <br />
                            <strong>*</strong> For new customer we give 2 sapling free.
                            <br />
                            <strong>*</strong> Participate our monthly quize , you can win mximum 100 plants.
                            <br />
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraSection;