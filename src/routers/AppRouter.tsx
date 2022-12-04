import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../pages/Home'
import ProductsDetails from '../pages/ProductDetails'
import Products from '../pages/Products'
const AppRouter = () => {
  return (
    <BrowserRouter>
		<Nav />
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/products/:id' element={<ProductsDetails/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter