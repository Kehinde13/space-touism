import React from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { Header, Home } from './components'
import { Destination, Crew, Technology } from './pages'

function App() {
  return (
    <BrowserRouter>
       <Header />

       <Home />
       
       <Routes>
         <Route path="/" element={<Home />} />
       
         <Route path="/Destination" element={<Destination />} />
           
         <Route path="/Crew" element={<Crew />} />
           
         <Route path="/Technology" element={<Technology />} />
           
       </Routes>
    </BrowserRouter>
  );
}

export default App;
