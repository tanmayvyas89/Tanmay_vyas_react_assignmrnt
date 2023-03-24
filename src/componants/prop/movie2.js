import React from "react";

function movie2() {
    return (
        <>
            <div className="col-md-3">
                <div className="card ms-3 h-100">
                    {/* <div className="card-header">
                            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfPemKBxZs8dFE4Z0Yib0i9fEiUVriLxqHj0JHsD6ICvSwLgEV" className="w-75 text-center" />
                        </div> */}
                    <div className="card-body p-2 g-3">
                        <h3>Movie Name: Master</h3>
                        <p>Description : An alcoholic professor is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.</p>
                    </div>
                    <div>
                        <button className="btn btn-primary m-4">More Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default movie2