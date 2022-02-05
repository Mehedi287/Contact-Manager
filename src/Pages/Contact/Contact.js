import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import "./Contact.css"
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import useAuth from '../Hook/UseAuth';
// import UseFirebase from '../Hook/UseFirebase';
import UseAuth from '../Hook/UseAuth';

const Contact = () => {
    const [contact, setContact] = useState([])
    const [searchName, setSearchName] = useState("");
    const [result, setResult] = useState([])
    const { user } = UseAuth();
    const deleteUser = (id) => {
        if (window.confirm("you want to delete?")) {

            axios.delete(`http://localhost:5000/contacts/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        const remain = contact.filter(order => order._id !== id);
                        setContact(remain)
                        alert("delete successfully")
                    }
                })
        }

    }

    // console.log("result = ", result);
    const updateUser = () => { };
    const viewSignalUser = () => { };
    // console.log("from contsct", contact.forEach(f)=>{f.name});


    useEffect(() => {
        const url = `http://localhost:5000/contacts/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setContact(data))
    }, [contact])
    // console.log("ami email form contats", user.email);

    // // start react hook from 
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        data.mail = user.email;
        axios.post("http://localhost:5000/contacts", data)
            .then(res => {

                if (res.data.insertedId) {
                    alert(" Add successfully");

                }
                reset();
            })

    };
    const handleOnChange = (e) => {
        // e.preventDefault();
        const value = e.target.value;
        e.preventDefault()

        setSearchName(value);



    }
    // console.log();
    const search = () => {
        const result = contact.filter(function (f) { return f.name == searchName.toString() })
        console.log("search result", result, "name", searchName);
        setResult(result)
    };
    return (
        <div className='p-2 container contact'>

            <div className="m-4">

                <input type="text" className='border rounded' onChange={handleOnChange} name="" placeholder='Search By Name' id="" />
                <input type="submit" value="Search" onClick={search} name="" placeholder='Search By Name' id="" />


            </div>


            {

                result.length === 0 && searchName !== "" && <p>no result found </p>
            }

            {result.map((res) =>
                <>

                    <div className='search-result' key={res.id}>
                        <p>Name: {res.name}</p>
                        <p>Phone: {res.phone}</p>
                        <p>Email: {res.email}</p>
                    </div>


                </>


            )}

            <div className="  row ms-5">
                <div className="col-md-7 col ">
                    <h3 className='text-secondary'>Contact List</h3>

                    {
                        contact.length == 0 ? <h4 className='text-warning'>No contacts added yet. Create one!</h4>
                            :
                            <table className='table table-danger ms-2'>
                                <thead>
                                    <tr className='table-danger'>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>



                                    {
                                        contact.map((user) =>
                                            <tr className='table-danger' key={user.id}>
                                                <td className="table-danger" scope='row'>1</td>
                                                <td className="table-danger">{user.name}</td>
                                                <td className="table-danger">{user.email}</td>
                                                <td className="table-danger">{user.phone}</td>

                                                <td className="table-danger">
                                                    <Link to={`/update/${user._id}`}>
                                                        <button title='edit' className='border-none btn  '>
                                                            <i
                                                                onClick={() => { updateUser(user._id) }}
                                                                class="far fa-edit text-info  ">
                                                            </i>
                                                        </button>
                                                    </Link>
                                                    <button onClick={() => { deleteUser(user._id) }} title='delete' className='btn  '>
                                                        <i

                                                            className="far fa-trash-alt text-danger  ">

                                                        </i>
                                                    </button>
                                                    <Link to={`/view/${user._id}`}>
                                                        <button
                                                            onClick={viewSignalUser}
                                                            title='view' className='border-none btn  '>
                                                            <i

                                                                class="far fa-eye text-info  ">
                                                            </i>
                                                        </button>
                                                    </Link>

                                                </td>

                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                    }

                </div>






                <div className="col-md-5">
                    <div className="mt-2">
                        <h3 className='text-secondary'>Add To Contact List</h3>
                        <form className='react-hook-from'
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <input type="text" placeholder='Name'
                                {...register("name", { required: true })}
                            />
                            {errors.email && <span className='text-danger'>This field is required</span>}


                            <input type="email" placeholder='Email'  {...register("email", { required: true })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}


                            <input type="number" placeholder='Phone'  {...register("phone", { required: true })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}

                            <input value="Add" type="submit" />
                        </form>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;