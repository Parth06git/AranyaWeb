import About from './Components/About';
import Blog from './Components/Blog';
import Members2 from './Components/Members2';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import RecEventState from './context/recEvents/recEventState';
import AddData from './Components/AddData';


function App() {
  return (
    <RecEventState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/members' element={<Members2 />} />
          <Route exact path='/db/aranya/owner' element={<AddData />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecEventState>
  );
}

export default App;
