import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Cast(ele) {
    let [cast, setCast] = useState([])
    let [dir, setDir] = useState([])
    let [sound, setSound] = useState([])

    useEffect(() => {
        getcast()
    }, [])

    function getcast() {
        axios.get(`https://api.themoviedb.org/3/${ele.type}/${ele.id}/credits?api_key=80db2c88f978a7c08fd8b402180ede6e`).then(res => {
            setCast(res.data)
            const firstdir = res.data.crew.find(element => element.job === "Director");
            if (firstdir) {
                setDir(firstdir);
            }
            const firstsound = res.data.crew.find(ele => ele.job == "Original Music Composer");
            if (firstsound) {
                setSound(firstsound);
            }
        })
    }
    console.log((sound))
    return (
        <>
            <div className="allcast">
                <h1 className='casth'>Cast</h1>
                <div className="allcasting">
                    {Array.isArray(cast.cast) ? cast.cast.slice(0, 10).map((ele) => {

                        return <div className='castcont'> <img src={ele.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${ele.profile_path}` : `https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png`} alt="" />
                            <h4 className='castname'>{ele.name}</h4>
                            <h4 className='castchar'>{ele.character}</h4>
                        </div>
                    }) : <></>}
                </div>
                {ele.type == "movie" ? <>
                    <div className="crew">
                        <div className='castcont crew must obey'>
                            <h1 className='casth'>Director</h1>
                            <img src={dir.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${dir.profile_path}` : `https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png`} alt="" />
                            <h4 className='castname'>{dir.name}</h4>
                        </div>
                        {sound.length === 0 ? <></> : <div className='castcont crew must obey'>
                            <h1 className='casth'>Music Composer</h1>
                            <img src={sound.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${sound.profile_path}` : `https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png`} alt="" />
                            <h4 className='castname'>{sound.name}</h4>
                        </div>}

                    </div>
                </>
                    : <></>}
            </div>

        </>
    )
}

export default Cast
