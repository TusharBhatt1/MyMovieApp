import React,{useState,useEffect} from 'react'
import "./Card.scss"
import Skeleton, {SkeletonTheme} from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { Link } from 'react-router-dom'
import MovieList from '../MovieList/MovieList'

export default function Card({movie}) {
const[isLoading,setIsLoading]=useState(true)

let[movies,setMovies]=useState([])
let URL="https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    fetch(URL)
    .then(res=>res.json())
    .then(data=>setMovies(data.results))


useEffect(()=>{
    setTimeout(()=>{
        setIsLoading(false)
    },3000)
},[isLoading])

  return (
    <div class="maincardclass" style={{padding:"10px"}}>
    <h2>Popular</h2>
  {     
   
<div className='cardslist'>

  {
    movies.map(movie=>
  <>
   
   <div className='cards'>
    <img className='cards_img' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}/>
   </div>
  <div className='cardtext'>
    <p style={{display:"none"}}>{movie?movie.overview.slice(0,50):""}</p>
  </div>
  </>
  )
  
  }
  </div>
  }  
</div>
)
}