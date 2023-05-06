import { useEffect, useState } from "react"

function Main() {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://dummyjson.com/carts`)
            .then((resp) => resp.json())
            .then((data) => { setProducts(data); })
            .catch((error) => { console.log(error); })
    }, [])

    console.log(products)

    if (isLoading) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        {
                            isLoading.map((item, index) => {

                            })
                        }
                    </div>
                </div>
            </>
        )
    }


    return (
        <>
            <div className="row justify-content-center mt-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}
export default Main