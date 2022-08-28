import './CartPage.css';
import CartItems from '../features/products/CartItems';

const CartPage = () => {
    return (
        <div className='cartpage'>
            <CartItems />
{/*             <CartSummary /> */}
        </div>
    );
}

export default CartPage;