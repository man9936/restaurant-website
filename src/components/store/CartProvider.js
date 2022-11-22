import React,{useState} from 'react';
import CartContext from './cart-context';

function CartProvider(props) {
    const [items,updateItems]= useState([]);

    const addItemToCartHandler=(newItem)=>{
       const quantity= getQuantity(newItem.id);

       if(quantity === 0){
        updateItems([...items,newItem]);

       }else{
        updateItems(prevItems=>{
          prevItems.map((item)=>{
            return (item.id === newItem.id ? {...item,quantity: Number(item.quantity) + 1} : item)
           }
            
          )
        }
         
        )

       }

       
        console.log('inside addItemToCartHandler',cartContext);
        

    };

    const removeItemToCartHandler=(newItem)=>{
      const quantity= getQuantity(newItem.id);

      if(quantity == 1){
        deleteItem(newItem.id);
      }else{
        updateItems(prevItems=>{
          prevItems.map((item)=>{
            return (item.id === newItem.id ? {...item,quantity: Number(item.quantity) + 1} : item)
           }
            
          )
        }
         
        )
      }
        


    };

    const deleteItem=(id)=>{
      updateItems(items=>
        items.filter(item=>{
           return item.id!= id;
        })
      )};

    function getQuantity(id){

      const quantity= items.find(item => item.id === id)?.quantity;

      if(quantity === undefined){
        return 0;
      }
      return quantity;
    }

    

    const cartContext={
        items:items,
        totalAmount:0,
        addItem: addItemToCartHandler,
        removeItem:removeItemToCartHandler,
        getQuantity:getQuantity,
        deleteItem:deleteItem
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider