import React from 'react'
import { useLocation } from 'react-router-dom';

const Detailed = () => {
    const location = useLocation();
    const movie = location.state.item;

    return (
        <div>
            <h1>{movie.title || movie.name}</h1>
        </div>
    )
}

export default Detailed