import React ,{useEffect} from 'react'
import Trending from "./Trending"

function Home() {
    useEffect(()=>{
        document.title = "Plotwist";
        Array.from(document.querySelectorAll('.preventt')).map(each => {
            each.addEventListener('click', () => {
                document.getElementById('dropdownMenu').style.display = 'none'
            })
        })
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
