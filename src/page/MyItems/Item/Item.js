import React from 'react';
import '../../Home/Inventory/Inventory.css';
const Item = ({ item }) => {
    const { _id, supplyer, name, img, description, price } = item;
    return (
        <div>
            <div className='inventory'>
                <img className='w-100 inventory-img' src={img} alt="" />
                <h2>{name}</h2>
                <p>Supplyer: {supplyer}</p>
                <p>Price: {price}</p>
                <p><small>{description}</small></p>
            </div>
        </div>
    );
};

export default Item;