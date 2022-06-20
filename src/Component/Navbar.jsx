import React from "react";

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="/">SANDEEP KUMAR</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">                        
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#avtar">Avtar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;