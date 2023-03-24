import { useState } from "react"


function Mains() {
    //string
    const [productName, setProductName] = useState("Tanmay")

    //object

    const [object, setObject] = useState(
        {
            firstname: "Tanmay",
            Birthyear: 1996,
            Hobby: "Cricket"
        }
    )


    function changevalue() {
        setObject({
            ...object,
            firstname: "Master"

        })
    }



    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <div>
                    <img src="https://i.pinimg.com/736x/0d/5a/8d/0d5a8d46daa434c84aa4c6ed29656ef7.jpg" style={{ height: 350, width: "18rem" }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h5 className="card-text">Product Name : {productName} </h5>
                    <a href="#" className="btn btn-primary" onClick={() => setProductName("Vyas")}>Change Name</a>
                </div>
                <br />
                <br />
                <div className="card-body">
                    <h5 className="card-title">FirstName:{object.firstname} </h5>
                    <h5 className="card-text">Birthyear : {object.Birthyear} </h5>
                    <h5 className="card-text">Hobby : {object.Hobby} </h5>
                    <button className="btn btn-primary" onClick={() => changevalue()}>Click Here</button>
                </div>
            </div>
        </>

    )
}

export default Mains