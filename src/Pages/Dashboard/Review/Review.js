import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h4>Review</h4>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}

                <input placeholder='Rating' type='number' {...register("review", { required: true })} />
                {errors.review && <span>This field is required</span>}

                <input type="file" />


                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;