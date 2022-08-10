import { useRef } from 'react';

import './HomePage.css';
import Slider from '../common/component/homepage/Slider';
import BillBoard from '../common/component/homepage/BillBoard';
import ImageBoard from '../common/component/homepage/ImageBoard';
import NewProducts from '../features/products/NewProducts';
import WhyUs from '../common/component/homepage/WhyUs';

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