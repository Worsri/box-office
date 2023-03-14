import Home from './pages/Home'
import Starred from './pages/Starred'
import MainLayout from './components/MainLayout'
;


import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
            <>
            
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>

      <Route path="/" element={<Home/>}/>
      <Route path="/starred" element={<Starred/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   </> );
}

export default App;
