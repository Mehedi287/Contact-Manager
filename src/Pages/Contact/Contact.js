import React, { useEffect, useState } from 'react';
import { db } from "../Firebase/Firebase.config"
import { collection, getDocs } from "firebase/firestore";

import ContactList from './ContactList/ContactList';

const Contact = () => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(users);
        };
        getUsers()
    }, [])
    return (
        <div className='mt-5'>
            {
                users.map((user) =>
                    <ContactList className="" key={user.id} user={user}></ContactList>
                )
            }
        </div>
    );
};

export default Contact;