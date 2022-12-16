import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation.component';
import Home from './routes/Home.route';
import Product from './routes/Product.route';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
