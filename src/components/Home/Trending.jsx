import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import TrendingData from './TrendingData';
import { Link } from 'react-router-dom';



// Make a request for a user with a given ID

const Trending = ({ period }) => {
    let [data, setData] = useState([])
    let [dataa, setDataa] = useState([])
    let [dataaa, setDataaa] = useState([])

    useEffect(() => {
        getTodos()
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
        axios.get(`https://api.themoviedb.org/3/trending/all/${period}?api_key=80db2c88f978a7c08fd8b402180ede6e`).then((res) => {
            let x = shuffle(res.data.results)
            setData(Object.values(x).slice(0, 8))
            // console.log(x)
        })
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=80db2c88f978a7c08fd8b402180ede6e").then((ress) => {
            setDataa(ress.data.genres)
        })
        axios.get("https://api.themoviedb.org/3/genre/tv/list?api_key=80db2c88f978a7c08fd8b402180ede6e").then((resss) => {
            setDataaa(resss.data.genres)
            // console.log(dataaa)
        })
    }

    // console.log(dataaa)
    function mergeGenres(obj1, obj2) {
        const mergedGenres = {};

        // Iterate through obj1, adding genres to mergedGenres
        for (const genre of obj1) {
            mergedGenres[genre.id] = genre;
        }

        // Iterate through obj2, adding unique genres to mergedGenres
        for (const genre of obj2) {
            if (!mergedGenres.hasOwnProperty(genre.id)) {
                // mergedGenres[genre.id] = genre;
                mergedGenres[genre.id] = genre;
            }
        }

        // Convert the mergedGenres object back to an array of genres
        return Object.values(mergedGenres);
    }
    let finalObject = mergeGenres(dataa, dataaa);
    // console.log(finalObject)
    return (
        <>
            <h1>{period == "day" ? "Today" : "Weekly"} Trendings</h1>
            <div className="containerr boxedd">
                {data.map(ele => {
                    let genre = ele.genre_ids.map(id => {
                        let genreObj = finalObject.find(genre => genre.id === id);
                        // console.log(genreObj)
                        return genreObj ? genreObj.name : '';
                    });
                    return (
                        <TrendingData ele={ele} genre={genre} />
                    )
                })}
            </div>
        </>
    )
}

export default Trending;