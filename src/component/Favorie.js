import React, { useEffect, useState } from 'react'
import liebelocalstorage from "./liebelocalstorage";
import { Link } from 'react-router-dom';


export const Favorie = () => {

  const [liebeItemList,SetLiebeItemList]=useState([]);

  const{setLiebeItem,getLiebeItem,removeLiebeItem}=liebelocalstorage("liebekey")

  useEffect(()=>{
 SetLiebeItemList(getLiebeItem())
  },[])


const handleDeleteFavorie=(id)=>{
  const updatedList = liebeItemList.filter(item => item.id !== id);
  setLiebeItem(updatedList);
  removeLiebeItem(id);
}


  console.log("liebeItemlist",liebeItemList)
  return (
    <div>
   {
        liebeItemList ? (
          liebeItemList.map((item,index)=>(
            <div key={index}>
             <div className="carddetail">
               <img src={item.large_cover_image} width={280} />
               <button onClick={() => handleDeleteFavorie(item.id)}>Remove</button>
               <p>{item.summary}</p>
             </div>
             <div className='cardunderdiv'>
             <h7>{item.title_long}</h7>
               <p><b>{item.genres}</b></p>
               <p><b>{item.rating} / 10 - {item.language}</b></p>
               <Link to={item.url}>Gehe zur Filmseite</Link>
             </div>
         </div>
          ))
        ):(<h2 style={{padding:"50px", color:"red"}}>Leer in Ihrer Favoritenliste...</h2>)
      }
    </div>
  )
}
