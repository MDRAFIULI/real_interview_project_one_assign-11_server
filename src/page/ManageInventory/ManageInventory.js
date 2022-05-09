import React, { useEffect, useState } from 'react';
import './ManageInventory.css';
import InventoryComponent from '../InventoryComponent/InventoryComponent';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import '../Home/Inventories/Inventories.css';

const ManageInventory = () => {
    const navigate = useNavigate();
    const [inventories, setInventories] = useInventories([]);


    const handleDelete = id => {
        const url = `https://assignment-eleven-server.herokuapp.com/manageInventory/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remaining = inventories.filter(inventory => inventory._id !== id);
                setInventories(remaining);
                console.log(data)
            })
    }

    const navigateToAddItem = e => {
        navigate('/addItem')
    };
    return (
        <div id="inventories" className='container'>
            <div className="row">
                <h1 className='text-success text-center mt-5'>All Inventories Here</h1>
                <div className="inventories-container">
                    {
                        inventories.map(inventory => <InventoryComponent
                            key={inventory._id}
                            inventory={inventory}
                            handleDelete={handleDelete}
                        >
                        </InventoryComponent>)
                    }
                </div>
                <div className='Go-container'>
                    <button onClick={navigateToAddItem} className='btn btn-success Go'>Add Item</button>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;