import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import CartPage from './components/Cart'
import  './App.css';
import {useState} from 'react';

function App() {
  return (
       <Router>
                                     <Header/>
                                      <Routes>
                                               <Route path='/' element={<Home />}>
                                            </Route>
                                        
                                            <Route path='/cart' element={<CartPage/>}>
                                            </Route>
                                      </Routes>
       </Router>
  )
}

export default App