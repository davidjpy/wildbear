import { useEffect, useRef, useState } from 'react';
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
    const imageList = ['slide7', 'slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6', 'slide7', 'slide1'];
    const [accumulatedWidth, setAccumulatedWidth] = useState(0);
    const [currentWidthChange, setCurrentWidthChange] = useState(0);
    const [counter, setCounter] = useState(0);

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

    useEffect(() => {
        const windowWidthChange = slidesRef.current.clientWidth;
        slidesRef.current.style.transform = `translate(-${windowWidthChange}px, 0)`;
        setCurrentWidthChange(windowWidthChange);
        setAccumulatedWidth(-windowWidthChange);
        setCounter(1);
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
                currentWidthChange={currentWidthChange}
            />
            <button onClick={logger}>logger</button>
        </>
    );
}

const ImageSet = ({ slidesRef, imageList, counter, handlePrev, handleNext, handleByIndex, currentWidthChange }) => {

    return (
        <div className='slider'>
            <div className='canvas'>
                <div ref={slidesRef} className='slides'>
                    {imageList.map((item, index) => {
                        return (
                            <>
                                <img key={index} src={`/assets/images/${item}.jpg`} alt={item}
                                    onClick={index === counter - 1
                                        ? () => handlePrev(index) : index === counter + 1
                                            ? () => handleNext(index) : null}
                                    className={index === counter
                                        ? 'slides__slide slides__slide--active'
                                        : 'slides__slide slides__slide--inactive'}
                                />
                                <div className={index === counter
                                    ? 'slides__texts slides__texts--active'
                                    : 'slides__texts slides__texts--inactive'}
                                    style={{ transform: `translate(${currentWidthChange * index}px, 0)` }}>
                                    <h2 className='slides__text slides__text--header'>Hello world</h2>
                                </div>
                            </>
                        );
                    })}
                </div>
                <div className='checkboxs'>
                    {imageList.map((item, index) => {
                        if (index !== 0 && index !== imageList.length - 1) {
                            return (
                                <label key={index} className='checkbox'>
                                    <input className='checkbox__input' name='slide' type='radio' readOnly
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