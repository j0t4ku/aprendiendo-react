import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { addCart, removeFromCart, cart } = useCart()

  const checkProducInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
                    products.slice(0, 10).map((product) => {
                      const isProductInCart = checkProducInCart(product)

                      return (
                        <li key={product.id}>
                          <img src={product.thumbnail} alt={product.title} />
                          <div>
                            <strong>{product.title}</strong> - ${product.price}
                          </div>
                          <div>
                            <button
                              style={{
                                backgroundColor: isProductInCart ? 'red' : '#099f'
                              }} onClick={() => {
                                isProductInCart
                                  ? removeFromCart({ product })
                                  : addCart({ product })
                              }}
                            >
                              {
                              isProductInCart
                                ? <RemoveFromCartIcon />
                                : <AddToCartIcon />
                             }
                            </button>
                          </div>
                        </li>
                      )
                    })
        }
      </ul>
    </main>
  )
}
