import './css/App.scss'
import {BrowserRouter, Route} from 'react-router-dom'

// Screens || Components
import Home from "./screens/Home"
import Booking from "./screens/Booking"
import Store from "./screens/Store"
import Shop from "./screens/Shop"
import Header from './components/Header'
import Footer from './components/Footer'

global.siteName = 'eatEat'

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/booking' component={Booking}/>
        <Route exact path='/store' component={Store}/>
        <Route exact path='/shop' component={Shop}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
} 

export default App;
