import {React , useState} from 'react'
import { Link, useNavigate } from 'react-router'

function Navbar() {
   const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
        navigate(`/find/${query}`);
        setQuery("");
    }
};
  return (
    <>
      <div className="navbar navbar-expand-md navbar-dark bg-dark fixed-top shadow">
        <div className="container-md">
          <Link to="/home" className='navbar-brand text-danger'>MyMovies</Link>
          <button type='button' className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#NavMenu"><span className='Navbar-toggler-icon'></span></button>

          <div className="navbar-collapse" id="NavMenu">
            <ul className="navbar-nav">
              <li className="nav-item"><Link to="/home" className='nav-link'>Home</Link></li>
              <li className="nav-item"><Link to="/upcoming" className='nav-link'>Upcoming</Link></li>
              <li className="nav-item"><Link to="/popular" className='nav-link'>Popular</Link></li>
              <li className="nav-item"><Link to="/top_rated" className='nav-link'>Top Rated</Link></li>
            </ul>
            <form className="d-flex ms-auto" role="search" onSubmit={handleSearch}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
              <button className="btn btn-outline-danger">Search</button>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
