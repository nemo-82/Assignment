import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Home';
// import { ReactDOM } from 'react'
import Navbar from './navbar'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
     </BrowserRouter>
  );
}

export default App;
