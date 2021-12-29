import React, { useContext,useEffect, useState} from 'react'
import { productsContext } from '../../contexts/ProductsContext'
import DeleteIcon from '@material-ui/icons/Delete';
import "../Cart/Cart.css"
import {calcTotalPrice} from '../../helpers/calcPrice'
import IconButton from "@material-ui/core/IconButton";
import Modal from '../Modal/Modal'

const Cart = () => {
    const {getCart, cart, changeProductCount, deleteCartProducts} =useContext(productsContext)
    const [totalPrice, setTotalPrice] = useState();
    function orderAction() {
        localStorage.setItem("cart", JSON.stringify(0));
        setModal({ ...modal, modal1: true });
    }

    useEffect(()=>{
        getCart()
    },[])
    const [modal, setModal] = useState({ modal1: false });
    useEffect(() => {
        if (cart?.products && cart?.products.length > 0) {
            setTotalPrice(calcTotalPrice(cart.products));
        }
    }, [cart]);

    return (
        <div className="cart" >
           
            {cart.products ? (

            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>SubPrice</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.products.map(elem=>(
                        <tr key={elem.item.id}>
                            <td><img className="img-cart"  src={elem.item.image} alt="product-img"/></td>
                            <td>{elem.item.title}</td>
                            <td>{elem.item.price}</td>
                            <td><input className="inp-cart" style={{textAlign:"center"}} type="number"
                             value={elem.count}
                             onChange={(e)=> changeProductCount(e.target.value, elem.item.id)}/></td>
                            <td>{elem.subPrice}</td>
                            <IconButton style={{color:"#0d5168", marginTop:"90px"}}
                            onClick={()=>deleteCartProducts(elem.item.id)}><DeleteIcon/></IconButton> 
                        </tr>
                       
                        ))}
                    </tbody>
                </table>
                <h4 className="total-price">
                        Total: {calcTotalPrice(cart.products)} сом
                    </h4>

                    <button className="btn-form" onClick={orderAction}>
                        Order
                    </button>
                </div>
            ) : (
                <h1 className="cart-noprod" style={{ textAlign: "center" }}>
                    Корзина пуста
                </h1>
            )}
            <Modal
                title={"Modal 1 Title"}
                isOpened={modal.modal1}
                onModalClose={() => setModal({ ...modal, modal1: false })}
                totalPrice={totalPrice}
            />
        </div>
    );
};
export default Cart;
