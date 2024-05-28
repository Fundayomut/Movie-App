import { Navigate, Route, Routes, json } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import { useEffect, useState } from 'react';
import Filmdetails from './component/Filmdetails';
import Login from './component/Login';
import Register from './component/Register';
import { Favorie } from './component/Favorie';
import Search from './component/Search';
import { User } from './component/User';
import userLocalStorage from './component/userLocalStorage';



function App() {

  const [data, setData]=useState([]);
  const [loggin,setLoggin]=useState(false);
  

  const handleLogin=(name)=>{
    setLoggin(true);
  }

  const handleLogout = () => {
    setLoggin(false);
  }


  useEffect(()=>{
    try {
      fetch(`https://yts.mx/api/v2/list_movies.json?limit=50`)
      .then ((res)=>res.json())
      .then((json)=>{
        setData(json.data.movies)
      })
    } catch (error) {
      console.log("catchError:",error)
    }
  },[data])

 //console.log(data)
  return (
    <div>
      <Routes>
      <Route path='/' element={loggin ? <Navigate to="/Home" /> : <Login handleLogin={handleLogin} />} />
      <Route path='/home' element={loggin ? <Home home={data} handleLogout={handleLogout} /> : <Navigate to="/Login" />} />
        <Route path='/Filmdetails/:id' element={<Filmdetails filmdetails={data} />} />
        <Route path='/Login' element={<Login handleLogin={handleLogin}/>}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/Favorie' element={<Favorie />}/>
        <Route path='/User' element={<User />}/>
        <Route path='/Search' element={<Search search={data} />}/>
      </Routes>
    </div>
  );
}

export default App;
