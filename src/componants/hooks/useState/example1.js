import { useState } from "react"

function Example() {

    const [isShowing, setIsShowing] = useState(true)

    const [showData, setShowData] = useState({
        Name: "Realme 10 Pro Plus 128 GB",
        Description: "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB, 17.07 cm(6.72 inch) Full HD+ Display, 108MP + 2MP | 16MP Front Camera, 5000 mAh Battery, Qualcomm Snapdragon 695 5G Processor"
    }
    )


    function Show() {
        setIsShowing(false)
    }


    return (
        <>
            <div className="card">
                <div className="card-header">
                    {isShowing ? (<img src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/v/j/h/-original-imagkp8fvenrrkth.jpeg?q=70" className="w-25" />) : null}

                </div>
                <div className="card-body">
                    <h3>Product Name :{showData.Name} </h3>
                    <p>Description :{showData.Description} </p>
                    <button className='btn btn-primary mb-3' onClick={() => setIsShowing(true)}>Show Image</button>

                    <button className="btn btn-warning mb-3 ms-3" onClick={() => setIsShowing(false)}>hide Image</button>

                    <button className="btn btn-warning mb-3 ms-3" onClick={() => setIsShowing(!isShowing)}>Show/hide Image</button>

                </div>
            </div>
        </>
    )
}
export default Example