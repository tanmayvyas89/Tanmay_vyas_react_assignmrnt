import React, { useState } from "react"
function Main() {

    const [firstname, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [tableData, setTableData] = useState([])

    function formHandel(event) {
        event.preventDefault()

        const formData = {
            firstname: firstname,
            lastName,
            city,
        }

        setTableData([...tableData, formData]);
        setFirstName("")
        setLastName("")
        setCity("")


    }

    return (
        <>
            <div className="container">
                <div className="col-6 m-auto mt-5">
                    <form className="form-control">
                        <label>First Name:- </label>
                        <input type="text" className="mb-3" value={firstname} onChange={(event) => setFirstName(event.target.value)} /><br />
                        <label>Last Name:- </label>
                        <input type="text" className="mb-3" value={lastName} onChange={(event) => setLastName(event.target.value)} /><br />
                        <label>City:- </label>
                        <input type="text" className="mb-3" value={city} onChange={(event) => setCity(event.target.value)} /><br />
                        <button className="btn btn-primary" onClick={formHandel}>Submit</button>
                    </form>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <table className="table table-primary table-hover">
                            <thead className="">
                                <tr>
                                    <th>Sr no</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((item, index) => {
                                    const { firstname, lastName, city } = item;
                                    return (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <th>{firstname}</th>
                                            <th>{lastName}</th>
                                            <th>{city}</th>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main