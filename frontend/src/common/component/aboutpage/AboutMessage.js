import { useEffect, useState } from 'react';
import { GiBearHead } from 'react-icons/gi';

const AboutMessage = () => {

    const [showContent, setShowContent] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowContent(true);
        }, 200);
    }, []);

    return (
        <div className='aboutmessage'>
            {imageLoaded ? null : <div className='aboutmessage__loading-screen' />}
            <img src='/assets/images/about2.jpg' alt='about' onLoad={() => setImageLoaded(true)} className='aboutmessage__image' />
            <div className='aboutmessage__logo' style={showContent ? { top: '6%', opacity: 1 } : null}>
                <div className='aboutmessage__icon-wrapper'>
                    <GiBearHead className='aboutmessage__icon' />
                    <p className='aboutmessage__header aboutmessage__header--logo'>WildBear</p>
                </div>
                <div className='aboutmessage__slogan-wrapper'>
                    <p className='aboutmessage__header aboutmessage__header--small'>Life’s better when you add fresh air, a warm campfire, bright stars, and s’mores</p>
                </div>
            </div>
            <div className='aboutmessage__banner'>
                <div className='aboutmessage__about'>
                    <p className='aboutmessage__header aboutmessage__header--smaller'>About Us</p>
                    <p>We are here for something that is way more than mere selling, w </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMessage;