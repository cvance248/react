import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './navigation/navigation';
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path ="/" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  ) 
}
export default App;
