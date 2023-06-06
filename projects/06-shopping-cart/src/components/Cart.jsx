import './Cart.css'
import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

function CartItem ({ thumbmail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbmail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>
          +
        </button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckBoxId = useId()
  const { cart, clearCart, addToCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckBoxId} hidden />
      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart({ product })}
                {...product}
              />
            ))
            }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
