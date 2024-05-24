import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PopularContent from './components/PopularContent';
import Gallery from './components/Gallery';
import Blogs from './components/Blogs';

function App() {
  return (
  <>
 
   <Navbar/>
   <PopularContent/>
   <Gallery/>
   <Blogs/>
  </>
  );
}

export default App;
