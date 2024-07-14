import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import './style.css';

// Make a request for a user with a given ID

const Count = () => {
    let [data, setData] = useState([])
    let [dataa, setDataa] = useState([])
    let [dataaa, setDataaa] = useState([])

    useEffect(() => {
        getTodos()
        getTodos2()
        getTodos3()
    }, [])

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function getTodos() {
        axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=80db2c88f978a7c08fd8b402180ede6e").then((res) => {
            let x = shuffle(res.data.results)
            setData(Object.values(x).slice(0, 6))
            // console.log(x)
        })
    }

    function getTodos2() {
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=80db2c88f978a7c08fd8b402180ede6e").then((ress) => {
            setDataa(ress.data.genres)
        })
    }
    function getTodos3() {
        axios.get("https://api.themoviedb.org/3/genre/tv/list?api_key=80db2c88f978a7c08fd8b402180ede6e").then((resss) => {
            setDataaa(resss.data.genres)
            console.log(dataaa)
        })
    }
    console.log(dataaa)
    function mergeGenres(obj1, obj2) {
        const mergedGenres = {};

        // Iterate through obj1, adding genres to mergedGenres
        for (const genre of obj1) {
            mergedGenres[genre.id] = genre;
        }

        // Iterate through obj2, adding unique genres to mergedGenres
        for (const genre of obj2) {
            if (!mergedGenres.hasOwnProperty(genre.id)) {
                mergedGenres[genre.id] = genre;
            }
        }

        // Convert the mergedGenres object back to an array of genres
        return Object.values(mergedGenres);
    }
    let finalObject = mergeGenres(dataa, dataaa);
    console.log(finalObject)

    return (

        <div className="containerr boxedd">
            {data.map(ele => {
                // console.log(ele,"hgkhjk")
                const backgroundStyle = {
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${ele.backdrop_path})`,
                };
                let genre = ele.genre_ids.map(id => {
                    let genreObj = finalObject.find(genre => genre.id === id);
                    // console.log(genreObj)
                    return genreObj ? genreObj.name : '';
                });

                console.log(genre)

                return (
                    <div className="conn" key={ele.id} style={backgroundStyle}>
                        <div className="backblack"></div>
                        <div className="backblack1"></div>
                        <h2>{ele.title || ele.name}</h2>
                        <h3>{parseInt(ele.vote_average * 10)}% <span>({(ele.vote_count / 1000 > 1 ? `${(ele.vote_count / 1000).toFixed(2)}K` : ele.vote_count)})</span></h3>
                        <div className="genres">
                            {genre.map(te => {
                                return <div className="genre">{te}</div>
                            })}
                            <a target='_blank' href={`https://www.themoviedb.org/${ele.media_type}/${ele.id}`}><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="" /></a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Count;