import { useEffect, useRef, useState } from 'react';

import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import slide4 from '../../assets/images/slide4.jpg';
import slide5 from '../../assets/images/slide5.jpg';
import slide6 from '../../assets/images/slide6.jpg';
import slide7 from '../../assets/images/slide7.jpg';

/*
slide1 => Flaming Gorge Reservoir, United States
slide2 => Abisko, Sweden
slide3 => Joffre Lakes Trail, Mount Currie, BC, Canada
slide4 => Niederbauen-Chulm, Emmetten, Switzerland
slide5 => Holgate Glacier, Alaska, USA; Camping on Holgate Arm
slide6 => Badavut Beach, Turkey
slide7 => Enjoying sunrise while car camping over a cliff in Sedona, Arizona with girlfriend and dog.
*/

const ImageSlider = () => {

    const slidesRef = useRef();
    const imageList = [slide7, slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide1];
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
                <div className='checkboxs'>
                    {imageList.map((item, index) => {
                        if (index !== 0 && index !== imageList.length - 1) {
                            return (
                                <label className='checkbox'>
                                    <input className='checkbox__input' name='slide' type='radio'
                                        checked={counter === index} onClick={() => handleByIndex(index)} ></input>
                                    <span className='checkbox__checkmark'></span>
                                </label>
                            );
                        } else {
                            return false;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;