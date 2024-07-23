import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SeasCast(ele) {
    let [cast, setCast] = useState([])
    useEffect(() => {
        if(ele.id){
            getCast()
        }
    }, )

    function getCast() {
        axios.get(`https://api.themoviedb.org/3/tv/${ele.id}/season/${ele.episodes.season_number}/credits?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(res => {
            setCast(res.data)
        })
    }

    return (
        <>
            <div className='widthoo'>
                <h1 className='casthh'>Cast</h1>
                <div className="allcastingg">
                    {cast.cast ? cast.cast.slice(0, 10).map((ele) => {
                        return <Link key={ele.id} to={`/person/${ele.id}`}>
                            <div key={ele.id} className='castcontt'> <img src={ele.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${ele.profile_path}` : `https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png`} alt="" />
                                <h4 className='castnamee'>{ele.name}</h4>
                                <h4 className='castcharr'>{ele.character}</h4>
                            </div>
                        </Link>
                    }) : <></>}
                </div>
            </div>
        </>
    )
}

export default SeasCast
