import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Details from './Details'
import Poster from './Poster'
import Cast from './Cast'

function Movie() {

    let [details, setData] = useState([])
    let [logo, setLogo] = useState([])
    let { id } = useParams()
    let { type } = useParams()


    useEffect(() => {
        getDet()
        getLogo()
        // console.log(details.genres)
    }, [type,id])

    function getLogo() {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=80db2c88f978a7c08fd8b402180ede6e`).then((res) => {
            setLogo(res.data.logos[0].file_path)
        })
        axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then((ress) => {
            setData(ress.data)
        })

    }

    function getDet() {

    }
    document.body.style.cssText = `background-image:url('https://image.tmdb.org/t/p/original/${details.backdrop_path}')`
    document.title = `${details.title || details.name}`;
    return (
        <>
            <div className="alll">
                <div className="flexonlyys">

                    <Details data={details} id={id} type={type} logo={logo} />
                    <Poster data={details} id={id} type={type} />
                </div>
                <Cast data={details} id={id} type={type} />
            </div>
        </>
    )
}

export default Movie
