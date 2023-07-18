import NavScroll from './components/nav'
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About' 
import Service from './pages/Services';
import LatestNews from './pages/LatestNews';
import ContactUs from './pages/ContactUs'
import Blog from './pages/Bloge';
import NotFoundExeption from './pages/NotFound';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavScroll/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Service/>}/>
            <Route path="/latestnews" element={<LatestNews/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/bloge" element={<Blog/>}/>
            <Route path="*" element={<NotFoundExeption/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
