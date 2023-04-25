/**
 * This is the main function of a React app that sets up the routes and components for different pages,
 * and includes authentication and a Redux store.
 * @returns The App component is being returned, which contains the routing logic and renders different
 * components based on the current URL path. It also includes the Provider component from the
 * react-redux library to provide the Redux store to all components in the app.
 */
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
import Cart from './Components/Pages/CheckoutProduct';
import { Provider } from 'react-redux';
import store from './Store/Store';
import ElectronicsPage from './Components/Pages/ElectronicsPage';

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
            <Route path='/electronicspage' element={<ElectronicsPage/>}/>
            <Route path='/productpage' element={<ProductPage />} />
            <Route path='/checkout' element={
              <>
              <Header/>
              <Checkout/>
              </>
            }/>
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
