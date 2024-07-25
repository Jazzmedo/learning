import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { useParams,Link } from 'react-router-dom'
import { EpisodeContext } from '../context/EpisodeContext'
import './epi.css'

function SingleE() {
    let { id } = useParams()
    let { sid } = useParams()
    let { eid } = useParams()

    let [episodes, setEpisodes] = useState([])
    let [tv, setTv] = useState([])

    useEffect(() => {
        getEpisodes()
    }, [])

    function getEpisodes() {
        axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${sid}/episode/${eid}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(res => {
            setEpisodes(res.data)
        })
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(response => {
            setTv(response.data)
        })
    }

    return (
        <>
            {console.log(episodes)}
            {/* {console.log(tv)} */}
            <EpisodeContext.Provider value={{ id, sid, eid, episodes, tv }}>
                <div className="epiAll">
                    <div className="epidet">
                        <div className="epiposter">
                            <img src={`https://image.tmdb.org/t/p/w500/${episodes.still_path}`} alt="" />
                            <div className="votinggg force">{parseInt(episodes.vote_average * 10)}%</div>
                        </div>
                        <div className="epipdetails">
                            <h1>{episodes.name}</h1>
                            <h3><span>Season : {episodes.season_number}</span>
                                <span>Episode : {episodes.episode_number}</span>
                                <span>Duration : {episodes.runtime >= 60 ? `${parseInt(episodes.runtime / 60)}h` : ""} {episodes.runtime % 60 != 0 ? `${episodes.runtime % 60}m` : ""}</span>
                                <span>Air Date : {episodes.air_date}</span></h3>
                            <p className='paragraph'>{episodes.overview}</p>
                        </div>
                    </div>
                    <div className='widthoo'>
                        <h1 className='casthh'>Cast</h1>
                        <div className="allcastingg">
                            {episodes.guest_stars ? episodes.guest_stars.slice(0, 10).map((ele) => {
                                return <Link key={ele.id} to={`/person/${ele.id}`}>
                                    <div key={ele.id} className='castcontt'> <img src={ele.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${ele.profile_path}` : `https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png`} alt="" />
                                        <h4 className='castnamee'>{ele.name}</h4>
                                        <h4 className='castcharr'>{ele.character}</h4>
                                    </div>
                                </Link>
                            }) : <></>}
                        </div>
                    </div>
                </div>
            </EpisodeContext.Provider >
        </>
    )
}

export default SingleE
