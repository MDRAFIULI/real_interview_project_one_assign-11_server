import React, { useEffect, useState } from 'react';
import './ManageInventory.css';
import InventoryComponent from '../InventoryComponent/InventoryComponent';

const ManageInventory = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/manageInventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])

    return (
        <div id="inventories" className='container'>
            <div className="row">
                <h1 className='text-success text-center mt-5'> Inventories</h1>
                <div className="inventories-container">
                    {
                        inventories.map(inventory => <InventoryComponent
                            key={inventory._id}
                            inventory={inventory}
                        >
                        </InventoryComponent>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;