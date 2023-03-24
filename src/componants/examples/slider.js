let Css = {
    height: '500px',
    objectFit: 'cover'
}



function Slider() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://wallpaperaccess.com/full/187161.jpg" className="d-block w-100" alt="..." style={Css} />
                </div>
                <div className="carousel-item">
                    <img src="https://images3.alphacoders.com/276/276565.jpg" className="d-block w-100" alt="..." style={Css} />
                </div>
                <div className="carousel-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpHSSEzYjYrg-HpaGbNjdZtfkYkXtEK4FE1xjPSpZQ19vtiuQcfjERApFKFMlM556tWdE&usqp=CAU" className="d-block w-100" alt="..." style={Css} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider