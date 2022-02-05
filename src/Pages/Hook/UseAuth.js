import React from 'react';
import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider";
const UseAuth = () => {
    return (
        useContext(AuthContext)
    );
};

export default UseAuth;




// const useAuth = () => {
//
// }
// export default useAuth;