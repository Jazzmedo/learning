import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../Season/season.css'


function NowPlaying(ele) {
    let [data, setData] = useState([])

    function getData() {
        axios.get(`https://api.themoviedb.org/3/${ele.type}/${ele.query}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then((res) => {
            setData(res.data.results.slice(0, 8))
        })
    }

    useEffect(() => {
        getData()

    }, [])

    // console.log(ele.query)
    return (
        <>
            <h1 className='trendsss trendssss'>{ele.query == "on_the_air" ? "Airing Now TV Shows" : "Now Playing Movies"}</h1>
            <div className="cardssss">
                {data.map(item => (
                    <Link className="oncarddd" to={`/${ele.type}/${item.id}`}>
                        {/* {console.log(item)} */}
                        <img className="posterrrr" src={item.backdrop_path ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` : require(`../Season/asdfs.jpg`)} />
                        <img className='numberepp' src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : `https://imgur.com/IqNlhr9.jpeg`} />
                        <div className="voteepp">{parseInt(item.vote_average * 10)}%</div>
                        <div className="episdetss">
                            <h5 className='epnammma fsdads'></h5>
                            <div className="septer"></div>
                            <div className="detsdetss">
                                <h6 className='nameeeee'>{item.name || item.title} ({ele.type == "movie" ? item.release_date && item.release_date.split("-")[0] : item.first_air_date && item.first_air_date.split("-")[0]})</h6>
                            </div>
                        </div>
                    </Link>
                ))}
            </div >
        </>
    )
}

export default NowPlaying