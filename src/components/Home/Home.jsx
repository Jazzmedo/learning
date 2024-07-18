import React ,{useEffect} from 'react'
import Trending from "./Trending"

function Home() {
    useEffect(()=>{
        document.title = "Home";
    },[])

    document.body.style.cssText=`background-image:url('${require("../../back.jpg")}')`
    return (
        <>
        <Trending period="week"/>
        {/* <Trending period="week"/> */}
        </>
    )
}

export default Home
