
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './screens/Home';
import Company from './screens/Company'
import Resources from './screens/Resources'
import Contact from './screens/Contact'



function App() {
  return (
    <div className='App'>
   <BrowserRouter>
    <Routes>
        <Route path      = "/" element          = {<Home/>}/>
        <Route path      = "/company" element   = {<Company/>}/>
        <Route path      = "/resources" element = {<Resources/>}/>
        <Route path      = "/contact" element   = {<Contact/>}/>
        <Route component = {Error}/>
    </Routes>
  </BrowserRouter> 
    </div>
  );
}

export default App;
