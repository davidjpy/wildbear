import { useRef, useState } from 'react';

import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';


const ImageSlider = () => {

    const slidesRef = useRef();
    const imageList = [slide1, slide2, slide3];
    const [initialWidth, setInitialWidth] = useState(0);
    const [counter, setCounter] = useState(0);

    const handlePrev = () => {
        const currentWidthChange = slidesRef.current.clientWidth
        slidesRef.current.style.transform = `translate(${initialWidth + currentWidthChange}px, 0px)`
        setInitialWidth(prev => prev + currentWidthChange);
        setCounter(prev => prev - 1);
    }

    const handleNext = () => {
        const currentWidthChange = slidesRef.current.clientWidth
        slidesRef.current.style.transform = `translate(${initialWidth - currentWidthChange}px, 0px)`
        setInitialWidth(prev => prev - currentWidthChange);
        setCounter(prev => prev + 1);
    }

    const logger = () => {
        console.log(slidesRef.current.style.transform, initialWidth)
    }

    return (
        <>
            <ImageSet 
                slidesRef={slidesRef}
                imageList={imageList}
                counter={counter}
            />
            <div>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
                <button onClick={logger}>logger</button>
            </div>
        </>
    );
}

const ImageSet = ({ slidesRef, imageList, counter }) => {

    return (
        <div className='slider'>
            <div className='canvas'>
                <div ref={slidesRef} className='slides'>
                    {imageList.map((item, index) => {
                        return (
                            <img src={item} alt={item} className={index === counter ? 'slides__slide slides__slide--active' : 'slides__slide'} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;