import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Networks from '../Item/Networks'
import SeasCast from './SeasCast'
import './season.css'
import '../Item/item.css'

function SeasDet() {
    let { id, sid } = useParams()
    let [episodes, setEpisodes] = useState([])
    let [back, setBack] = useState([])
    let [lengthh, setLength] = useState([])

    useEffect(() => {
        getData()
        if (back.name && episodes.name) {
            document.title = `${back.name} | ${episodes.name}`;
        }

        if (episodes.episodes) {
            setLength(episodes.episodes.length)
        }
    }, [back.name, episodes.name])

    function getData() {
        axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${sid}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(res => {
            setEpisodes(res.data)
        })
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(ress => {
            setBack(ress.data)
        })
    }
    // console.log(episodes)
    // console.log(back)
    document.body.style.cssText = `background-image:url(https://image.tmdb.org/t/p/original/${back.backdrop_path})`
    if (episodes && back) {

        return (
            <>
                <div className="allseas">
                    <div className="seasondet">
                        <div className="seasonpos">
                            <img className='posterrseas' src={`https://image.tmdb.org/t/p/w500/${episodes.poster_path}`} alt="" />
                            <div className="posseas">
                                <Link to={`/tv/${id}`}><h3 className='seasposttle'>{back.title || back.name}</h3></Link>
                                <div className="seasvote">
                                    <h3 className='seasname'>{episodes.name} <span></span></h3>
                                    <h3 className='voteseas'>{parseInt(episodes.vote_average * 10)}% </h3>
                                </div>
                            </div>

                            <><h2 className='watchnoww'>Watch Now</h2> <Networks id={back.id} type="tv" /></>
                        </div>
                        <div className="sep"> </div>
                        <div className="episodess">
                            <h3 className='epish2'>Episodes : {lengthh}</h3>
                            <div  className="cardsss">
                                {Array.isArray(episodes.episodes) && episodes.episodes.map((item) => {
                                    // console.log(item)
                                    return (<>
                                        <div className="oncardd">
                                            <img className="posterrr" src={item.still_path ? `https://image.tmdb.org/t/p/w500/${item.still_path}` : require(`./asdfs.jpg`)} />
                                            <div className="numberep">{item.episode_number}</div>
                                            <div className="voteep">{parseInt(item.vote_average * 10)}%</div>
                                            <div className="episdets">
                                                <h5 id='epnammma'>{item.name}</h5>
                                                <div className="septer"></div>
                                                <div className="detsdets">
                                                    <h6>{item.air_date}</h6>
                                                    <h6>{item.runtime >= 60 ? `${parseInt(item.runtime / 60)}h` : ""} {item.runtime % 60 != 0 ? `${item.runtime % 60}m` : ""}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </>)
                                })}
                            </div>
                        </div>
                    </div>
                    <SeasCast id={id} back={back} episodes={episodes} />
                </div>
            </>
        )
    }
}

export default SeasDet
