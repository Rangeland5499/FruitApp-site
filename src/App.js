import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Products from "./Pages/ProductCatalogue";
import { useEffect } from "react";

import SigIn from "./Pages/Login";
import TokenContext from "./Contexts/TokenContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import Orders from "./Pages/Orders";
import AddProduct from "./Components/AddProduct";
import CustomerBase from "./Pages/Customerbase";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <Routes>
        {token ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/customers" element={<CustomerBase />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        ) : (
          <Route path="/" element={<SigIn />} />
        )}
      </Routes>
    </TokenContext.Provider>
  );
}

export default App;
