import React, { useEffect, useState } from "react";
import userLocalStorage from "./userLocalStorage";



export const User = () => {

  const {getItem}=userLocalStorage("name"); 
  const [profileList,setProfileList]=useState([]);
  const localInfo=getItem()
  
  useEffect(()=>{
    console.log("localinfo",localInfo)
    if(localInfo){
      const getUserName=localInfo["userName"]
      console.log("getUserName",getUserName)
      const {getItem: getItemname}=userLocalStorage(getUserName) 
      setProfileList(getItemname)
    }
   
  },[])

  return (
    <div>
      <p>{profileList.length!==0  ?
      (<div>
        <p>User Name: {profileList[0]?.userName}</p>
        <p>Name: {profileList[0]?.name}</p>
        <p>E-mail: {profileList[0]?.email}</p>
        <p>Telefon: {profileList[0]?.telefon}</p>
        </div>
      ):(<p>nicht finden</p>)}
      </p>
    </div>
  );
};
