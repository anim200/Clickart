import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Success from './pages/Success'
import { useSelector } from 'react-redux';


function App() {
   // Example: determine if user is logged in
   const user=useSelector((state)=>state.user.currentUser)
   console.log(user);

  return (
   <Router>
   <Routes>
     {/* Home route */}
     <Route path="/" element={<Home />} />

     {/* Products routes */}
     <Route path="/products/:category" element={<ProductList />} />
     <Route path="/product/:id" element={<Product />} />

     {/* Cart route */}
     <Route path="/cart" element={<Cart />} />
     <Route path="/success" element={<Success />} />


     {/* Login route */}
     <Route
       path="/login"
       element={
         user ? (
           <Navigate to="/" />
         ) : (
           <Login />
         )
       }
     />

     {/* Register route */}
     <Route
       path="/register"
       element={
         user ? (
           <Navigate to="/" />
         ) : (
           <Register />
         )
       }
     />
    
   </Routes>
 </Router>
  );
}

export default App;

