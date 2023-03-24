import { useState } from "react"

function main_Use() {

    // String
    const [ownerName, setOwnerName] = useState("Tanmay")

    // object
    const [product, setProduct] = useState({
        productname: 'Realme 10 pro ',
        description: '12GB ram & 256GB rom',
        price: 24999
    })
    // Number
    const [Number, setNumber] = useState(0)

    function incerment() {
        setNumber(Number + 1)
    }

    function Decrement() {
        // with ternary operator
        Number == 0 ? setNumber(Number) : setNumber(Number - 1)

        // use of if else

        // if (Number == 0) {
        //     setNumber(Number)
        // } else {
        //     setNumber(Number - 1)
        // }
    }


    // Array

    const [Array, setArray] = useState([
        "Mobile",
        "AC",
        "TV",
        "Tablet"
    ])

    // boolen Add & Remove
    const [add_remove, setAdd_remove] = useState(false)

    function auth() {
        setAdd_remove(!add_remove)
    }
    // Image show hide
    const [image, showImage] = useState(false)


    // theme change
    const [darkmode, setDarkMode] = useState(false)

    // function darkMode() {
    //     setDarkMode(!darkmode)
    // }

    return (
        <>
            <div className="row">
                <div className="col-10">

                    <div className="card">
                        <div className={` ${darkmode ? 'bg-dark text-white' : 'bg-light'}`}>
                            <div className="card-header w-25">
                                {/* Boolean */}

                                {

                                    image ? <img src="https://www.shutterstock.com/image-vector/hipster-crown-icon-beard-mustache-260nw-718564288.jpg" /> : null
                                }


                            </div>
                            <button className={`btn ${image ? 'btn-primary' : 'btn-danger'} text-white w-25`} onClick={() => showImage(!image)}>
                                {
                                    image ? "Hide" : "Show"
                                }
                            </button>
                            <div className="card-body">
                                {/* string */}
                                <h1>Owner Name : {ownerName} </h1>
                                <hr />
                                {/* from object */}
                                <h2>Product Name : {product.productname} </h2>
                                <h5>Description : {product.description}</h5>
                                <h4>Price : {product.price} </h4>
                                <hr />
                                {/* Number increment/decrement */}
                                <div>
                                    <p>Quantity:{Number} </p>
                                    <button onClick={incerment}>+</button>
                                    <button onClick={Decrement}>-</button>
                                </div>
                                <hr />
                                {/* Array */}
                                <div>
                                    {/* <p>main:{Array.map((item, index, array) => {
                            return <h3>{`${item}`}</h3>
                        })}</p> */}
                                    <p>Pro1:{Array[0]} </p>
                                    <p>Pro2:{Array[1]} </p>
                                    <p>Pro3:{Array[2]} </p>
                                    <p>Pro4:{Array[3]} </p>
                                </div>
                                <hr />
                                <div className="card-footer">
                                    {/* boolen */}
                                    <button className={`btn ${add_remove ? "btn-danger" : "btn-primary"}`} onClick={auth}>
                                        {
                                            add_remove ? "REMOVE" : "ADD"
                                        }
                                    </button>
                                    <hr />
                                </div>
                            </div>
                            <div className="col-2">
                                <button className={`${darkmode ? 'bg-primary text-white' : 'bg-dark text-white'} `} onClick={() => setDarkMode(!darkmode)}>
                                    {
                                        darkmode ? 'Light-Mode' : 'Dark-Mode'
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default main_Use