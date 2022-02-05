import React from 'react';
import "./Home.css";
import img from "../../images/email-marketing-internet-chatting-24-hours-support_335657-3009-removebg-preview.png";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home'>
            <h1 className='text-shadow'>Contact App</h1>
            <div className="row d-gird g-2 text">
                <div className="col col-md-7">
                    <h3 className=''>Welcome To Contact App</h3>
                    <h6 className=''>This is a imagine application. Hare you can save address of your favourite person like contact app. </h6>
                    <h5 className='list'>We Provide:-</h5>
                    <ul className='list'>
                        <li>You can Make a contacts list</li>
                        <li>Update any contact information</li>
                        <li>Delete any contact </li>
                        <li>Fiend any contact searching by name</li>
                    </ul>
                    <Link className='text-decoration-none button' to="/login">
                        <button className="button-6" >Login</button>

                    </Link>
                </div>
                <div className="col col-md-5">
                    <img className='img-fluid' src={img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;