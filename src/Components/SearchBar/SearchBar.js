import React, { useEffect, useState } from 'react'
import MovieList from '../MovieList/MovieList'
import "./SearchBar.scss"
import icon from "./searchicon.png"

export default function SearchBar() {

const [userquery,setUserQuery]=useState((""))

const [Datas,setshowData]= useState([])


const handleQuery=(e)=>{
 setUserQuery(e.target.value)
 console.log(userquery)
 
}
const handleSearch=()=>{


const url = `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${userquery}&page=1&include_adult=false`;
fetch(url)
.then(res=>res.json())
.then(info=>(setshowData(info.results)))
console.log(Datas)

}


  return (
  <>
    <div className='searchbar'>
        <input onChange={handleQuery} type="text" placeholder='   Search'></input>
      
        <button onClick={handleSearch}>
            <img className='searchimg' src={icon}  height={"30px"}></img>
        </button>
    </div>
    <div className='showdata'>

    
    
    { Datas.map(data=> 

   <div className='searcheddata'>
    <img src={`https://image.tmdb.org/t/p/original${data && data.poster_path}`}/>
    
     <p>{data.original_title}</p>
     </div>
    )
    }    

    </div>
</>
  )



  }