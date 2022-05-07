import React from 'react';
import './Inventory.css';
const Inventory = ({ inventory }) => {
    const { _id, name, img, description, price } = inventory;
    /* const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    } */
    return (
        <div className='inventory'>
            <img className='w-100 inventory-img' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button /* onClick={() => navigateToServiceDetail(_id)}  */ className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Inventory;