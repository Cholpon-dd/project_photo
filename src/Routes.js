import { SignalCellularAltSharp } from "@material-ui/icons";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from './components/Cart/Cart'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { MainList } from "./components/MainList/MainList";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import PaymentForm from "./components/Payment/Payment";
// import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./contexts/AuthContext";
import ProductsContextProvider from "./contexts/ProductsContext";
import Footer from "./components/Footer/Footer"
import AddProduct from "./components/AddProducts/AddProducts"
import  Favourite from "./components/Favourite/Favourite"
import CommentContextProvider from "./contexts/CommentContext";
import SignIn from "./components/SignIn/SignIn";
import Detail from "./components/Description/Detail";

const Routes = () =>
 {
  return (
    <ProductsContextProvider>
      <AuthContextProvider>
        <CommentContextProvider>
      <BrowserRouter>
        <Header />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={SignUp}/>
          <Route exact path="/add" component={AddProduct}/>
          <Route exact path="/signin" component={SignIn}/>
          {/* <Route exact path="/signin" component={SignIn}/> */}
          <Route exact path="/cart" component={Cart}/>
          <Route exact path='/payment' component={PaymentForm}/>
          <Route exact path="/order" component={OrderSummary}/>
          <Route exact path="/main" component={MainList}/>
          <Route exact path="/favourites" component={Favourite}/>
          <Route exact path="/detail/:id" component={Detail}/> 
        </Switch>

        <Footer/>
      </BrowserRouter>
      </CommentContextProvider>
      </AuthContextProvider>
    </ProductsContextProvider>
  );
};

export default Routes;
