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

    return (
        <>
            {
                seasons && seasons.seasons && (Array.isArray(seasons.seasons) && seasons.seasons.length > 1) ?
                    <>
                        <div id='seas' className="seasons">
                            <h1 className='casth moreones'>Seasons</h1>
                            <div className="oneseason">

                                {seasons.seasons.map((seas) => {
                                    return (seas.name !== "Specials" && seas.season_number <= last.season_number ?
                                        <div key={seas.id} className='castcont crew must obey'>
                                            {/* {console.log(seas.poster_path)} */}
                                            <img src={seas.poster_path !== null ? `https://image.tmdb.org/t/p/w500/${seas.poster_path}` : "https://imgur.com/IqNlhr9.jpeg"} alt={`Season ${seas.season_number} Poster`} />
                                            <h4 className='castname'>{seas.name}</h4>
                                        </div>
                                        : null)
                                })}
                            </div>
                        </div>
                    </>
                    : null
            }

        </>
    )
}

export default Seasons