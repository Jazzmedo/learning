import React, { useContext } from 'react'
import { SeasonContext } from '../context/SeasonContext'
import { Link } from 'react-router-dom'

function SeasPost() {
    let { id, episodes, back, logo } = useContext(SeasonContext)
    return (
        <>
            <div className="seasonpos">
                <div className="posterrseas">
                {episodes.name=='Specials' || episodes.season_number==0?<></>:<div className="votinggg force">{parseInt(episodes.vote_average * 10)}%</div>}
                    <img src={episodes.poster_path ? `https://image.tmdb.org/t/p/w500/${episodes.poster_path}` : `https://image.tmdb.org/t/p/w500/${back.poster_path}`} alt="" />
                </div>
                <div className="posseas">
                    <Link className='preventt' to={`/tv/${id}`}><img className='seasposttle' src={`https://image.tmdb.org/t/p/w300/${logo}`} width={250} alt="" /></Link>
                    <div className="seasvote">
                        <h3 className='seasname'>{episodes.name}</h3>
                        <h3 className='voteseas'>{parseInt(episodes.vote_average * 10)}% </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeasPost
