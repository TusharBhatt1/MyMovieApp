import './App.css';
import Home from './Components/Home/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import SearchBar from './Components/SearchBar/SearchBar'

function App() {
  return (
    <Router>

    <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="movies/:id" element={<Card/>}/>
        <Route path="movies/:type" element={<h1>MOVIE TYPE</h1>}/>
        <Route path="/search" element={<SearchBar/>}/>
        <Route path="/MyMovieApp" element={<Home/>}/>
      
      </Routes>
    </Router>
  /* <div className='App'>Hey</div> */
  //Change
  
  )
}

export default App;
