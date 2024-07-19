import React, { useEffect, useState } from 'react'
import "./item.css"
import axios from 'axios'
import Genres from './Genres'

function Details(ele) {
    let [rate, setRate] = useState([])
    let ittem = ele.data.genres
    let [logo, setLogo] = useState([])


    useEffect(() => {
        getRate()
    }, [ele.type,ele.id])

    function getRate() {
        axios.get(`https://api.themoviedb.org/3/${ele.type}/${ele.id}/${ele.type == "movie" ? "release_dates" : "content_ratings"}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then((ress) => {
            const rating = ress.data.results.find(element => element.iso_3166_1 == "US");
            if (rating) {
                setRate(ele.type == "movie" ? rating.release_dates[0].certification : rating.rating);
            }
        })
        axios.get(`https://api.themoviedb.org/3/${ele.type}/${ele.id}/images?api_key=80db2c88f978a7c08fd8b402180ede6e`).then((res) => {
            const firstLogo = res.data.logos.find(element => element.iso_639_1 === "en");
            if (firstLogo) {
                setLogo(firstLogo.file_path);
            }
        });
    }
    return (
        <div className="backonly">
            <div className='details'>

                <img src={`https://image.tmdb.org/t/p/w500/${logo}`} alt="" />
                <div className='extra'>
                    <span className='year'>{ele.type == "movie" ? ele.data.release_date : ele.data.first_air_date}</span>
                    <span className='capitalize'>{ele.data.original_language}</span>
                    <span>{ele.type == "movie" ? parseInt(ele.data.runtime / 60) + "h " + ele.data.runtime % 60 + "m" : ele.data.number_of_episodes + " Episodes"}</span>
                    <span className='rate'>{rate}</span>
                </div>
                <div className="overview">{ele.data.overview}</div>
                <Genres type={ele.type} id={ele.id} />
            </div>
        </div>
    )
}

export default Details
