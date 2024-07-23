import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Details from './Details'
import Poster from './Poster'
import Cast from './Cast'

function Movie() {

    let [details, setData] = useState([])
    let [imdb, setImdb] = useState([])
    let { id } = useParams()
    let { type } = useParams()


    useEffect(() => {
        // getDet()
        getLogo()
        document.getElementById("Nv").scrollIntoView({ behavior: "smooth" });
        // console.log(details.genres)
    }, [type, id, imdb])

    function getLogo() {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then((ress) => {
            setData(ress.data)
            setImdb(ress.data.imdb_id)
            if(ress.data.imdb_id!==null){
                setImdb(ress.data.imdb_id)
            }
            
        })
        if (type == "tv") {
            axios.get(`https://api.themoviedb.org/3/tv/${id}/external_ids?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(res => {
                setImdb(res.data.imdb_id)
            })
        }

    }
// console.log(imdb)

    document.body.style.cssText = `background-image:url('https://image.tmdb.org/t/p/original/${details.backdrop_path}')`
    document.title = `${details.title || details.name}`;
    return (
        <>
            <div className="alll">
                <div className="flexonlyys">

                    <Details  data={details} id={id} type={type} imdb={imdb} />
                    <Poster data={details} id={id} type={type} />
                </div>
                <Cast data={details} id={id} type={type} />
            </div>
        </>
    )
}

export default Movie
