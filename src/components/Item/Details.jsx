import React, { useEffect, useState,useContext } from 'react'
import { DetailsContext } from '../context/DetailsContextProvider'
import "./item.css"
import axios from 'axios'
import Genres from './Genres'

function Details() {
    let [rate, setRate] = useState([])
    let {details,id,type,imdb,logo,setLogo} = useContext(DetailsContext)


    useEffect(() => {
        getRate()
    }, [type,id,imdb])

    function getRate() {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}/${type == "movie" ? "release_dates" : "content_ratings"}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then((ress) => {
            const rating = ress.data.results.find(element => element.iso_3166_1 == "US");
            if (rating) {
                setRate(type == "movie" ? rating.release_dates[0].certification : rating.rating);
            }
        })
        axios.get(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=80db2c88f978a7c08fd8b402180ede6e`).then((res) => {
            const firstLogo = res.data.logos.find(element => element.iso_639_1 === "en");
            if (firstLogo) {
                setLogo(firstLogo.file_path);
            }
            else{
                setLogo(res.data.logos[0].file_path)
            }
        });
    }
    // console.log(imdb)
    return (
        <div className="backonly">
            <div className='details'>

                <img src={`https://image.tmdb.org/t/p/w500/${logo}`} alt="" />
                <div className='extra'>
                    <span className='year'>{type == "movie" ? details.release_date : details.first_air_date}</span>
                    <span className='capitalize'>{details.original_language}</span>
                    <span>{type == "movie" ? parseInt(details.runtime / 60) + "h " + details.runtime % 60 + "m" : details.number_of_episodes + " Episodes"}</span>
                    <span className='rate'>{rate}</span>
                </div>
                <div className="overview">{details.overview}</div>
                <Genres/>
            </div>
        </div>
    )
}

export default Details
