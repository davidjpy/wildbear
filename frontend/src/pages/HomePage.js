import './HomePage.css';
import ImageSlider from '../features/promotion/ImageSlider';
import BillBoard from '../features/promotion/BillBoard';

const HomePage = () => {
    return (
        <div>
            <ImageSlider />
            <BillBoard />
        </div>
    );
}

export default HomePage;