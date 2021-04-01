import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Header from './Components/Header'
import Products from './Components/Products'
import Product from './Components/Product'
import Contact from './Components/Contact';
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <div className="content">
          <Routes>
            <Route path="/" exact element={<Products />} />
            <Route path="/product/:id" exact element={<Product />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
