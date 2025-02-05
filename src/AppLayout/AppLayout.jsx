import { Route,BrowserRouter,Routes } from "react-router-dom"
import About from "../pages/About/About"
import Home from "../pages/Home/home"
import Products from "../pages/products/products"
import Contact from "../pages/contact/contact"
import Navbar from "../components/navbar/navbar"


function AppLayout(){
    return(
        <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default AppLayout