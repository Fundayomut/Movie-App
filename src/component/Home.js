import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link} from "react-router-dom";
import filmlocalstorage from "./filmlocalstorage";
import liebelocalstorage from "./liebelocalstorage";

export default function Home({ home }) {
const [data,setData]=useState([]);


const{setItem, getItem}=filmlocalstorage("filmkey")
const{setLiebeItem, getLiebeItem}=liebelocalstorage("liebekey")



useEffect(()=>{
  try {
    fetch(`https://yts.mx/api/v2/list_movies.json?limit=50`)
    .then ((res)=>res.json())
    .then((json)=>{
      setData(json.data.movies)
      setItem(json.data.movies)
    })
  } catch (error) {
    console.log("catchError:",error)
  }
},[data])



const handleFavorie=(id)=>{
const allFilm=getItem()
const findFilm=allFilm.find((item)=>item.id===id)

if(findFilm){
  const favorieItem = getLiebeItem() || [];
  const favorieAdd={...findFilm,favorited:true}
  const updateFavorie=[...favorieItem,favorieAdd]
  setLiebeItem(updateFavorie)
}else{
  alert("Nicht Finden")
}
}


  return (
    <div>
      <Nav />
      <div className="carddiv">
        {home ? (
          home.map((item, index) => (
            <div key={index}>
              <div className="card" >
                <div>
                  <img src={item.large_cover_image} alt="filmcover" width={180} />
                </div>
                <div className="cardbuttondiv">
                  <button onClick={()=>handleFavorie(item.id)} className="savebutton">
                    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-64.png" alt="herz" width={30} />
                  </button>
                  <button className="savebutton">
                  <img src="https://cdn4.iconfinder.com/data/icons/media-8/80/video-service-v2-24-64.png" alt="save" width={30} />
                  </button>
                </div>
                <div className='cardunderdiv'>
                <h6>{item.title_long}</h6>
                  <p><b>{item.genres.join(', ')} </b></p>
                  <p>Rating : {item.rating} /10 </p>
                </div>
                <Link to={`/Filmdetails/${item.id}`}><button className="cardbutton">Filmdetails</button></Link>
              </div>
            </div>
          ))
        ) : (
          <h2>nicht finden</h2>
        )}
      </div>
    </div>
  );
}


/*
"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-64.png"
https://cdn2.iconfinder.com/data/icons/peppyicons/512/heart-64.png
*/


  /*
    const [randomfilm,setRandomfilm]=useState();
    useEffect(()=>{
        const interval= setInterval(() => {
            if( home && home.length>0){
                const rundomIndex=Math.floor(Math.random()*home.length)
                setRandomfilm(home[rundomIndex])
            }
        }, 50000);
        return clearInterval(interval)
    },[home])


   console.log("randomfilm",randomfilm)
  */