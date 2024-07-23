import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import SeasPost from './SeasPost'
import SeasCast from './SeasCast'
import Episode from './Episode'
import './season.css'
import '../Item/item.css'
import { SeasonContext } from '../context/SeasonContext'

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
                <SeasonContext.Provider value={{ id, sid, episodes, setEpisodes, back, setBack, lengthh, setLength }}>
                    <div className="allseas">
                        <div className="seasondet">
                            <SeasPost />
                            <div className="sep"> </div>
                            <Episode />
                        </div>
                        <SeasCast id={id} back={back} episodes={episodes} />
                    </div>
                </SeasonContext.Provider>
            </>
        )
    }
}

export default SeasDet
