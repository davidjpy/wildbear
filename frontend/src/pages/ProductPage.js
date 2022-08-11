import './ProductPage.css';
import SearchBar from '../features/products/SearchBar';
import LeftMeun from '../features/products/LeftMeun';
import Products from '../features/products/Products';

const ProductPage = () => {
    return (
        <div className='productpage'>
            <LeftMeun />
            <div className='productpage__container'>
                <SearchBar />
                <Products />
            </div>
        </div>
    );
}

export default ProductPage;