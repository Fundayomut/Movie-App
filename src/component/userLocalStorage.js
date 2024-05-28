import React from 'react'

export default function userLocalStorage(userkey) {
    
const setItem =(value)=>{
    window.localStorage.setItem(userkey,JSON.stringify(value))

}

const setUserItem=(value)=>{
  window.localStorage.setItem("name",JSON.stringify(value))
}

const removeItem=()=>{
    window.localStorage.removeItem(userkey)
}

  const getItem =()=>{
  const item = window.localStorage.getItem(userkey);
  //console.log("getitem",typeof item)
  return item ? JSON.parse(item) : [];
   
}


  return {
    setItem ,
    removeItem,
    getItem,
    setUserItem,
  }
}
