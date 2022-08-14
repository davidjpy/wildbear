import { useNavigate } from 'react-router-dom';

const ImageBoard = ({ handleScroll }) => {

    const navigate = useNavigate();

    const navigateProductsPage = () => {
        navigate('/products/all');
    }

    return (
        <section className='imageboard'>
            <div className='imageboard__wrapper'>
                <img src='/assets/images/about.jpg' alt='about' className='imageboard__image' loading='eager' />
                <p className='imageboard__text imageboard__header'>But why ?</p>
                <p className='imageboard__text imageboard__body'>You need the right gear with you to have a good camping experience, and we provide the best custom-made equipments.</p>
                <button onClick={handleScroll} className='imageboard__button imageboard__button--white'>
                    Learn More <span className='imageboard__icon'>&#x279D;</span>
                </button>
            </div>
            <div className='imageboard__wrapper'>
                <img src='/assets/images/gears.jpg' alt='gears' className='imageboard__image' loading='eager' />
                <p className='imageboard__text imageboard__header'>What’s in store ?</p>
                <p className='imageboard__text imageboard__body'>We provide a wide range of products! Believe it or not, go check out our sales page now and find yourself some nice merch.</p>
                <button onClick={navigateProductsPage} className='imageboard__button imageboard__button--orange'>
                    Get Started <span className='imageboard__icon'>&#x279D;</span>
                </button>
            </div>
        </section>
    );
}

export default ImageBoard;