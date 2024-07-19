import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Networks(ele) {
    let [data, setData] = useState([])
    useEffect(() => {
        getGenres()
    }, [ele.type,ele.id])

    function getGenres() {
        axios.get(`https://api.themoviedb.org/3/${ele.type}/${ele.id}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(res => {
            console.log(res.data)
            setData(res.data)

        })
    }

    // console.log(data.networks)
    return (
        <div className='flexonlyy' style={{"gap":"1rem"}}>
            {Array.isArray(data.networks)? data.networks.map(net=><div className="flexonlyy"><img className='netw' src={`https://image.tmdb.org/t/p/original/${net.logo_path}`}/></div>):<></>}
        </div>
    )
}

export default Networks
