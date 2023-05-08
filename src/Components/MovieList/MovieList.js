import React, { useEffect, useState } from 'react'
import "./MovieList.scss"
import Card from '../Card/Card'
import { useParams } from 'react-router-dom'

export default function MovieList() {
    let [movieList,setmovieList]=useState([])
    let {type}=useParams()

    useEffect(()=>{
     getData()
    },[type])

    const getData=()=>{
        let URL=`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        fetch(URL)
        .then(res=>res.json())
        .then(data=>setmovieList(data.results))
    }

  return (
<div className='movie_list' >
<h2>
    {/* {(type?type:"popular").toUpperCase()} */}
</h2>
<div className='list_cards'>
    {movieList.map(movie=>{
        <Card movie={movie}/>
    })}
</div>
</div>
    

  )
}
