import { useRef } from 'react';

import './HomePage.css';
import Slider from '../features/promotion/Slider';
import BillBoard from '../features/promotion/BillBoard';
import ImageBoard from '../features/promotion/ImageBoard';
import NewProducts from '../features/products/NewProducts'
import WhyUs from '../features/promotion/WhyUs';

const HomePage = () => {

    const scrollRef = useRef();

    const handleScroll = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div>
            <Slider />
            <div className='homepage'>
                <BillBoard />
                <ImageBoard handleScroll={handleScroll} />
                <NewProducts />
                <WhyUs scrollRef={scrollRef} />
            </div>
        </div>
    );
}

export default HomePage;