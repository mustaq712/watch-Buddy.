import './App.css';
import Movie from './component/Movie';
import TV from './component/TV';
import Header from './component/Header'
import {BrowserRouter, Routes , Route} from "react-router-dom";
import WatchList from './component/WatchList';
import WatchListHeader from './component/WatchListHeader';
import Search from './component/Search';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        
        <Route path = "/"  element = {<div><Header/><Movie/></div>}/>
        <Route path ="/home"  element = {<div><Header/><Movie/></div>}/>
        <Route path = "/watchlist" element ={<div><Header/><WatchList/></div>} />
        <Route path = "/search" element = {<div><Header/><Search/></div>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
