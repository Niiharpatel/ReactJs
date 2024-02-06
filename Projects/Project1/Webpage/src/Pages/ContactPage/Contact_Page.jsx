import React from 'react';
import './Contact_Page.css';
import NavigationBar from '../../Component/Navbar/NavigationBar';
import ContactPageCom1 from './Components/Component1/ContactPageCom1';
import ContactPageCom2 from './Components/Component2/ContactPageCom2';
import Footer from '../../Component/Footer/Footer';

export default function Contact_Page() {
    return (
        <>
            {/* <div className="bg-color-contactPage">
                <NavigationBar />
            </div> */}


            <ContactPageCom1 />

            <ContactPageCom2 />

            {/* <Footer /> */}
        </>
    );
}
