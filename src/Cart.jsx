import React from 'react'
import { useCart } from 'react-use-cart'

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart()
    if (isEmpty) return <h1>Your cart is empty</h1>
    console.log(items);
    return (
        <div>
            <h1>Cart</h1>
            <div className="cart_container">
                <div className="cart_item">
                    <div className="cart_box">
                        <h5>Cart ({totalUniqueItems}) Total items: ({totalItems})</h5>
                        <div className="cart_body">
                            {items.map((item,index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} alt="" />
                                        </td>
                                        <td>
                                            <h5>{item.desc}</h5>
                                        </td>
                                        <td>
                                            <h1>{item.title}</h1>
                                        </td>
                                        <td>
                                            <b>{item.price}</b>
                                        </td>
                                        <td>
                                            <b>({item.quantity})</b>
                                        </td>
                                        <td>
                                            <button onClick={()=> updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                            <button onClick={()=> updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                            <button onClick={() => removeItem(item.id)}>removeItem</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </div>
                    <div className="total">
                        <h1>Total price {cartTotal}</h1>
                    </div>
                    <div className="clear">
                        <button onClick={()=> emptyCart()}>Clear Cart</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart
