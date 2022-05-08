import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './InventoryPage.css';
const InventoryPage = () => {
    const { id } = useParams();
    return (
        <div>
            <p>Inventory for :{id}</p>
        </div>
    );
};

export default InventoryPage;