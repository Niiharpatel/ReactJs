import React, { useState } from 'react';
import './Homepage.css';

import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import "../../Component/Card/Card.css";
import HomeData from './HomeData.json';
import CardStructure from '../../Component/Card/CardStructure';
import TestimonialMap from '../../Component/Testimonial/TestimonialMap';
import Ourstory from '../../Component/OurStory/Ourstory';
import GiftCardCom from '../../Component/GiftCard/GiftCardCom';
import { userAuth } from '../Auth/Auth';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Homepage() {

    let [data, setData] = useState(HomeData);

    const navigate = useNavigate();

    let { user } = userAuth();

    function HomeNavigate() {

        if (!user) {
            navigate('/alertbox');

        } else {
            navigate('/plant');
        }
    }

    return (
        <>

            <div className="main" style={{ top: "0" }}>



                <div className="bg-img">
                    <div className="home-content">
                        <div><h6>WELCOME TO THE STORE</h6></div>
                        <div className="heading1"><h1>Let’s Bring the Spring to</h1></div>
                        <div className="heading2"><h1>Your Home</h1></div>

                        <div className="btn-hompage"><Button onClick={() => HomeNavigate()} variant="light">Shop Now</Button>
                        </div>
                    </div>
                </div>

            </div>


            <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="50">
                <div className='card-flex'>
                    {

                        data?.map?.((e, i) => {
                            return <CardStructure data={e} key={i} />;
                        })
                    }
                </div>
            </div>


            <div>

                <Ourstory />

            </div>

            <div data-aos="slide-right" data-aos-easing="ease-in-out" data-aos-delay="70">
                <TestimonialMap />
            </div>


            {/* <div data-aos="fade-out" data-aos-easing="ease-in-out" data-aos-delay="200"> */}
            <GiftCardCom />
            {/* </div> */}




        </>
    );
}

export default Homepage;