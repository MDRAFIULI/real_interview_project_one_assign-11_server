import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSection from '../../Home/ExtraSection/ExtraSection';
import './Home.css';
import Inventories from '../Inventories/Inventories';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;