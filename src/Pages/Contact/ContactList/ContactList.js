import React from 'react';
import "./ContactList.css"
const ContactList = (props) => {
    const { name, email, phone } = props.user
    return (

        <div className="contact-list     ">
            <p>Name:{name}</p>
            <p>Phone:{phone}</p>
            <p>Email:{email}</p>
            <div className="d-flex">
                <button className='btn btn-danger'>Delete</button>
                <button className='btn btn-primary'>Update</button>
            </div>
        </div>


    );
};

export default ContactList;