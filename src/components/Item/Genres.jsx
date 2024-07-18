import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Genres(ele) {
    let [genre, setGenre] = useState([])
    useEffect(() => {
        getGenres()
    }, [])

    function getGenres() {
        axios.get(`https://api.themoviedb.org/3/${ele.type}/${ele.id}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(res => {
            // console.log(res.data.genres)
            setGenre(res.data.genres)
        })
    }
    return (
        <>
            <div className="genress">
                {genre.map(te => {
                    return <div key={te.id} className="genree">{te.name}</div>
                })}
                <a target='_blank' href={`https://www.themoviedb.org/${ele.type}/${ele.id}`}><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="" /></a>
            </div>
        </>
    )
}

export default Genres
