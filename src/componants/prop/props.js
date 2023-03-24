import React, { useState } from "react"
import Movie1 from "./movie1"
import Movie2 from "./movie2"
import Movie3 from "./movie3"
import Movie4 from "./movie4"
import { movieList } from "./movieList"


function Movie() {

    const [movieData, setMovieData] = useState(movieList)




    return (
        <>
            <div className="container">
                <h3 className="text-center my-4">Top 5 Movies</h3>
                <div className="row">
                    {
                        movieData.map((item) => {
                            const { id, moviename, link, description } = item;

                            return (
                                <Movie
                                    key={id}
                                    moviename={moviename}
                                    description={description}
                                    link={link} />
                            )
                        })
                    }
                    {/* <Movie1 MovieName="Kantara" Description="Hello i am Movie 1" link="https://en.wikipedia.org/wiki/Kantara_(film)" />
                    <Movie2 />
                    <Movie3 />
                    <Movie4 /> */}
                    {/* <div className="card-header">
                                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQF8Vs-iUxtt_HdleBlTAakLb-MHGLVYlCQ8_VhFFoNvtEglITi" className="w-100 text-center" />
                            </div>
                            <div className="card-body p-2">
                                <h3>Movie Name: Kantara</h3>
                                <p>Description : When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice.</p>
                            </div>
                            <div>
                                <button className="btn btn-primary m-4">More Details</button>
                            </div> */}
                </div>
            </div>

        </>
    )
}
export default Movie