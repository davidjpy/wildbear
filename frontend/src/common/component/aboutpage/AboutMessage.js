import { useCallback, useEffect, useRef, useState } from 'react';
import { GiBearHead } from 'react-icons/gi';

const AboutMessage = ({ pageRef }) => {

    const [showContent, setShowContent] = useState(false);
    const aboutRef = useRef();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0
        });
        setTimeout(() => {
            setShowContent(true);
        }, 200);
    }, []);

    const handleAboutMessageHeight = useCallback(() => {
        aboutRef.current.style.height = `${pageRef.current.clientHeight}px`;
    }, [pageRef]);

    useEffect(() => {
        handleAboutMessageHeight();
    }, [handleAboutMessageHeight]);

    useEffect(() => {
        window.addEventListener('resize', handleAboutMessageHeight);

        return () => {
            window.removeEventListener('resize', handleAboutMessageHeight);
        }
    });

    return (
        <div ref={aboutRef} className='aboutmessage'>
            <div className='aboutmessage__logo' style={showContent ? { top: '6%', opacity: 1 } : null}>
                <div className='aboutmessage__icon-wrapper'>
                    <GiBearHead className='aboutmessage__icon' />
                    <p className='aboutmessage__header aboutmessage__header--logo'>WildBear</p>
                </div>
                <div className='aboutmessage__slogan-wrapper'>
                    <p className='aboutmessage__header aboutmessage__header--small'>Life’s better when you add fresh air, a warm campfire, bright stars, and s’mores</p>
                </div>
            </div>
            <div className='aboutmessage__banner' style={showContent ? { left: '0px', opacity: 1 } : null}>
                <div className='aboutmessage__block-wrapper'>
                    <p className='aboutmessage__header aboutmessage__header--smaller'>About Us</p>
                    <p className='aboutmessage__body'>We are here for something way more than mere selling. The joy of spending time in the wild, untamed and natural places, either alone and isolated from the noisy crowd, or accompanied and surrounded by your loved one, is incomparable to any other things you can find in the concrete city. As a group of camping enthusiasts, spreading them has become one of our primary goals.</p>
                </div>
                <div className='aboutmessage__block-wrapper'>
                    <p className='aboutmessage__body aboutmessage__body--gray'>Supplier | Brands</p>
                    <p className='aboutmessage__header aboutmessage__header--smaller'>23+</p>
                    <p className='aboutmessage__body'>Strengthening our network with others around the globe has been bringing us inspiring thoughts and stories. However, our network is not limited to top-notch suppliers and manufacturers only, we also emphasize our organizational commitments and moral obligations to society by arranging charity events and providing comprehensive support to our employees.</p>
                </div>
                <div className='aboutmessage__block-wrapper'>
                    <p className='aboutmessage__body aboutmessage__body--gray'>Customers | Countries</p>
                    <p className='aboutmessage__header aboutmessage__header--smaller'>84+</p>
                    <p className='aboutmessage__body'>Since 1982, we have been working to help you experience the transformational power of nature. We have so far connected more than 84 countries by providing our clients with top-quality gear and apparel, expert advice, rental equipment, inspiring stories of life outside and outdoor experiences to enjoy alone or share with your friends and family.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMessage;