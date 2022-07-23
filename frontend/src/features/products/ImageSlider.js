import { useEffect, useRef, useState } from 'react';

import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';


const ImageSlider = () => {

    const slidesRef = useRef();
    const sliderRef = useRef();
    const imageList = [slide3, slide1, slide2, slide3, slide1];
    const [accumulatedWidth, setAccumulatedWidth] = useState(0);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const currentWidthChange = slidesRef.current.clientWidth
        slidesRef.current.style.transform = `translate(-${currentWidthChange}px, 0)`
        setAccumulatedWidth(-currentWidthChange)
    }, [])

    const handlePrev = () => {
        const currentWidthChange = slidesRef.current.clientWidth

        if (counter === 1) {
            slidesRef.current.style.transform = `translate(-${currentWidthChange * (imageList.length - 2)}px, 0px)`
        } else {
            slidesRef.current.style.transform = `translate(${accumulatedWidth + currentWidthChange}px, 0px)`
        }

        setAccumulatedWidth(prev => prev + currentWidthChange);
        setCounter(prev => prev - 1);
    }

    const handleNext = () => {
        const currentWidthChange = slidesRef.current.clientWidth
        slidesRef.current.style.transform = `translate(${accumulatedWidth - currentWidthChange}px, 0px)`
        setAccumulatedWidth(prev => prev - currentWidthChange);
        setCounter(prev => prev + 1);
    }

    const logger = () => {
        console.log(slidesRef.current.clientWidth, accumulatedWidth, counter)
    }

    return (
        <>
            <ImageSet
                slidesRef={slidesRef}
                sliderRef={sliderRef}
                imageList={imageList}
                counter={counter}
                handlePrev={handlePrev}
                handleNext={handleNext}
            />
            <button onClick={logger}>logger</button>
        </>
    );
}

const ImageSet = ({ slidesRef, sliderRef, imageList, counter, handlePrev, handleNext }) => {

    return (
        <div ref={sliderRef} className='slider'>
            <div className='canvas'>
                <div ref={slidesRef} className='slides'>
                    {imageList.map((item, index) => {
                        return (
                            <img key={index} src={item} alt={item}
                            onClick={index === counter - 1 ? handlePrev : handleNext}
                                // onClick={index === counter - 1 && index !== 0 
                                //     ? handlePrev : index === counter + 1 && index !== imageList.length - 1
                                //     ? handleNext : null}
                                className={index === counter 
                                    ? 'slides__slide slides__slide--active' : index === counter - 1 
                                    ? 'slides__slide slides__slide--prev' : index === counter + 1 
                                    ? 'slides__slide slides__slide--next' : 'slides__slide'}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;