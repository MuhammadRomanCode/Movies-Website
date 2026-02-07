import React from 'react'

function Card(props) {

  
    return (
            <div className="card bg-dark text-white shadow h-100">
                <div className="img position-relative">
                <img src={`https://image.tmdb.org/t/p/w500${props.path}`} className="card-img-top" alt="..." />
                <div className="rating position-absolute bottom-0 end-0 p-3 text-warning"><i className='fa-solid fa-star mx-2'></i>{props.vote_average}</div>
                <h3 className="lang position-absolute start-0 p-2 bottom-0">{props.lang}</h3>
                </div>
                    <div className="card-body">
                        <p className='mt-0' style={{color:(props.adult === "No" ? "#198754": "tomato")}}>Adult : {props.adult}</p>
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text mt-2">{props.overview}</p>
                        <p>Released On : {props.releaseDate}</p>
                        <a href="/" className="btn btn-outline-danger">See More</a>
                    </div>
            </div>
    )
}

export default Card
