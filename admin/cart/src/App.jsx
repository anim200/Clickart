import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser2/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Logout from "./logout";
function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser)
  //const admin = currentUser?.isAdmin;
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (currentUser === null) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [currentUser]);

  if (!loggedIn) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/logout" element={<Logout />} /> {/* Add Logout route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      </div>
    </Router>
  );
}
export default App;




