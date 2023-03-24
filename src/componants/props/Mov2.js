import React from "react";

function Mov2(props) {
    return (
        <>
            <div className="col-lg-4">
                <div className="card h-100">
                    <div className="card-header">
                        <h3>Movie name: Superman </h3>
                    </div>
                    <div className="card-body">
                        <p><b>Description: </b> {props.Description}</p>
                    </div>
                    <div className="card-footer">
                        <a href="https://en.wikipedia.org/wiki/Superman" className="btn btn-warning">Click Here</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mov2