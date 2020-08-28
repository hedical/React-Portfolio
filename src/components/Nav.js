import React from 'react'
import '../App';

const Nav = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
            <h1 id="logo" className="navbar-brand ml-3 mt-3 text-light">
                <a className="text-light" href="#top">{"/ /<"} </a>
            </h1>
            <ul className="navbar-nav ml-auto">
                <li className="text-light m-2"><a className="text-light" href="#projects">Projects</a></li>
            </ul>
        </nav >
    )
}

export default Nav
