import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Card from './Card'

function Cards(props) {
  const { query } = useParams(); 
    
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    
    const FetchData = async () => {
        let apiUrl;

        if (props.isSearch && query) {
            apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=b7110ffb41b63ab69e649b23f74d0c0d&query=${query}&page=${page}`;
        } else {
            apiUrl = `https://api.themoviedb.org/3/${props.url}?api_key=b7110ffb41b63ab69e649b23f74d0c0d&page=${page}`;
        }

        try {
            const data = await fetch(apiUrl);
            const parsedData = await data.json();
            
            setTotal(parsedData.total_pages || 0); 
            setArticles(parsedData.results || []);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };
          useEffect(()=>{
            FetchData()
            // eslint-disable-next-line
          }, [page, props.category, query])


            const prev = ()=>{
              if(page > 1){
                setPage(page - 1)
              }
            }
            const next = ()=>{
              if(page < total){
                setPage(page + 1)
              }else{
                alert("nothing")
              }
            }
  return (
    <div>
      <h1 className='m-3 mt-5 py-4 text-white text-center'>List By {props.category}</h1>
        <div className="container-md bg-dark">
      <div className="row">
        {articles.map((element)=>(
            <div key={element.id} className='col-12 col-sm-6 col-md-4 col-lg-4 p-4'>
            <Card title={element.title} adult={(element.adult === false ? "No" : "Yes")} lang={element.original_language} releaseDate={element.release_date} vote_average={element.vote_average} path={element.poster_path} overview={(element.overview.substring(0, 150)+"...")}/>
            </div>
        ))}
        <p className='text-danger align-items-center justify-content-center d-flex'>Page {page} of {total}</p>
        <div className="d-flex">
        <button className="btn btn-outline-danger mb-5 m-2" disabled={(page <= 1)} onClick={prev}>Prev</button>
        <button className="btn btn-outline-danger mb-5 m-2" disabled={(page >= total)} onClick={next}>Next</button>
        </div>
      </div>
        </div>
    </div>
  )
}
export default Cards
