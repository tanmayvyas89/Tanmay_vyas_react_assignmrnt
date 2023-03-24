import React from "react";

function Mov3(props) {
    return (
        <>
            <div className="col-lg-4">
                <div className="card h-100">
                    <div className="card-header">
                        <h3>Movie name: Batman </h3>
                    </div>
                    <div className="card-body">
                        <p><b>Description: </b> Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939</p>
                    </div>
                    <div className="card-footer">
                        <a href={props.link} className="btn btn-warning">Click Here</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mov3