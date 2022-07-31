import { useRef } from 'react';

import './HomePage.css';
import ImageSlider from '../features/promotion/ImageSlider';
import BillBoard from '../features/promotion/BillBoard';
import NavImages from '../features/promotion/NavImages';
import WhyUs from '../features/promotion/WhyUs';

const HomePage = () => {

    const scrollRef = useRef();

    const handleScroll = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div>
            <ImageSlider />
            <div className='homepage__container'>
                <BillBoard />
                <NavImages handleScroll={handleScroll} />
                <WhyUs scrollRef={scrollRef} />
            </div>
        </div>
    );
}

export default HomePage;