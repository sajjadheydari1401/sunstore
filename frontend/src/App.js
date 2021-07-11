import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <ProtectedRoute path="/order/:id" component={OrderScreen} />
            <ProtectedRoute path="/shipping" component={ShippingScreen} />
            <ProtectedRoute path="/payment" component={PaymentScreen} />
            <ProtectedRoute path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <ProtectedRoute path="/profile" component={ProfileScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <ProtectedRoute path="/cart/:id?" component={CartScreen} />
            <ProtectedRoute path="/admin/userlist" component={UserListScreen} />
            <ProtectedRoute path="/admin/user/:id/edit" component={UserEditScreen} />
            <ProtectedRoute path="/admin/productlist" component={ProductListScreen} />
            <ProtectedRoute
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />
            <ProtectedRoute path="/admin/orderlist" component={OrderListScreen} />
            <Route path="/" component={HomeScreen} exact />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;