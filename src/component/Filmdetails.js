import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function Filmdetails({filmdetails}) {
    const {id} = useParams();
    //console.log("filmdetails",filmdetails)

    const film = filmdetails ? filmdetails.find((film)=>film.id===parseInt(id)):null
    //console.log(film)
  return (
    <div>
        {film ? (
           <div>
             <div className="carddetail">
               <img src={film.large_cover_image} width={280} />
               <p>{film.summary}</p>
             </div>
             <div className='cardunderdiv'>
             <h7>{film.title_long}</h7>
               <p><b>{film.genres}</b></p>
               <p><b>{film.rating} / 10 - {film.language}</b></p>
               <Link to={film.url}>Gehe zur Filmseite</Link>
             </div>
         </div>
        ):(
            <p>film yok</p>
        )}
        </div>
  )
}
