import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import {DetailsContext} from '../context/DetailsContextProvider'
import './item.css'

function Networks() {
    let {id,type} = useContext(DetailsContext)

    let [data, setData] = useState([])
    useEffect(() => {
        getGenres()
    }, [type,id])

    function getGenres() {
        if(type && id){
            axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(res => {
                // console.log(res.data)
                setData(res.data)
                
            })
        }
    }

    // console.log(id)
    return (
        <div className='flexonlyy' style={{"gap":"1rem"}}>
            {Array.isArray(data.networks)? data.networks.map(net=><div key={net.id} className="flexonlyy"><img className='netw' src={`https://image.tmdb.org/t/p/original/${net.logo_path}`}/></div>):<></>}
        </div>
    )
}

export default Networks
