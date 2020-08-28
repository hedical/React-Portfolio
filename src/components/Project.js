import React from 'react'
import '../App';

const Project = (props) => {

    const imgStyle = {
        height: "250px",
        width: "100%",
        objectFit: "cover",
    }

    return (
        <article className="display row m-2">
            <img
                className="card-img col-lg-5 col-md-12 col-xs-12 ml-2 mt-2 mb-2"
                src={props.projectImageSrc}
                alt={props.projectTitle}
                style={imgStyle}
            />
            <div className="text col-lg-6 col-md-12 col-xs-12 mt-2 mb-2">
                <h4 className="css-gl191r fadeup-enter-done" >{props.projectTitle}</h4>
                {props.projectDemo ? <a className="mr-2" href={props.projectDemo} target="_blank"><i className="fa fa-link" aria-hidden="true"></i></a> : ""}
                {props.projectGithub ? <a href={props.projectGithub} target="_blank"><i className="fab fa-git-square" aria-hidden="true"></i></a> : ""}
                <ul className=" p-0 mt-2">
                    <li>
                        {props.projectSpan.map((tag) => (
                            < span className="mr-1 badge badge-pill text-dark" >{tag}</span>
                        ))})
                    </li>
                </ul>
                <h6 className="text-light">{props.projectDescription}</h6>
            </div>
        </article >
    )
}

export default Project
