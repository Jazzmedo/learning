import React, { useContext } from 'react'
import { SeasonContext } from '../context/SeasonContext'


function Episode() {
    let { episodes, lengthh} = useContext(SeasonContext)

    return (
        <>
            <div className="episodess">
                <h3 className='epish2'>Episodes : {lengthh}</h3>
                <div className="cardsss">
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

        </>
    )
}

export default Episode
