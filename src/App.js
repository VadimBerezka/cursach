import './App.css';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Shop } from './shop/Shop';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Authorization } from './login/Login';
import { Cart } from './cart/Cart';
import { Library } from './library/Library';
import { Page } from './page/Page';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/page" element={<Page/>}/>
        <Route path="/login" element={<Authorization/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/library" element={<Library/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
