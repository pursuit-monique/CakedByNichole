
import { Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Header from './components/header';
import Footer from './components/footer';
import Index from './pages';
import Detail from './pages/detail';
import Shop from './pages/Shop';
import CustomCakes from './pages/CustomCakes';
import Treats from './pages/Treats';
import About from './pages/About';
import Blog from './pages/Blog';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <div className="md:flex md:justify-center">
        <Routes>
          <Route element={<Index />} path="/" />
          <Route element={<Detail />} path="/:id" />
          <Route element={<Shop />} path="/Shop" />
          <Route element={<CustomCakes />} path="/CustomCakes" />
          <Route element={<Treats />} path="/Treats" />
          <Route element={<About />} path="/About" />
          <Route element={<Blog />} path="/Blog" />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
library.add(fab, fas, far);
