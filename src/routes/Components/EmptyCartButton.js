import '../styles/CartButton.css'
import { removeAllFromCart } from '../../Utils/Common'

const EmptyCartButton = () => (
    <button className="product--button-cart" onClick={() => removeAllFromCart()}>Empty cart</button>
)

export default EmptyCartButton