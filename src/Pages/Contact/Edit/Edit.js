
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./Edit.css"
import { useParams } from 'react-router-dom';

const Edit = () => {
    const [update, setUpdate] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from.pathname || "/contact"
    console.log(id);
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    //------------------------- add a contact -------------------
    const onSubmit = data => {
        fetch(`https://quiet-castle-97214.herokuapp.com/contacts`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                history.push(redirect_uri);
                res.json()
            })
            .then(data => {
                if (data.modifiedCount) {
                    alert("update successfully");
                    setSuccess(true);
                }
            })
    }

    //-------------------------- view cntact -------------------------- 

    useEffect(() => {
        fetch('https://quiet-castle-97214.herokuapp.com/contacts')
            .then(res => res.json())
            .then(data => {
                const d = data.filter(detail => detail._id === id);
                setUpdate(d[0])
            })
    }, []);

    const { email, name, phone } = update;

    return (
        <div className='edit-container'>
            <div className="mt-2">
                <h3>Update Contact</h3>
                {
                    update.name ?
                        <form className='react-hook-from' onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" defaultValue={name} placeholder='Name'  {...register("name",)} />
                            {errors.email && <span className='text-danger'>This field is required</span>}


                            <input type="email" defaultValue={email} placeholder='Email'  {...register("email",)} />
                            {errors.email && <span className='text-danger'>This field is required</span>}


                            <input type="number" defaultValue={phone} placeholder='Phone'  {...register("phone",)} />
                            {errors.email && <span className='text-danger'>This field is required</span>}

                            <input value="Update" type="submit" />
                        </form> : <p>Loeading</p>
                }
            </div>
        </div>
    );
};

export default Edit;