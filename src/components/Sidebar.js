import React from 'react'
import '../App';

const Sidebar = () => {

    let asideStyle = {
        position: "fixed",
        bottom: "5px",
        margin: "0",
    }
    return (
        <aside className="social m-3 mr-3 col-1" style={asideStyle}>
            <li>
                <a href="https://github.com/hedical" target="_blank">
                    <i className="ml-3 fab fa-github" aria-hidden="true"></i>
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/in/h%C3%A9di-calabrese/" target="_blank">
                    <i className="ml-3 fab fa-linkedin square" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="https://medium.com/@calabrese.hedi" target="_blank">
                    <i className="ml-3 fab fa-medium" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="./assets/CV_HC_2020.pdf" target="_blank">
                    <i className="ml-3 fab fa fa-file" aria-hidden="true"></i>
                </a>
            </li>
        </aside>
    )
}

export default Sidebar
