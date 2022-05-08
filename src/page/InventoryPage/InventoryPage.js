import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './InventoryPage.css';
const InventoryPage = () => {
    const { id } = useParams();
    console.log(id);
    const [inventory, setInventory] = useState({});
    const { name, img, supplyer, price, description } = inventory;
    const url = `http://localhost:5000/inventory/${id}`;
    console.log(url);
    console.log(inventory);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, []);

    return (
        <div className='update-container'>
            <p>Inventory Id :{id}</p>
            <div className='update-card'>
                <img className='w-100 inventory-img' src={img} alt="" />
                <div className='ms-4'>
                    <h2>{name}</h2>
                    <p>Supplyer: {supplyer}</p>
                    <p>Price: {price}</p>
                    <p><small>{description}</small></p>
                </div>
                <button className='btn btn-success'>Deleverd</button>
            </div>
            <div className='stored-container'>
                <input className='stored' type="number" name="stored" id="" />
                <button className='btn btn-success'>Stored</button></div>
        </div>
    );
};

export default InventoryPage;