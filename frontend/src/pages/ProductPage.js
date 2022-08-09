import './ProductPage.css';
import SearchBar from '../features/products/SearchBar';
import LeftMeun from '../features/products/LeftMeun';

const ProductPage = () => {
    return (
        <div className='productpage'>
            <LeftMeun />
            <div className='productpage__container'>
                <SearchBar />
            </div>
        </div>
    );
}

export default ProductPage;