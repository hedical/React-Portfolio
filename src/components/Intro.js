import React from 'react'
import '../App';

const Intro = () => {
    return (
        <section className="ml-5 mr-5 mt-5 presentation col-10 content-center">
            <h5 className="text-light">Hi, I'm </h5>
            <h1 className="name text-light">Hedi Calabrese </h1>
            <h2 className="css-gl191r fadeup-enter-done" style={{ transitionDelay: "300ms" }}>I'm a Full stack developer student at UC Berkeley</h2>

            <li>
                <span className="mr-1 badge badge-pill text-dark">Bootstrap</span>
                <span className="mr-1 badge badge-pill text-dark">Materialize</span>
                <span className="mr-1 badge badge-pill text-dark">JavaScript</span>
                <span className="mr-1 badge badge-pill text-dark">jQuery</span>
                <span className="mr-1 badge badge-pill text-dark">Mysql</span>
                <span className="mr-1 badge badge-pill text-dark">MongoDB</span>
                <span className="mr-1 badge badge-pill text-dark">Mongoose</span>
                <span className="mr-1 badge badge-pill text-dark">Node js</span>
                <span className="mr-1 badge badge-pill text-dark">HTML 5</span>
                <span className="mr-1 badge badge-pill text-dark">CSS</span>
            </li>

            <h4 className="mt-2">I am also working as a Business Analyst for an AEC Company based in Europe</h4>

            <li>
                <span className="mr-1 badge badge-pill badge-light text-dark">Strategy</span>
                <span className="mr-1 badge badge-pill badge-light text-dark">Analyst</span>
                <span className="mr-1 badge badge-pill badge-light text-dark">AEC technologies</span>
                <span className="mr-1 badge badge-pill badge-light text-dark">3D concrete printing</span>
                <span className="mr-1 badge badge-pill badge-light text-dark">Construction Engineering</span>
                <span className="mr-1 badge badge-pill badge-light text-dark">Innovation</span>
            </li>

            {/* <div className="social m-3" >
                <li><i id="down" className="fas fa-chevron-circle-down" aria-hidden="true"></i></li>
                <li><i id="up" className="fas fa-chevron-circle-up" aria-hidden="true"></i></li>
            </div> */}
        </section >
    )
}

export default Intro
