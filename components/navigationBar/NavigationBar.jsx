'use client'
import React from 'react'
// import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa"
import { FaBars } from "react-icons/fa"
import "./NavigationBar.css"
import { useRef } from 'react';
import { IoCartOutline } from "react-icons/io5";


const NavigationBar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };


    return (
        <div className="nav_container">

            <header>
                <div className="wrapper">

                    <a to="/">
                        adestores
                    </a>

                    <nav ref={navRef}>
                        <a className="anchor" to="/about">HOME</a>
                        <a className="anchor" to="/about">PRODUCTS</a>
                        <a className="anchor" to="/about">
                            <IoCartOutline
                            className='cart-icon'
                                width={200}
                                height={200}
                            />
                        </a>

                        {/* mobile close btn */}
                        <button
                            className="nav-btn nav-close-btn"
                            onClick={showNavbar}
                        >
                            <FaTimes />
                        </button>
                        {/* mobile close btn */}
                    </nav>

                    <button className="nav-btn"
                        onClick={showNavbar}
                    >
                        <FaBars />
                    </button>
                </div>

            </header>

        </div>
    )
}

export default NavigationBar