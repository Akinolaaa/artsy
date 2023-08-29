import { lazy, Suspense } from 'react';
import {Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './components/spinner/spinner.component';
import Navigation from './components/navigation/navigation.component';
// const Navigation = lazy(() => import('./components/navigation/navigation.component'));

const Home = lazy(() => import('./routes/home.route'));
const Product = lazy(() => import('./routes/product.route'));
const Checkout = lazy(() => import('./routes/checkout.route'));
const Drop = lazy(() => import('./routes/drop.route'));
const Auction = lazy(() => import('./routes/auction.route'));
const ProductDescription = lazy(() => import('./components/product-description/product-description.component'));

// connect to supabase auth
function App() {

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />}></Route>
          <Route path='/product'>
            <Route index element={<Product />}></Route>
            <Route path='productdescription/:artId' element={<ProductDescription />} ></Route>
          </Route>
          <Route path='/auction' element={<Auction />}></Route>
          <Route path='/drop' element={<Drop />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Route>
      </Routes>
      <ToastContainer position='top-center' />
    </Suspense>
  );
}

export default App;
