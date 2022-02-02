// import React, { useEffect, useState } from 'react';
// import { db } from "../Firebase/Firebase.config"
// import { collection, getDocs } from "firebase/firestore";

// import ContactList from '../Contact/ContactList/ContactList';
// const Database = () => {
//     const [users, setUsers] = useState([]);
//     const usersCollectionRef = collection(db, "users");
//     useEffect(() => {
//         const getUsers = async () => {
//             const data = await getDocs(usersCollectionRef);
//             setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//             console.log(users);
//         };
//         getUsers()
//     }, [])
//     return (
//         <div className='' >

//         </div>
//     );
// };

// export default Database;