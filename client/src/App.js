import Home from "./pages/Home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Navbar from "./components/navbar/navbar";
import Single from "./pages/single/single";
import Publish from "./pages/publish/publish";
import Settings from "./pages/settings/settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/context";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={user ? <Home/> : <Register/>}/>
        <Route path="/login" element={user ? <Home/> : <Login/>}/>
        <Route path="/publish" element={user ? <Publish/> : <Register/>}/>
        <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
        <Route path="/post/:postId" element={<Single/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;