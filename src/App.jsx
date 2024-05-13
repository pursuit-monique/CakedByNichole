
import {  Route, Routes } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import Header from './components/header';
import Footer from './components/footer';

import Index from './pages';
import Detail from './pages/detail';

import './index.css';

function App() {
  return (
    <>
    <Header />
        <Routes>
          
            <Route element={<Index />} path="/" />
            <Route element={<Detail />} path="/:id" />
          
          {/* <div className="md:flex md:justify-center">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div> */}


        </Routes>
          <Footer />
    </>
  )
}

export default App
library.add(fab, fas, far)