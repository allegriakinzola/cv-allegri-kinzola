import './App.css';
import Knowledges from './pages/Knowledges';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Nofound from './pages/Nofound';
import Portfolio from './pages/Portfolio';
import  { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './styles/style.scss'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}  />
        <Route path='contact' element={<Contact/>} />
        <Route path='portfolio' element={<Portfolio/>} />
        <Route  path='knowledges' element={< Knowledges/>} />
        <Route path='*' element={<Nofound/>}/>
      </Routes>
    </Router>
  )
}

export default App;
