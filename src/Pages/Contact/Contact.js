import React, { useEffect, useState } from 'react';
import { db } from "../Firebase/Firebase.config"

import { useForm } from "react-hook-form";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import "./Contact.css"

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Contact = () => {
    const usersCollectionRef = collection(db, "users");
    const [users, setUsers] = useState([]);
    const history = useHistory();
    const id = useParams();

    // start react hook from 
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        addDoc(usersCollectionRef, { name: data.name, email: data.email, phone: data.phone })
        alert("added successfully")
        reset()
    };
    console.log(watch("example"));

    //   react hook form 

    const updateUser = () => {
    }
    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc)
    }
    const viewSignalUser = () => {
    }
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log("thsi si data", data.docs);
        };
        getUsers()
    }, [])

    return (
        <div className='p-2'>

            <div className="">
                <input className='search-box' placeholder='Search by name' type="text" />
                <input type="submit" value="Search" name="" id="" />
            </div>
            <div className="  row">
                <div className="col-md-7 col">

                    <table className='table table-danger'>
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
                                users.map((user) =>
                                    <tr className='table-danger' key={user.id}>
                                        <td className="table-danger" scope='row'>1</td>
                                        <td className="table-danger">{user.name}</td>
                                        <td className="table-danger">{user.email}</td>
                                        <td className="table-danger">{user.phone}</td>

                                        <td className="table-danger">
                                            <Link to={`/update/${user.id}`}>
                                                <button title='edit' className='border-none btn  '>
                                                    <i
                                                        onClick={updateUser}
                                                        class="far fa-edit text-info  ">
                                                    </i>
                                                </button>
                                            </Link>
                                            <button onClick={deleteUser(user.id)} title='delete' className='btn  '>
                                                <i

                                                    className="far fa-trash-alt text-danger  ">

                                                </i>
                                            </button>
                                            <Link to={`/view/${user.id}`}>
                                                <button
                                                    onClick={viewSignalUser}
                                                    title='edit' className='border-none btn  '>
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
                </div>
                <div className="col-md-5">
                    <div className="mt-2">
                        <h3>Create a Contact</h3>
                        <form className='react-hook-from' onSubmit={handleSubmit(onSubmit)}>



                            <input type="text" placeholder='Name'  {...register("name", { required: true })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}


                            <input type="email" placeholder='Email'  {...register("email", { required: true })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}


                            <input type="number" placeholder='Phone'  {...register("phone", { required: true })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}




                            <input value="Save" type="submit" />
                        </form>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;