import React, { useEffect, useState } from 'react'
import Trending from "./Trending"
import Separator from "./Separator"
import NowPlaying from "./NowPlaying"

function Home() {

    useEffect(() => {
        document.title = "Plotwist";
        Array.from(document.querySelectorAll('.preventt')).map(each => {
            each.addEventListener('click', () => {
                document.getElementById('dropdownMenu').style.display = 'none'
            })
        })
    }, [])

    document.body.style.cssText = `background-image:url('${require("../../back.jpg")}')`

    return (
        <>
                <Trending period="week" />
                {/* <Trending period="week"/> */}
                <Separator />
                <NowPlaying type="movie" query="now_playing" />
                <Separator />
                <NowPlaying type="tv" query="on_the_air" />
                <Separator />
        </>
    )
}

export default Home
