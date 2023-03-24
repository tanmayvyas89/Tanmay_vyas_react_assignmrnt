import React from "react";

function Mov1(props) {
    return (
        <>
            <div className="col-lg-4">
                <div className="card h-100">
                    <div className="card-header">
                        <h3>Movie name: {props.Moviename} </h3>
                    </div>
                    <div className="card-body">
                        <p><b>Description: </b> Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.</p>
                    </div>
                    <div className="card-footer">
                        <a href="https://en.wikipedia.org/wiki/The_Avengers_(2012_film)" className="btn btn-warning">Click Here</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mov1