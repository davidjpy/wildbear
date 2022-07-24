import { useEffect, useRef, useState } from 'react';

import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';

const ImageSlider = () => {

    const slidesRef = useRef();
    const imageList = [slide3, slide1, slide2, slide3, slide1];
    const [accumulatedWidth, setAccumulatedWidth] = useState(0);
    const [currentWidthChange, setCurrentWidthChange] = useState(0);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const windowWidthChange = slidesRef.current.clientWidth;
        slidesRef.current.style.transform = `translate(-${windowWidthChange}px, 0)`;
        setCurrentWidthChange(windowWidthChange);
        setAccumulatedWidth(-windowWidthChange);
    }, []);

    useEffect(() => {
        function handleResize() {
            setCurrentWidthChange(slidesRef.current.clientWidth);
            setAccumulatedWidth(-slidesRef.current.clientWidth);
            setCounter(1);
            slidesRef.current.style.transform = `translate(-${slidesRef.current.clientWidth}px, 0px)`;
        }
        window.addEventListener('resize', handleResize);
    });

    const handlePrev = (index) => {
        if (counter === 1) {
            const lastSlideWidth = currentWidthChange * (imageList.length - 2);
            slidesRef.current.style.transform = `translate(-${lastSlideWidth}px, 0px)`;
            setAccumulatedWidth(-lastSlideWidth);
            setCounter(imageList.length - 2);
        } else {
            slidesRef.current.style.transform = `translate(${accumulatedWidth + currentWidthChange}px, 0px)`;
            setAccumulatedWidth(prev => prev + currentWidthChange);
            setCounter(index);
        }
    };

    const handleNext = (index) => {
        if (counter === imageList.length - 2) {
            slidesRef.current.style.transform = `translate(${-currentWidthChange}px, 0px)`;
            setAccumulatedWidth(-currentWidthChange);
            setCounter(1);
        } else {
            slidesRef.current.style.transform = `translate(${accumulatedWidth - currentWidthChange}px, 0px)`;
            setAccumulatedWidth(prev => prev - currentWidthChange);
            setCounter(index);
        }
    };

    const handleByIndex = (index) => {
        slidesRef.current.style.transform = `translate(-${currentWidthChange * index}px, 0px)`;
        setAccumulatedWidth(-currentWidthChange * index);
        setCounter(index);
    };

    const logger = () => {
        console.log(slidesRef.current.clientWidth, accumulatedWidth, counter);
    }

    return (
        <>
            <ImageSet
                slidesRef={slidesRef}
                imageList={imageList}
                counter={counter}
                setCounter={setCounter}
                handlePrev={handlePrev}
                handleNext={handleNext}
                handleByIndex={handleByIndex}
            />
            <button onClick={logger}>logger</button>
        </>
    );
}

const ImageSet = ({ slidesRef, imageList, counter, handlePrev, handleNext, handleByIndex }) => {

    return (
        <div className='slider'>
            <div className='canvas'>
                <div ref={slidesRef} className='slides'>
                    {imageList.map((item, index) => {
                        return (
                            <img key={index} src={item} alt={item}
                                onClick={index === counter - 1
                                    ? () => handlePrev(index) : index === counter + 1 
                                    ? () => handleNext(index) : null}
                                className={index === counter
                                    ? 'slides__slide slides__slide--active' : index === counter - 1
                                        ? 'slides__slide slides__slide--prev' : index === counter + 1
                                            ? 'slides__slide slides__slide--next' : 'slides__slide'}
                            />
                        );
                    })}
                </div>
                <div className='canvas__checkboxs'>
                    <input className='canvas__checkbox' value={1} name='slide' type='radio' 
                        checked={counter === 1} onClick={() => handleByIndex(1)} />
                    <input className='canvas__checkbox' value={2} name='slide' type='radio'
                        checked={counter === 2} onClick={() => handleByIndex(2)} />
                    <input className='canvas__checkbox' value={3} name='slide' type='radio' 
                        checked={counter === 3} onClick={() => handleByIndex(3)} />
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;