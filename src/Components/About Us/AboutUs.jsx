// import React from 'react';
//import Header from '../Header/Header';
//import Footer from '../Footer/Footer';
import './AboutUs.css';
// import Card and users here
// import Card from './Card';
// import users from './users';

const AboutUs = () => {
    return (
        <div className="about-us">
            {/* <Header /> */}
            <div className="content">
                <h1>About Us</h1>
                {/* add content here */}
                <div className="grid">
                    {users.map((user, index) => (
                        <Card key={index} user={user} />
                    ))}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default AboutUs;
