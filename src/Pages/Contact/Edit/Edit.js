import React from 'react';
import { useForm } from "react-hook-form";
const Edit = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        reset()
    };


    console.log(watch("example"));
    return (
        <div>
            <div className="mt-2">
                <h3>Update Contact</h3>
                <form className='react-hook-from' onSubmit={handleSubmit(onSubmit)}>



                    <input type="text" placeholder='Name'  {...register("name", { required: true })} />
                    {errors.email && <span className='text-danger'>This field is required</span>}


                    <input type="email" placeholder='Email'  {...register("email", { required: true })} />
                    {errors.email && <span className='text-danger'>This field is required</span>}


                    <input type="number" placeholder='Phone'  {...register("phone", { required: true })} />
                    {errors.email && <span className='text-danger'>This field is required</span>}




                    <input value="Update" type="submit" />
                </form>

            </div>
        </div>
    );
};

export default Edit;