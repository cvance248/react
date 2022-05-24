import React from 'react';
import {Link} from 'react-router-dom'
import './navigation.css'
import Login from '../components/Login.js'

function Navigation () {


    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <Link to='.New.js'>New</Link>
                <Link to='login' element={<Login />}>Login</Link>
            </ul>
        </nav>
    )
}

export default Navigation