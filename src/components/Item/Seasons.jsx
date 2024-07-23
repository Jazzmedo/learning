import React, { useContext} from 'react'
import {DetailsContext} from '../context/DetailsContextProvider'
import { Link } from 'react-router-dom'

function Seasons() {
    let {seasons,last,id}=useContext(DetailsContext)
    // console.log(seasons)
    return (
        <>
            {
                seasons && (Array.isArray(seasons) && seasons.length > 1) ?
                    <>
                        <div id='seas' className="seasons">
                            <h1 className='casth moreones'>Seasons</h1>
                            <div className="oneseason">

                                {seasons.map((seas) => {
                                    return (seas.name !== "Specials" && seas.season_number <= last.season_number ?
                                        <div key={seas.id} className='castcont crew must obey'>
                                            <Link to={`/tv/${id}/season/${seas.season_number}`}>
                                            {/* {console.log(seas.season_number)} */}
                                            <img src={seas.poster_path !== null ? `https://image.tmdb.org/t/p/w500/${seas.poster_path}` : "https://imgur.com/IqNlhr9.jpeg"} alt={`Season ${seas.season_number} Poster`} />
                                            <h4 className='castname'>{seas.name}</h4>
                                            </Link>
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