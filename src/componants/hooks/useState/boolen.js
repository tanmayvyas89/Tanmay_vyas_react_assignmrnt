import { useState } from "react";



function Array() {

    const [prolist, setProList] = useState([
        "Toy",
        "Mobile",
        "Ac",
        "TV"
    ])

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h1>Item Name :- </h1>
                        {prolist.map((item, index, array) => {
                            return <h2>{item}</ h2>
                        })}



                    </div>
                </div>
            </div>

        </>
    )
}
export default Array