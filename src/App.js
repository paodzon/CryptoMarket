import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import './App.css';
import { getData } from './actions';
import cryptoApi from './services/cryptoApi';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Cryptocurrencies from './pages/Cryptocurrencies';
import Exchanges from './pages/Exchanges';
import News from './pages/News';

function App() {

    const dispatch = useDispatch();

    useEffect(async() => {
        const response = await cryptoApi.get('/coins');
        dispatch(getData(response.data.data))     
    }, [])

    return (
        <div className="app">
            <BrowserRouter>
            <div className="app__navbar">
                <Navbar/>
            </div>
            <div className="app__main">
                
                <Routes>
                    <Route index path="/" element={<Homepage/>} />
                    <Route path="cryptocurrencies" element={<Cryptocurrencies/>} />
                    <Route path="exchanges" element={<Exchanges/>} />
                    <Route path="news" element={<News/>} />

                </Routes>
                
              
            </div>
            <div className="app__footer">
                 
            </div>
            </BrowserRouter>
        </div>
    )
}

export default App
