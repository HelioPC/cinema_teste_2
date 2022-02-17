import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Other from "./pages/Other"

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/choose' element={<Other />} />
            </Routes>
        </BrowserRouter>
    )
}