import React, { useContext } from 'react'
import { SeasonContext } from '../context/SeasonContext'
import Networks from '../Item/Networks'
import { Link } from 'react-router-dom'

function SeasPost() {
    let { id, episodes, back } = useContext(SeasonContext)
    return (
        <>
            <div className="seasonpos">
                <img className='posterrseas' src={`https://image.tmdb.org/t/p/w500/${episodes.poster_path}`} alt="" />
                <div className="posseas">
                    <Link to={`/tv/${id}`}><h3 className='seasposttle'>{back.title || back.name}</h3></Link>
                    <div className="seasvote">
                        <h3 className='seasname'>{episodes.name} <span></span></h3>
                        <h3 className='voteseas'>{parseInt(episodes.vote_average * 10)}% </h3>
                    </div>
                </div>
                <h2 className='watchnoww'>Watch Now</h2> <Networks id={back.id} type="tv" />
            </div>
        </>
    )
}

export default SeasPost
