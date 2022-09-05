import { ImLocation2 } from 'react-icons/im';
import { FaPhoneSquareAlt, FaYoutubeSquare, FaFacebookSquare, FaGooglePlusSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';


const Footer = () => {

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <footer className='footer'>
            <h5 onClick={handleScroll} className='footer__redirect'>
                Back to Top
            </h5>
            <div className='footer__bar'>
                <div className='footer__section'>
                    <h4 className='footer__text footer__text--header'>ABOUT</h4>
                    <p className='footer__text footer__text--body'>
                        We are a group of dedicated camping enthusiast aiming to share joy and happiness by offering the best camping experience to our customers. Click <span className='footer__text footer__text--link'>here</span> to know more about us.
                    </p>
                </div>
                <div className='footer__section'>
                    <h4 className='footer__text footer__text--header'>RESOURCES</h4>
                    <div className='footer__body'>
                        <p className='footer__text footer__text--link'>Learn More About WildBear</p>
                        <p className='footer__text footer__text--link'>Support From Help Centre</p>
                        <p className='footer__text footer__text--link'>Technical Documentations</p>
                        <p className='footer__text footer__text--link'>Business Partners</p>
                        <p className='footer__text footer__text--link'>Team Blog</p>
                        <p className='footer__text footer__text--link'>FAQs</p>
                    </div>
                </div>
                <div className='footer__section'>
                    <h4 className='footer__text footer__text--header'>JOIN US</h4>
                    <div className='footer__body'>
                        <p className='footer__text footer__text--link'>Life in WildBear</p>
                        <p className='footer__text footer__text--link'>Career Developments</p>
                        <p className='footer__text footer__text--link'>Sell products on WildBear</p>
                        <p className='footer__text footer__text--link'>Advertise Your Products</p>
                        <p className='footer__text footer__text--link'>Become an Investor / Affiliate</p>
                        <p className='footer__text footer__text--link'>Advertise on WildBear</p>
                    </div>
                </div>
                <div className='footer__section'>
                    <h4 className='footer__text footer__text--header'>CONTACT</h4>
                    <div className='footer__body'>
                        <div className='footer__inline'>
                            <ImLocation2 className='footer__icon footer__icon--location' />
                            <p className='footer__text footer__text--link' style={{ width: '80% ' }}>Address: 49 Li Lo Lang Street, Kowloon, Hong Kong</p>
                        </div>
                        <div className='footer__divider' />
                        <div className='footer__inline'>
                            <FaPhoneSquareAlt className='footer__icon footer__icon--inline' />
                            <p className='footer__text footer__text--link' style={{ width: '80% ' }}>Phone: +852 37523347</p>
                        </div>
                        <div className='footer__inline'>
                            <RiMailFill className='footer__icon footer__icon--inline' />
                            <p className='footer__text footer__text--link' style={{ width: '80% ' }}>Email: info@wildbear.com</p>
                        </div>
                        <div className='footer__inline' style={{ gap: '5px' }}>
                            <FaTwitterSquare className='footer__icon footer__icon--media' />
                            <FaFacebookSquare className='footer__icon footer__icon--media' />
                            <FaInstagramSquare className='footer__icon footer__icon--media' />
                            <FaYoutubeSquare className='footer__icon footer__icon--media' />
                            <FaLinkedin className='footer__icon footer__icon--media' />
                            <FaGooglePlusSquare className='footer__icon footer__icon--media' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__disclaimer'>
                <div className='footer__divider' />
                <div className='footer__wrapper'>
                    <p className='footer__text footer__text--disclaimer' style={{ flex: 1 }}>&#xa9; 2022 WildBear inc. All Rights Reserved | Designed and Created by <a target='_blank' rel='noreferrer' href='https://github.com/davidjpy?tab=repositories' className='footer__text footer__text--disclaimer-link footer__text--disclaimer-italic' style={{ display: 'inline', padding: 0 }}>David Ho</a></p>
                    <p className='footer__text footer__text--disclaimer'><span className='footer__text footer__text--disclaimer-link'>Terms of Use</span> | <span className='footer__text footer__text--disclaimer-link'>Privacy Policy</span> | <span className='footer__text footer__text--disclaimer-link'>License Agreement</span></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;