
import React,{useContext, useState} from 'react'
import {NavLink, useHistory} from "react-router-dom"
import "../Header/Header.css"
import Logorose  from "../../assets/images/logorose.jpg"
import { productsContext } from '../../contexts/ProductsContext'


export default function Header(){
  const history = useHistory()
    const [searchValue, setSearchValue] = useState(getSearchValue);
    const [click, setClick] = useState(false);
    const handleClick =()=>setClick(!click);
    const { getProducts } = useContext(productsContext)

  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search);
    search.set("q", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    setSearchValue(e.target.value);
    getProducts(history);
  };

  function getSearchValue() {
    const search = new URLSearchParams(history.location.search);
    return search.get("q");
  }
    return (
        <>
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/main" className="nav-logo">
                    <img className="logo"                
                    src={Logorose} style={{width:'60px',height:'50px', paddingTop:"15px"}}
                    alt="logo"/>     
                </NavLink>
                <input type="text" onChange={handleValue} placeholder="Search..." className="seacrh"/>      
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item"><NavLink exact to="/main" activeClassName="active" className="nav-links" onClick={handleClick}>Home</NavLink></li>
                    <li className="nav-item"><NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>Gifts</NavLink></li>
                    <li className="nav-item"><NavLink exact to="/cart" activeClassName="active" className="nav-links" onClick={handleClick}>Cart</NavLink></li>
                    <li className="nav-item"><NavLink exact to="/favourites" activeClassName="active" className="nav-links" onClick={handleClick}>Favourites</NavLink></li>
                    <li className="nav-item"><NavLink exact to="/login" activeClassName="active" className="nav-links" onClick={handleClick}>LogIn</NavLink></li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div>
            </div>
        </nav>
            
        </>
    )
}












