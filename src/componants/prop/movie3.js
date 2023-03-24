import React from "react";

function movie3() {
    return (
        <>
            <div className="col-md-3">
                <div className="card ms-3 h-100">
                    {/* <div className="card-header">
                                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQF8Vs-iUxtt_HdleBlTAakLb-MHGLVYlCQ8_VhFFoNvtEglITi" className="w-100 text-center" />
                            </div> */}
                    <div className="card-body p-2">
                        <h3>Movie Name: The Avengers</h3>
                        <p>Description : The Avengers are a team of fictional superheroes and the protagonists of the Marvel Cinematic Universe (MCU) media franchise, based on the Marvel Comics.</p>
                    </div>
                    <div>
                        <button className="btn btn-primary m-4">More Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default movie3