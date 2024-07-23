import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Seasons from './Seasons'
import Similar from './Similar'


function Cast(ele) {
    let [cast, setCast] = useState([])
    let [dir, setDir] = useState([])
    let [sound, setSound] = useState([])

    useEffect(() => {
        getcast()
    }, [ele.type, ele.id])

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
    // console.log((ele))
    return (
        <>
            <div className="allcast">
                <div className='widtho'>

                    <h1 className='casth'>Cast</h1>
                    <div className="allcasting">
                        {Array.isArray(cast.cast) ? cast.cast.slice(0, 10).map((ele) => {

                            return <Link key={ele.id} to={`/person/${ele.id}`}>
                                <div key={ele.id} className='castcont'> <img src={ele.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${ele.profile_path}` : `https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png`} alt="" />
                                    <h4 className='castname'>{ele.name}</h4>
                                    <h4 className='castchar'>{ele.character}</h4>
                                </div>
                            </Link>
                        }) : <></>}
                    </div>
                    {ele.type == "movie" ? <>
                        <div className="crew">
                            <div className='castcont crew must obey'>
                                <h1 className='casth'>Director</h1>
                                <Link to={`/person/${dir.id}`}>
                                    <img src={dir.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${dir.profile_path}` : `https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png`} alt="" />
                                    <h4 className='castname'>{dir.name}</h4>
                                </Link>
                            </div>
                            {sound.length === 0 ? <></> : <div className='castcont crew must obey'>
                                <h1 className='casth'>Music Composer</h1>
                                <Link to={`/person/${sound.id}`}>
                                    <img src={sound.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${sound.profile_path}` : `https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png`} alt="" />
                                    <h4 className='castname'>{sound.name}</h4>
                                </Link>
                            </div>}

                        </div>
                    </>
                        : <></>}
                </div>
                {ele.type == "tv" ? <Seasons ele={ele} sea={ele.data.last_episode_to_air}></Seasons> : <></>}
                <Similar id={ele.id} type={ele.type}></Similar>
            </div>

        </>
    )
}

export default Cast
