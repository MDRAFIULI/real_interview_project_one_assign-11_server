import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryComponent.css';
import '../../page/Home/Inventory/Inventory.css';

const InventoryComponent = ({ inventory, handleDelete }) => {
    const { _id, supplyer, name, img, description, price } = inventory;
    const navigate = useNavigate();

    const navigateToInventoryUpdate = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='inventory'>
            <img className='w-100 inventory-img' src={img} alt="" />
            <h2>{name}</h2>
            <p>Supplyer: {supplyer}</p>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToInventoryUpdate(_id)} className='btn btn-success'>stock update: {name}</button>
            <br />
            <div className='delete-container'>
                <span>press for delete:</span><button className='delete-btn' onClick={() => handleDelete(_id)}> X</button>
            </div>
        </div>
    );
};

export default InventoryComponent;