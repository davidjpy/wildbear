const NavImages = () => {
    return (
        <div className='navimages__images'>
            <div className='images__wrapper images__wrapper--about'>
                <img src='/assets/images/about.jpg' alt='about' className='images__nav images__nav--about' />
                <button className='images__button images__button--about'>Learn More</button>
            </div>
            <div className='images__wrapper images__wrapper--start'>
                <img src='/assets/images/gears.jpg' alt='gears' className='images__nav images__nav--start' />
                <button className='images__button images__button--start'>Get Started</button>
            </div>
        </div>
    );
}

export default NavImages;