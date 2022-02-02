import React, { useEffect, useState } from 'react';
import { db } from "../Firebase/Firebase.config"
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import "./Contact.css"
import ContactList from './ContactList/ContactList';

const Contact = () => {
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPhone, setNewPhone] = useState(0);
    const [error, setError] = useState("")
    const [users, setUsers] = useState([]);


    const usersCollectionRef = collection(db, "users");
    const createUser = async () => {
        if (!newName || !newPhone || !newEmail) {
            setError("Please provide value in each input")
        }
        else {
            await addDoc(usersCollectionRef, { name: newName, email: newEmail, phone: newPhone })
            alert("added successfully")


        }


    }
    const Update = () => {

    }
    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc)
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(users);
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
                    {
                        users.map((user) =>
                            <div className="contact-list ">
                                <p className='email'>Name: {user.name}</p>
                                <p className='email'>Email: {user.email}</p>
                                <p className='email'>Phone: {user.phone}</p>
                                <div className="d-flex p-2 me-0">
                                    <button onClick={() => { deleteUser(user.id) }} className='btn ms-2 md-ms-2 lg-ms-2 xs-ms-0 btn-danger'>Delete</button>
                                    <button className='btn md-ms-2 lg-ms-2 btn-primary'>Update</button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="col-md-5">
                    <div className="mt-2">
                        <p className='text-danger'>{error}</p>

                        <input onChange={(e) => { setNewName(e.target.value) }} placeholder='Name' type="text" />
                        <br />
                        <input onChange={(e) => { setNewEmail(e.target.value) }} placeholder='Email' type="email" />
                        <br />
                        <input onChange={(e) => { setNewPhone(e.target.value) }} placeholder='Phone' type="number" />
                        <br />

                        <button onClick={createUser}>Save</button>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;