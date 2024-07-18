import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Seasons(ele) {
    let [seasons, setSeason] = useState([])
    useEffect(() => {
        getSeason()
    }, [])

    function getSeason() {
        axios.get(`https://api.themoviedb.org/3/tv/${ele.ele.id}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(res => {
            setSeason((Object.keys(res.data.seasons).map((key) => [key, res.data.seasons[key]]))["1"])
        })
    }
    // console.log(seasons)

    return (
        <>
            <h1 className='casth'>Seasons</h1>
            {
                Array.isArray(seasons) ?
                    seasons.map((seas) => {
                        {console.log(seas)}
                        <>
                        <div className='castcont crew must obey'>
                            <img src={`https://image.tmdb.org/t/p/w500/${seas.poster_path}`} />
                            <h4 className='castname'>{seas.name}</h4>
                        </div>
                        </>
                    })
                    : <></>
            }

        </>
    )
}

export default Seasons
