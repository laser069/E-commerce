import React from 'react'

function CartProduct({_id,name,images,quantity,price}) {
  return (
    <div>
        <img src={`http://locahost:5000/products/${images[0]}`} alt="" />
        <p>{name}</p>
        <p>{quantity*price}</p>
        
    </div>
  )
}

export default CartProduct
