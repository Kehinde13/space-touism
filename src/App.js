import React from "react";
import { BrowserRouter, Navigate, Route, Routes  } from "react-router-dom";
import { Header, Home } from './components'
import { Destination, Crew, Technology } from './pages'

function App() {
  return (
    <BrowserRouter>
       <Header />

      
       
       <Routes>
         <Route path="/" element={<Home />} />
       
         <Route path="/Destination" element={<Destination />} />
           
         <Route path="/Crew" element={<Crew />} />
           
         <Route path="/Technology" element={<Technology />} />

         <Route path="*" element={<Navigate to="/" replace />} />
           
       </Routes>
    </BrowserRouter>
  );
}

export default App;
