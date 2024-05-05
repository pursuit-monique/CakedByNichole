
import { BrowserRouter, Routes } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


import Card from './components/card';
import CardSkeleton from './components/cardSkeleton';

import './index.css';

function App() {
  return (
    <>
    <div className="md:flex md:justify-center">
      <Card />
      <Card />
      <Card />
    </div>
    <div className="md:flex md:justify-center">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
    <BrowserRouter>
      <Routes>

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
library.add(fab, fas, far)