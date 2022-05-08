import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://assignment-eleven-server.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])

    return (
        <div id="inventories" className='container'>
            <div className="row">
                <h1 className='text-success text-center mt-5'> Inventories</h1>
                <div className="inventories-container">
                    {
                        inventories.map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        >
                        </Inventory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventories;