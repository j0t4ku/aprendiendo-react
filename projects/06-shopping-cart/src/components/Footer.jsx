import { useCart } from '../hooks/useCart'
import { useFilter } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
  const { filters } = useFilter()
  const { cart } = useCart()
  return (
    <footer>
      {
        JSON.stringify(filters, null, 2)
      }
      {
        JSON.stringify(cart, null, 2)
      }
      {/* <h4>Prueba tecnica de React</h4>
      <span>with @midudev </span>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  )
}
