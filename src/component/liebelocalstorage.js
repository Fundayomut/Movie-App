import React from 'react'

export default function liebelocalstorage(liebekey) {
    const setLiebeItem =(value)=>{
        window.localStorage.setItem(liebekey,JSON.stringify(value))
    
    }
    
    const removeLiebeItem=()=>{
        window.localStorage.removeItem(liebekey)
    }
    
      const getLiebeItem =()=>{
        const item = window.localStorage.getItem(liebekey)
    if(item){
       return JSON.parse(item)
    }
            
    }
    

      return {
        setLiebeItem ,
        removeLiebeItem,
        getLiebeItem,
      }
    }
    