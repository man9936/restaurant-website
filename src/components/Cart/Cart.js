import React from 'react'
import classes from './cart.module.css'

function Cart(props) {
    const cartitems=<ul className={classes['cart-items']}>{[{id:'c1',name:'manch',price:12.99}].map((item)=><li>{item.name}</li>)}</ul>


  return (
    
        {cartitems}
        
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>123.11</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>

   
  )
}

export default Cart