import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import OnCard from './OnCard'
import './movieSec.css'
import Separator from '../Home/Separator'
function MovieSec(type) {
    let [movies, setMovies] = useState([])
    let [popular, setPopular] = useState([])
    let [upcoming, setUpcoming] = useState([])
    useEffect(() => {        
        getMovies()
        document.title = `Plotwist | ${details.title || details.name}`;
    }, [])

    function getMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(res => {
            setMovies(res.data.results.slice(0,12))
        })
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(res => {
            setPopular(res.data.results.slice(0,12))
        })
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(res => {
            setUpcoming(res.data.results.slice(0,12))
        })
    }

    console.log(movies)
    return (
        <>
            <div className="moviesecc">
                <h1 className='trendsss trendssss'>Top Rated</h1>
                <OnCard movies={movies} />
                <Separator />
                <h1 className='trendsss trendssss'>Popular Now</h1>
                <OnCard movies={popular} />
                <Separator />
                <h1 className='trendsss trendssss'>Upcoming</h1>
                <OnCard movies={upcoming} />
            </div>
        </>
    )
}

export default MovieSec