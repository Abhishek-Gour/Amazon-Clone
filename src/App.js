import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeaderBottom from './Components/HeaderBottom';
import Products from './Components/Products';
import images from "./images";
import ImageSlider from "./ImageSlider";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import ProductPage from './Components/Pages/ProductPage';
import Cart from './Components/Pages/Cart';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
  useEffect(() => {
    //Will only run when the app components loads......
    auth.onAuthStateChanged(authUser => {


      if (authUser) {
        // It check The user was  logged in or User is just logged in

      } else {
        // It user is logged out


      }
    })
  }, [])
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>


          <Routes>
            <Route path='/productpage' element={<ProductPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout'
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={
              <>
                <Header />
                <HeaderBottom />
                <ImageSlider images={images} />
                <Products />
                <Footer />
              </>
            } />
          </Routes>
        </Router>
      </Provider>
    </div>

  );
}

export default App;
