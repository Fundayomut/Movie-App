import React from 'react'

export default function filmlocalstorage(filmkey) {
    const setItem =(value)=>{
        window.localStorage.setItem(filmkey,JSON.stringify(value))
    
    }
    
    const removeItem=()=>{
        window.localStorage.removeItem(filmkey)
    }
    
      const getItem =()=>{
        const item = window.localStorage.getItem(filmkey)
    if(item){
       return JSON.parse(item)
    }
            
    }
    

      return {
        setItem ,
        removeItem,
        getItem,
      }
    }
    