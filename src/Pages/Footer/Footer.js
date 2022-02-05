import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className='bg-dark text-white sticky-bottom  '>
            <div className="wrapper mt-2">
                <div className="icon facebook">
                    <div className="tooltip">Facebook</div>
                    <span><i className="fab fa-facebook-f"></i></span>
                </div>
                <div className="icon twitter">
                    <div className="tooltip">Twitter</div>
                    <span><i className="fab fa-twitter"></i></span>
                </div>
                <div className="icon instagram">
                    <div className="tooltip">Instagram</div>
                    <span><i className="fab fa-instagram"></i></span>
                </div>
                <div className="icon github">
                    <div className="tooltip">Github</div>
                    <span><i className="fab fa-github"></i></span>
                </div>
                <div className="icon youtube">
                    <div className="tooltip">Youtube</div>
                    <span><i className="fab fa-youtube"></i></span>
                </div>
            </div>
            <div className="m-0 p-2">
                <p >Copy Right By MerchDb 2022</p>
            </div>

        </div>
    );
};

export default Footer;