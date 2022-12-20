import {Routes, Route} from 'react-router-dom';
import Navigation from './components/navigation.component';
import Home from './routes/home.route';
import Product from './routes/product.route';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
