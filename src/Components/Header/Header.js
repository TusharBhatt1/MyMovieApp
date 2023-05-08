import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import me from "./my.webp"
export default function Header() {
  return (
    <div className='header'>
    <Link to="/" style={{textDecoration:"none"}}><img className='header_icon'height="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/></Link>
     <Link to="movies/:id"  style={{textDecoration:"none"}}><img className='header_icon' src=""/><span>Popularrr</span></Link>
     <Link to="/search"><button style={{color:"black",padding:"1px", height:"2rem",width:"10em",textAlign:"center",background:"yellow",borderRadius:"10px"}}>Make a search</button></Link>
     <img src={me} style={{height:"40px", width:"40px", borderRadius:"50%",cursor:"pointer"}}></img>
    </div>
  )
}
