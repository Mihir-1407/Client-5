import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <div className="container">
                <div>
                    <span><Link to="/">Logo</Link></span>
                    <span><Link to="/rooms">Rooms</Link></span>
                    <span><Link to="/about">About</Link></span>
                    <span><Link to="/contact">Contact</Link></span>
                </div>
                <div className='bookNow'>
                    <span><a href="/">Book Now</a></span>
                </div>
            </div>
        </>
    )
}

export default Navbar