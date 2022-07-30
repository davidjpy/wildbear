import './HomePage.css';
import ImageSlider from '../features/promotion/ImageSlider';
import BillBoard from '../features/promotion/BillBoard';
import NavImages from '../features/promotion/NavImages';
import WhyUs from '../features/promotion/WhyUs';

const HomePage = () => {
    return (
        <div>
            <ImageSlider />
            <div className='homepage__container'>
                <BillBoard />
                {/* <NavImages /> */}
                <WhyUs />
            </div>
        </div>
    );
}

export default HomePage;