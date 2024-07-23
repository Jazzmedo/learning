import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import {DetailsContext} from '../context/DetailsContextProvider'
import Networks from './Networks'

function Poster() {
    let {id,type} = useContext(DetailsContext)

    let [data, setData] = useState([])
    useEffect(() => {
        getGenres()
    }, [type,id])

    function getGenres() {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(res => {
            // console.log(res.data)
            setData(res.data)
        })
    }
    // console.log(data)
    return (
        <>
            <div className="allpos">
                <div className="flexmode">

                    <img className='posterr' src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
                    <div className="posdet">
                        <h3 className='posttle'>{data.title||data.name}</h3>
                        <h3 className='vote'>{parseInt(data.vote_average * 10)}% <span>({(data.vote_count / 1000 > 1 ? `${(data.vote_count / 1000).toFixed(2)}K` : data.vote_count)})</span></h3>
                    </div>
                </div>
                
                {type=="tv"? <><h2 className='watchnow'>Watch Now</h2> <Networks/></>:<></>}
            </div>

        </>
    )
}

export default Poster
