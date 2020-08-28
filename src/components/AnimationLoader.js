import React from 'react'

const AnimationLoader = (props) => {
    return (
        props.hidden ? <></> :
            <div className="animation" hidden={props.hidden}>
                <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div>
            </div>
    )
}

export default AnimationLoader
