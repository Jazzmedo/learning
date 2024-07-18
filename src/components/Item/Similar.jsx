import React from 'react'

function Similar() {
    return (
        <div className='similar'>
            <h1 className='casth moreones'>Seasons</h1>
            <div className="seasons">
                {
                    Array.isArray(seasons) ?
                        seasons.map((seas) => {
                            // console.log(seas)
                            return (seas.name != "Specials" ?
                                <div key={seas.id} className='castcont crew must obey'>
                                    <img src={`https://image.tmdb.org/t/p/w500/${seas.poster_path}`} />
                                    <h4 className='castname'>{seas.season_number}) {seas.name}</h4>
                                </div>
                                : <></>)
                        })
                        : <></>
                }
            </div>
        </div>
    )
}

export default Similar
