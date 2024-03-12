import React from 'react'
import { useCart } from "react-use-cart"

const Itemcard = (props) => {
    const { addItem } = useCart()
    return (
        <div>
            <div className="card">
                <img src="{props.img}" alt="" />
                <div className="cart_body">
                    <h5>title: {props.title} </h5>
                    <p> discription: {props.disc}</p>
                    <button type='submit' onClick={() => addItem(props.item)}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Itemcard
