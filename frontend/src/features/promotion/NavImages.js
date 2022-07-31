import { useNavigate } from 'react-router-dom';

const NavImages = ({ handleScroll }) => {

    const navigate = useNavigate();

    const navigateProductsPage = () => {
        navigate('/product')
    };

    return (
        <div className='navimages__images'>
            <div className='images__wrapper'>
                <img src='/assets/images/about.jpg' alt='about' className='images__image' />
                <p className='images__text images__text--header'>But why ?</p>
                <p className='images__text images__text--body'>You need the right gear with you to have a good camping experience, and we provide the best custom-made equipments.</p>
                <button onClick={handleScroll} className='images__button images__button--about'>
                    Learn More <span className='images__icon'>&#x279D;</span>
                </button>
            </div>
            <div className='images__wrapper'>
                <img src='/assets/images/gears.jpg' alt='gears' className='images__image' />
                <p className='images__text images__text--header'>What’s in store ?</p>
                <p className='images__text images__text--body'>We provide a wide range of products! Believe it or not, go check out our sales page now and find yourself some nice merch.</p>
                <button onClick={navigateProductsPage} className='images__button images__button--start'>
                    Get Started <span className='images__icon'>&#x279D;</span>
                </button>
            </div>
        </div>
    );
}

export default NavImages;