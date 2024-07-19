import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Similar(ele) {
    let [similar, setSimilar] = useState([])
    useEffect(() => {
        getSimilar()
    }, [])

    function getSimilar() {
        axios.get(`https://api.themoviedb.org/3/${ele.type}/${ele.id}/recommendations?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(res => {
            let x = shuffle(res.data.results)
            setSimilar(Object.values(x).slice(0, 10))

        })
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    console.log(similar)
    return (
        <div className='similar'>
            <h1 className='casth moreones'>Recommended</h1>
            <div className="seasons">
                {
                    Array.isArray(similar) ?
                        similar.map((seas) => {
                            // console.log(seas)
                            return (
                                seas.poster_path !== null ?
                                    <div key={seas.id} className='castcont crew must obey seas'>
                                        <Link to={`/${ele.type}/${seas.id}/`}>
                                            <img src={`https://image.tmdb.org/t/p/w500/${seas.poster_path}`} />
                                            <h4 className='castname'>{seas.name||seas.title}</h4>
                                        </Link>
                                    </div>
                                    : <></>
                            )

                        })
                        : <></>
                }
            </div>
        </div>
    )
}

export default Similar
