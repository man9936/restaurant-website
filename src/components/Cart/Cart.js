import React,{useContext}from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/Modal'
import CartContext from '../store/cart-context'

function Cart(props) {

  const cartcntx= useContext(CartContext);
    
    const cartitems=<ul className={classes['cart-items']}>{cartcntx.items.map((item)=>{
    return( 

      <li>
        Name: {item.name} Price:{item.price} Quantity:{item.quantity}
        <button id={item.id} onClick={cartcntx.removeItem}>X</button>
      </li>
    )
    })}</ul>
    let total = 0;
    cartcntx.items.forEach((item) => {
      total += item.price * item.quantity;
    });


  return (
    <Modal onClose={props.onClose}>
        {cartitems}
        
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{total}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>

        </Modal>
  )
}

export default Cart;