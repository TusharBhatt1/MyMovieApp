import React, { useEffect, useState } from 'react'
import "./Home.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AwesomeSlider from 'react-awesome-slider'
import withAutoPlay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';

export default function Home() {

  const [popularMovies, setPopularMovies] = useState([]);
  const [autoplay, setAutoplay] = useState(false);
  let AutoPlay= withAutoPlay(AwesomeSlider)
  useEffect(() => {
    let URL = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";
    fetch(URL)
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoplay(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='poster'>
        <AutoPlay play={true} style={{height:"70vh",marginBottom:"10px"}}>
          {popularMovies.map(movie =>
            <div style={{color:"white",textDecoration:"none"}} >
              <div className='posterImage'>
                <img height="400vh" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
              </div>
              <div className='posterImage_overlay'>
                <div className='postertitle'>
                  {movie ? movie.original_title : ""}
                </div>
                <div className='posterruntime'>
                  <>Released on :  </>{movie ? movie.release_date : ""}
                </div>
                <div className='posterdescription'>
                  <p>{movie ? movie.overview : ""}</p>
                </div>
              </div>
            </div>
          )}
        </AutoPlay>
      </div>

      <Card />
      <Footer />
    </>
  );
}
