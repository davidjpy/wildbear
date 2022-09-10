import { useSelector } from 'react-redux';

import './CartPage.css';
import CartItems from '../features/products/CartItems';
import CartSummary from '../features/products/CartSummary'
import { selectCartItem } from '../features/products/productsSlice';

const CartPage = () => {

    const currentCartItem = useSelector(selectCartItem);

    return (
        <div className='cartpage'>
            <CartItems 
                currentCartItem={currentCartItem}
            />
            <CartSummary
                currentCartItem={currentCartItem}
            />
        </div>
    );
}

export default CartPage;