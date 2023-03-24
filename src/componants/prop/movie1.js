import React from "react";

function movie1(props) {
    return (
        <>
            <div className="col-md-3">
                <div className="card ms-3 h-100">
                    {/* <div className="card-header">
                                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQF8Vs-iUxtt_HdleBlTAakLb-MHGLVYlCQ8_VhFFoNvtEglITi" className="w-100 text-center" />
                            </div> */}
                    <div className="card-body p-2">
                        <h3>Movie Name: {props.MovieName}</h3>
                        <p>Description :{props.Description} </p>

                    </div>
                    <div>
                        <a href={props.link} target="_blank" className="btn btn-primary m-4">More Details</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default movie1