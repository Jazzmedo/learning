import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Seasons(ele) {
    let [seasons, setSeason] = useState([])
    let [last, setLast] = useState([])
    useEffect(() => {
        // getSeason()
        setSeason(ele.ele.data)
        setLast(ele.sea)
    })

    // console.log(ele.sea)

    return (
        <di>
            <h1 className='casth moreones'>Seasons</h1>
            <div className="seasons">
                {
                    Array.isArray(seasons.seasons) ?
                        seasons.seasons.map((seas) => {
                            // console.log(seas)
                            return (seas.name != "Specials" && seas.season_number<=last.season_number?
                                <div key={seas.id} className='castcont crew must obey'>
                                    <img src={`https://image.tmdb.org/t/p/w500/${seas.poster_path}`} />
                                    <h4 className='castname'>{seas.season_number}) {seas.name}</h4>
                                </div>
                                : <></>)
                        })
                        : <></>
                }
            </div>

        </di>
    )
}

export default Seasons
