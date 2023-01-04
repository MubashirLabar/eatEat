import './css/App.scss'
import {BrowserRouter, Route} from 'react-router-dom'

// Screens || Components
import Home from "./screens/Home"
import Header from './components/Header'
import Footer from './components/Footer'

global.siteName = 'eatEat'

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Route exact path='/' component={Home}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
} 

export default App;
