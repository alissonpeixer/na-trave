import { Routes, Route, Link } from "react-router-dom";

import { Home } from './Pages/Home'
import { SignUp } from "./Pages/SignUp";
import { NotFound } from "./Pages/NotFound";
const App = () =>{ 
  return(

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/signup" element={<SignUp />} />

      <Route path="*" element={<NotFound/>} />
    </Routes>
 
  )
}

export default App;