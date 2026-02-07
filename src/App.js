import './App.css';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
    <div className='bg-dark'>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Cards url="trending/all/day" category="Trending"/>}></Route>
        <Route path='/' element={<Cards url="trending/all/day" category="Trending"/>}></Route>
        <Route path='/top_rated' element={<Cards url="movie/top_rated" category="Top Rated"/>}></Route>
        <Route path='/upcoming' element={<Cards url="movie/upcoming" category="Upcoming"/>}></Route>
        <Route path='/popular' element={<Cards url="movie/popular" category="Popular"/>}></Route>
        <Route path="/find/:query" element={<Cards isSearch={true} category="Search Results"/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
