import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='container'>
            <h1>Ques of some answer:</h1>
            <br />
            <br />
            <h2>1. Different between js and node js:</h2>
            <h3>Java Script:</h3>
            <p>
                1.js holo high level , single threated, interpreted programming language.
                2. javascript shudu browser e run hoi.
                3. javascript client side e use hoi.
            </p>
            <h3>Node Js:</h3>
            <p>
                1. Node js holo java script runtime environment.
                2. node js er sahajje java script browser er baire-o cole.
                3. Nodejs server side e use hoi.
            </p>
            <br />
            <br />







            <h2>2. Different between SQL and NOSQL:</h2>
            <h3>SQL:</h3>
            <p>
                1.SQL HOLO RELATIONAL DATABASE MANAGEMENT SYSTEM .
                2. sql database static hoye thake.
                3. Sql vertically holo scalable.
            </p>
            <h3>NOSQL:</h3>
            <p>
                1. Nosql holo Non-relational ba distributed database.
                2. Nosql database daynamic hoye thake.
                3. Nosql horizentically holo scalable.
            </p>
            <br />
            <br />



            <h2>3. what is the purpose of jwt and how dose it work?:</h2>
            <p>
                .Jwt holo popular sucuring api . ja client e token toiri kre server er data k onno person theke secure krar purpose e use hoi.
                <br />
                Jwt je token create kre ta onno user er token er sathe differance toiri kre and ekti set of claims dharon kre.claim gulo token issue kari ke sonakto kore.jot token e 3 ta part : 1.header, 2.payload, 3.signature.
                Header token er type dharon kore.payload claim gulo contain kore.signeture token thik ache kina jacai kore.
            </p>
        </div>
    );
};

export default Blog;