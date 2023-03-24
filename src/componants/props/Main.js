import React, { useState } from "react";
import Mov1 from "./Mov1";
import Mov2 from "./Mov2";
import Mov3 from "./Mov3";
import { Movielist } from "./Movielist";
import Movie from './Movie'

function Main() {

    const [movieData, setMovieData] = useState(Movielist)

    const [selectMovie, setSelectMovie] = useState([])

    function addToWatch(singleMovie) {
        setSelectMovie([...selectMovie, singleMovie])

    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center mb-5 mt-3">Top 3 Movies</h1>
                    <div className="col-lg-8">
                        <div className="row">
                            {
                                movieData.map((item) => {
                                    const { id, image, moviename, description, link, } = item


                                    return <Movie
                                        key={id}
                                        moviename={moviename}
                                        description={description}
                                        link={link}
                                        image={image}
                                        addToWatch={addToWatch}

                                    />
                                })
                            }

                            {/* {
                        Movielist.map((item,index,array) => {
                            return <Movie />
                        })
                    } */}





                            {/* 1st => we create three another componants like (Mov1,Mov2,Mov3) and then we export those and import here using PROPS
                    <Mov1/>
                    <Mov2/>
                    <Mov3/>
                    */}

                            {/* 2nd => we change another componants data from main file using PROPS like this:
                    example:-
                        <Mov1 Moviename="Avengers - Age of Altron" />
                        <Mov2 Description= "i am the change" />
                        <Mov3 link= "i am also change" />


                    Original Data of Card Change
                        <Mov1 Moviename="Avengers - Age of Altron" />
                        <Mov2 Description="I am The Change Data Using PROPS" />
                        <Mov3 link="https://en.wikipedia.org/wiki/Spider-Man" />
                    */}




                            {/*Distructure data
                        <Movie moviename="Avengers 1" description="I am The Change Data Using PROPS 1" />
                        <Movie moviename="Avengers 2" description="I am The Change Data Using PROPS 2" />
                        <Movie moviename="Avengers 3" description="I am The Change Data Using PROPS 3" /> */}
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="list-group">
                            {
                                selectMovie.map((item, index) => {
                                    return (
                                        <li className="list-group-item" key={index}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Main