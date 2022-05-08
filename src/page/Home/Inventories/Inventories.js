import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/manageInventory')
            .then(res => res.json())
            .then(data => {
                const sixItems = data.slice(0, 6);
                setInventories(sixItems)
            });
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/manageInventory/${id}`
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

    const navigateToManageInventory = e => {
        navigate('/manageInventory')
    };

    return (
        <div id="inventories" className='container'>
            <div className="row">
                <h1 className='text-success text-center mt-5'> Inventories</h1>
                <div className="inventories-container">
                    {
                        inventories.map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                            handleDelete={handleDelete}
                        >
                        </Inventory>)
                    }
                </div>
                <div className='Go-container'>
                    <button onClick={navigateToManageInventory} className='btn btn-success Go'>Go ManageInventory</button>
                </div>
            </div>
        </div>
    );
};

export default Inventories;