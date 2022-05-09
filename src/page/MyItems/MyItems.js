import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Item from './Item/Item';
import './MyItems.css'
const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    console.log(user);
    const navigate = useNavigate();
    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            const url = `https://assignment-eleven-server.herokuapp.com/myItems?email=${email}`;
            console.log(url);


            try {

                fetch(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accesstoken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        setMyItems(data)
                        console.log(data);
                    })

            }
            catch (error) {
                console.log(error)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }


            /* fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accesstoken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setMyItems(data)
                    console.log(data);
                }) */

            /* try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accesstoken')}`
                    }
                });
                fetch(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accesstoken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        setMyItems(data)
                        console.log(data);
                    })

            }
            catch (error) {
                console.log(error)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            } */
        }
        getMyItems();
    }, [user]);

    const navigateToAddItem = e => {
        navigate('/addItem')
    };
    return (
        <div className="row">
            <h1 className='text-success text-center mt-5'>All My Items Is Here</h1>
            <div className="inventories-container">
                {
                    myItems.map(item => <Item item={item}
                        _id={item._id}
                    ></Item>)
                }
            </div>
            <div className='Go-container'>
                <button onClick={navigateToAddItem} className='btn btn-success Go'>Add Item</button>
            </div>
        </div>
    );
};

export default MyItems;