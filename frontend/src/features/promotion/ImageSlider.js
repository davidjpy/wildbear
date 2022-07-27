import { Fragment, useEffect, useRef, useState } from 'react';
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
    const imageList = [
        {
            slide: 'slide7',
            title: 'Abisko, Sweden',
            body: 'The village’s northern Sámi name Ábeskovvu means “the forest by the great water”, where “the great water” refers to Scandinavia’s largest mountain lake Torneträsk.',
            quote: '“I Followed My Heart, And It Led Me To The Northern Lights.”'
        },
        {
            slide: 'slide1',
            title: 'Willamette National Forest, USA',
            body: 'Home to eight wilderness areas, including the popular Three Sisters Wilderness and Mt. Jefferson Wilderness, a variety of backpacking and day hiking opportunities, waterfalls, and much more!',
            quote: '“Life Is The Best When You’re Camping With Your Loved Ones.”'
        },
        {
            slide: 'slide2',
            title: 'Ranca Upas Ciwidey, Indonesia',
            body: 'The natural panorama that makes you feel you’re in a different world, the delightful deer sanctuary, and the morning mist make your photos here very Instagramable!',
            quote: '“Life Is Better By The Camp Fire.”'
        },
        {
            slide: 'slide3',
            title: 'Cathedral Provincial Park, Canada',
            body: 'A subalpine plateau of fish-filled lakes, unique geology, alpine meadows and, most importantly, plenty of hikeable summits and ridges.',
            quote: '“The Mountains Are Calling, And I Must Go.”'
        },
        {
            slide: 'slide4',
            title: 'Niederbauen-Chulm, Switzerland',
            body: 'A rewarding destination, offering panoramic views of the blue inlets of Lake Lucerne down below, a jagged range of peaks to the east, the perfectly pyramidal Bristen to the south, Mount Pilatus to the west and, finally, the Rigi to the north.',
            quote: '“Camping – Because Therapy Is Expensive.”'
        },
        {
            slide: 'slide5',
            title: 'Nui Chua Chan, Vietnam',
            body: 'Ranked as a national-level scenic monument by the Ministry of Culture, Sports and Tourism. It is the second-highest mountain in the south where we can have a good trekking and a good view from the top.',
            quote: '“A Bonfire Is Basically Just A Nightclub In The Mountains.”'
        },
        {
            slide: 'slide6',
            title: 'Badavut Beach, Turkey',
            body: 'The coastline of Badavut beach is covered with golden sand. It’s very clean, the surface has a mixed fraction. Turquoise and clear water sparkles in the sun.',
            quote: '“If People Sat Outside And Looked At The Stars Each Night, I’ll Bet They’d Live A Lot Differently.”'
        },
        {
            slide: 'slide7',
            title: 'Abisko, Sweden',
            body: 'The village’s northern Sámi name Ábeskovvu means “the forest by the great water”, where “the great water” refers to Scandinavia’s largest mountain lake Torneträsk.',
            quote: '“I Followed My Heart, And It Led Me To The Northern Lights.”'
        },
        {
            slide: 'slide1',
            title: 'Willamette National Forest, USA',
            body: 'Home to eight wilderness areas, including the popular Three Sisters Wilderness and Mt. Jefferson Wilderness, a variety of backpacking and day hiking opportunities, waterfalls, and much more!',
            quote: '“Life Is The Best When You’re Camping With Your Loved Ones.”'
        },
    ];
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
                            <Fragment key={index}>
                                <img src={`/assets/images/${item.slide}.jpg`} alt={item.slide}
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
                                    <h2 className='slides__text slides__text--header'>{item.title}</h2>
                                    <p className='slides__text slides__text--body'>{item.body}</p>
                                    <p className='slides__text slides__text--quote'>{item.quote}</p>
                                </div>
                            </Fragment>
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