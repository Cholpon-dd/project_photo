import axios from "axios";
import React, { useReducer, useState } from "react";
import { calcSubPrice, calcTotalPrice, getCountProductsInCart } from "../helpers/calcPrice";
import { JSON_API } from "../helpers/constants";

export const productsContext = React.createContext();

const INIT_STATE = {
  productsData: [],
  filterData: [],
  paginationPages: 1,
  productDetails: null,
  cardToEdit: null,
  searchData: [],
  openModal: false,
  cart: {},
  cartLength: getCountProductsInCart(),
  favourite:{}
  
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        productsData: action.payload.data
      }
    case "GET_PRODUCTS":
      return {
        ...state,
        productsData: action.payload.data,
        paginationPages: Math.ceil(action.payload.headers["x-total-count"] / 4),
      }
      case "GET_PRODUCT_DETAILS":
        return { ...state, productDetails: action.payload };
      case "EDIT_CARD":
        return { ...state, cardToEdit: action.payload };
      case "GET_CART":
        return {...state,cart:action.payload}
        case  "CHANGE_CART_COUNT":
          return {...state, cartLength:action.payload}
    case "TOGGLE_MODAL":
      return {...state, openModal: action.payload}
      case "GET_FAVOURITE":
      return {...state,   favourite: action.payload}
      case "CHANGE_FAVOURITE_COUNT":
        return {...state, favouriteLength: action.payload}
    default:
      return state;
  }
};
const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

   //create
  const postProduct = (products, his) => {
    axios.post("http://localhost:8000/products", products);
    getProducts(his);
  }
  
  async function getProducts(history) {
    console.log(history)
    const search = new URLSearchParams(history.location.search);
    console.log(search, 'search')
    search.set("_limit", 4);
    history.push(`${history.location.pathname}?${search.toString()}`);
    let res = await axios.get(`${JSON_API}${window.location.search}`);
    // console.log(res);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res,
    });
  }
  async function getProductDetails(id) {
    let { data } = await axios(`http://localhost:8000/products/${id}`);
    console.log(data);
    dispatch({
        type: "GET_PRODUCT_DETAILS",
        payload: data,
    });
}
   //cart
  function addProductToCart(product){
    let cart =JSON.parse(localStorage.getItem('cart'))
    if(!cart){
      cart ={
        products: [],
        totalPrice: 0
      }
    }
    let newProduct ={
      item: product,
      count: 1,
      subPrice: 0
    }

    let filteredCart =cart.products.filter(elem => elem.item.id===product.id)
    if(filteredCart.length>0){
      cart.products=cart.products.filter(elem => elem.item.id!==product.id)
    }else{
      cart.products.push(newProduct)
    }
    
    newProduct.subPrice=calcSubPrice(newProduct)
    cart.totalPrice=calcTotalPrice(cart.products)
    localStorage.setItem("cart", JSON.stringify(cart))

    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length
    })
  }
 function getCart(){
   let cart =JSON.parse(localStorage.getItem('cart'))
   if(!cart){
     cart ={
       products: [],
       totalPrice: 0
     }
   }
   dispatch({
     type: "GET_CART",
     payload: cart
   })
 }
 function changeProductCount(count, id){
   if(count < 1) {
     count = 0
   }
  let cart =JSON.parse(localStorage.getItem('cart'))
  cart.products= cart.products.map(elem=>{
    if(elem.item.id===id){
      elem.count = count
      elem.subPrice =calcSubPrice(elem)
    }
    return elem
  })
  cart.totalPrice=calcTotalPrice(cart.products)
  localStorage.setItem("cart", JSON.stringify(cart))
  getCart()
 }
 function checkProductInCart(id){     
  let cart =JSON.parse(localStorage.getItem('cart'))
  if(!cart){
    cart ={
      products: [],
      totalPrice: 0
    }
  }
  let newCart= cart.products.filter(elem=>elem.item.id===id)
  return newCart.length>0 ? true : false
 }

 //delete cart
   function deleteCartProducts(id){
    // localStorage.removeItem(key);
  let toDelete=JSON.parse( localStorage.getItem('cart')) 
  toDelete.products =toDelete.products.filter(elem=>elem.item.id!==id)
    localStorage.setItem("cart",JSON.stringify(toDelete))
    
    getCart()

    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: toDelete.products.length
    })
     
   } 
    //edit
   const editCard = async (id, history) => {
    let { data } = await axios(`http://localhost:8000/products/${id}`);
    dispatch({
      type: "EDIT_CARD",
      payload: data,
    });
    setOpenModal(true)
  };
  const saveEditedCard = async (editedCard, history) => {
    console.log(editedCard)
    await axios.patch(`http://localhost:8000/products/${editedCard.id}`, editedCard);
    getProducts(history)
  };
   async function deleteCard(id, history) {
     console.log(history)
    await axios.delete(`http://localhost:8000/products/${id}`);
    getProducts(history);
}
async function searchh(value) {
  let { data } = await axios(`http://localhost:8000/products?q=${value}`);
  dispatch({
      type: "SEARCH",
      payload: data,
  });
}

