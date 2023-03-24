import React, { useState } from "react";

function Movie(props) {

    const { image, moviename, description, link, addToWatch } = props



    return (
        <>
            <div className="col-lg-4">
                <div className="card h-100">
                    <div className="card-header">
                        <img src={image} className="w-50" />
                    </div>
                    <div className="card-header">
                        <h3> Movie name: {moviename}</h3>
                    </div>
                    <div className="card-body">
                        <p><b>Description: </b> {description}</p>
                    </div>
                    <div className="card-footer">
                        <a href={link} className="btn btn-warning">Click Here</a>
                        <button className="btn btn-primary ms-3" onClick={() => addToWatch(moviename, image)}>Watch Movie</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Movie