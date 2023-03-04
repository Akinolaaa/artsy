import {Routes, Route, Switch} from 'react-router-dom';
import Navigation from './components/navigation.component';
import ProductDescription from './components/product-description';
import Auction from './routes/auction.route';
import Drop from './routes/drop.route';
import Home from './routes/home.route';
import Product from './routes/product.route';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/productdescription/:artId' element={<ProductDescription />} ></Route>
        <Route path='/auction' element={<Auction />}></Route>
        <Route path='/drop' element={<Drop />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
