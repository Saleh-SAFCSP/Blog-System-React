import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import AddBlog from './pages/AddBlog';
import Blog from './pages/Blog';
const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/add-blog' element={<AddBlog />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
