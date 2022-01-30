import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import "./Login.css"
import useAuth from '../Hook/UseAuth';
import UseFirebase from '../Hook/UseFirebase';

const Login = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const password = useRef({});
    const { singInWithGoogle, logInWithEmailAndPassword } = UseFirebase()
    const onSubmit = data => {
        logInWithEmailAndPassword(data.email, data.password);
        reset();
        console.log(data.email)
    };
    const handleGoogleLogin = () => {
        singInWithGoogle();
    }

    return (
        <div>
            <h1 className='mt-5'>Please Login</h1>
            <form className='react-hook-from mt-5' onSubmit={handleSubmit(onSubmit)}>

                <input type="text" required placeholder='Full Name' {...register("name",
                    { pattern: /^[A-Za-z]+$/i }
                )} />
                {errors.name && <span className='text-danger'> Only Letters</span>}

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
                <button className='btn-primary mt-2' onClick={handleGoogleLogin}  >Login with Google</button>
            </form>
        </div>
    );
};

export default Login;