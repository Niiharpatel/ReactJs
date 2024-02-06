import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderCom from "../Ui/Components/Header/HeaderCom";
import FooterCom from "../Ui/Components/Footer/FooterCom";
import HomePage from "../Ui/Pages/HomePage/HomePage";
import AboutPage from "../Ui/Pages/AboutPage/AboutPage";
import BlogPage from "../Ui/Pages/BlogPage/BlogPage";
import ContactPage from "../Ui/Pages/ContactPage/ContactPage";
import LoginPage from "../Ui/Pages/LoginPage/LoginPage";
import RegistrationPage from "../Ui/Pages/RegistrationPage/RegistrationPage";
import { Provider } from "react-redux";
import { store } from "../Redux/app/store";
import DashBoard from "../Ui/Pages/Admin/DashBoard/DashBoard";
import Order from "../Ui/Pages/Admin/Order/Order";
import Users from "../Ui/Pages/Admin/Users/Users";
import AllProduct from "../Ui/Pages/Admin/Products/AllProduct";
import Shop from "../Ui/Pages/ShopPage/Shop";
import AllProductUser from "../Ui/Pages/AllProduct/AllProductUser";
import Cart from "../Ui/Pages/CartPage/Cart";
import NotFound from "../Ui/Pages/CartPage/NotFound";

export default function Router() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <HeaderCom />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/blog" element={<BlogPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/registration" element={<RegistrationPage />} />
            <Route exact path="/dashboard" element={<DashBoard />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/allproduct" element={<AllProduct />} />
            <Route exact path="/Shop/:type" element={<AllProductUser />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/cart" element={<NotFound />} />
          </Routes>
          <FooterCom />
        </BrowserRouter>
      </Provider>
    </>
  );
}
