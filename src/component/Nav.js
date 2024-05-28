import React from 'react'
import { Link } from 'react-router-dom'



export default function Nav() {


  return (
    <div className='navmaindiv'>
      <div  className='navheaddiv'>
        <p className='logo'>Funda Yomut
        <img style={{marginLeft:"10px"}} src='https://cdn4.iconfinder.com/data/icons/essentials-72/24/029_-_Star-64.png' width={"20px"} />
        <img src='https://cdn4.iconfinder.com/data/icons/essentials-72/24/029_-_Star-64.png' alt='star' width={"20px"} />
        <img src='https://cdn4.iconfinder.com/data/icons/essentials-72/24/029_-_Star-64.png' alt='star' width={"20px"} />
        <img src='https://cdn4.iconfinder.com/data/icons/essentials-72/24/029_-_Star-64.png' alt='star' width={"20px"} />
        <img src='https://cdn4.iconfinder.com/data/icons/essentials-72/24/029_-_Star-64.png' alt='star' width={"20px"} />
        </p>
        <div className='navsearchdiv'>
        </div>
        <Link to={`/Login`}><p>Logout</p></Link>
      </div>
      <div className='navdiv'>
       <Link to={`/Search`}><p>Suchen</p></Link>
        <Link to={`/Favorie`}><p>Meine Lieblingsfilme</p></Link>
        <p>Später ansehen</p>
        <Link to={`/User`}><p>Nutzerinformation</p></Link>
      </div>
    </div>
  )
}
