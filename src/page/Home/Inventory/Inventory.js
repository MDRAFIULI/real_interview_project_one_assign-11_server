import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';
const Inventory = ({ inventory }) => {
    const { _id, supplyer, name, img, description, price } = inventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='inventory'>
            <img className='w-100 inventory-img' src={img} alt="" />
            <h2>{name}</h2>
            <p>Supplyer: {supplyer}</p>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToInventoryDetail(_id)} className='btn btn-success'>stock update: {name}</button>
        </div>
    );
};

export default Inventory;