const setOpenModal = (bool) => {
  dispatch({
    type: 'TOGGLE_MODAL',
    payload: bool
  })
}

//favourite
function addFavourite(product){
  let favourite =JSON.parse(localStorage.getItem("favourite"));
  if (!favourite){
    favourite={
      products:[]
     
    }
  }
  let newProduct ={
    item: product,
    
  }
  let filteredFavourite = favourite.products.filter(
    (elem) => elem.item.id === product.id
);
 if (filteredFavourite.length >0) {
   favourite.products.filter((elem)=> elem.item.id !== product.id
   )} else {
     favourite.products.push(newProduct)
   }
   
   localStorage.setItem("favourite", JSON.stringify(favourite));
   dispatch({
     type: "CHANGE_FAVOURITE_COUNT",
     payload: favourite.products.length
   })
 }
 function getFavourite(){
   let favourite = JSON.parse(localStorage.getItem("favourite"))
   if(!favourite){
     favourite={
     products:[],
     
   }
 } 
 dispatch({
   type: "GET_FAVOURITE",
   payload: favourite
 })
}
 function changeFavouriteCount(count,id){
   let favourite =JSON.parse(localStorage.getItem("favourite"))
   favourite.product = favourite.products.map((elem) => {
    if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
 }
 return elem
   })
favourite.totalPrice = calcTotalPrice(favourite.product)
localStorage.setItem("favourite", JSON.stringify(favourite))
getFavourite()
}
function checkProductInFavourite(id){
  let favourite =JSON.parse(localStorage.getItem("favourite"))
  if(favourite){
    let newFavourite = favourite.products.filter((elem)=>elem.item.id ===id)
  return newFavourite.length>0 ? true : false
  } else{
    favourite={
      product:[],
      totalPrice:0
    }
  }

}
function deleteFavourite(id){
  let toDelete = JSON.parse(localStorage.getItem("favourite"))
  toDelete.products=toDelete.products.filter((elem)=>elem.item.id !==id)
  localStorage.setItem("favourite", JSON.stringify(toDelete))
  getFavourite()
  dispatch({
    type: "CHANGE_FAVOURITE_COUNT",
    payload: toDelete.products.length
  })
}
  return (
    <productsContext.Provider
      value={{
        productsData: state.productsData,
        paginationPages: state.paginationPages,
        cardToEdit: state.cardToEdit,
        cart: state.cart,
        cartLength: state.cartLength,
        searchData: state.searchData,
        openModal: state.openModal,
        favourite: state.favourite,
        favouriteLength: state.favouriteLength,
        productDetails: state.productDetails,
        setOpenModal,
        getProducts,
        getProductDetails,
        addProductToCart,
        searchh,
        getCart,
        editCard,
        saveEditedCard,
        changeProductCount,
        checkProductInCart,
        deleteCartProducts,
        deleteCard,
        postProduct,
        addFavourite,
        getFavourite,
        changeFavouriteCount,
        checkProductInFavourite,
        deleteFavourite,
         
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
