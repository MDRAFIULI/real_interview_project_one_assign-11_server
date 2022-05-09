import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        const url = `https://assignment-eleven-server.herokuapp.com/manageInventory`
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))

    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Add A Inventory Item</h2>
            <form className='d-flex flex-column add-form' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='name' {...register("name")} />
                <textarea className='mb-3' placeholder='description' {...register("description")} />
                <input className='mb-3' placeholder='price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Photo url' type="text" {...register("img")} />
                <input className='mb-3' placeholder='supplyer' type="text" {...register("supplyer")} />
                <input className='mb-3' value={user?.email} placeholder='email' type="email" {...register("email")} />
                <input className='bg-success add-submit' type="submit" value='add Item' />
            </form>
        </div>
    );
};

export default AddItem;