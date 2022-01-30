import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import "./Login.css"
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hook/UseAuth';
import UseFirebase from '../Hook/UseFirebase';
import { Link } from 'react-router-dom';

const Login = () => {

    const [error, setError] = useState('')
    const history = useHistory();
    const location = useLocation();


    // -----------------------redirect ---------
    const redirect_uri = location.state?.from.pathname || "/contact"
    console.log(location.state);


    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const password = useRef({});


    const { singInWithGoogle, user, logInWithEmailAndPassword } = UseFirebase()

    const onSubmit = data => {
        logInWithEmailAndPassword(data.email, data.password)
        reset()
            .then(result => {
                history.push(redirect_uri)
            })
            .catch((error) => {
                setError(error.message)
            })
        console.log(data.email)
    };

    const handleGoogleLogin = () => {
        singInWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
            .catch((error) => {
                setError(error.message)
            })
    }


    return (
        <div>
            <h1 className='mt-5'>Please Login</h1>
            <form className='react-hook-from mt-5' onSubmit={handleSubmit(onSubmit)}>



                <input type="email" placeholder='Email'  {...register("email", { required: true })} />
                {errors.email && <span className='text-danger'>This field is required</span>}

                <input type="password" placeholder=' Password'  {...register("password", {
                    required: "You must specify a password",
                    minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters"
                    }
                })} />
                {errors.password && <p className='text-danger'>{errors.password.message}</p>}






                <br />

                <input type="submit" />
                <button className='btn-primary mt-2' onClick={handleGoogleLogin}  >Login with Google</button><br />
                <Link className='text-decoration-none' to="/register">New User? Register Now</Link>
                {
                    user.email ? <p className='text-primary'>login successfully</p> : <p className='text-danger'>Login failed</p>
                }
            </form>
        </div>
    );
};

export default Login;