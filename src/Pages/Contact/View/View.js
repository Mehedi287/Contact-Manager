import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./View.css"
const View = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/contacts')
            .then(res => res.json())
            .then(data => {
                const d = data.filter(detail => detail._id === id);
                setDetail(d[0])
            })

    }, []);
    const { email, name, phone } = detail
    console.log(detail);
    return (
        <div className="mt-3 view-container">
            <h3>Detail</h3>
            {email ? <div className="view text-justify">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>


            </div> : <p>Loeading</p>}

            <Link className='text-decoration-none' to="/contact">
                <button className="button-6 mt-3" >Go Back</button>

            </Link>
        </div>
    );
};

export default View;