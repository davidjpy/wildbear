const NavImages = () => {
    return (
        <div className='navimages__images'>
            <div>
                <img src='/assets/images/about.jpg' alt='about' className='images__about' />
                <button className='images__button images__button--about'>Learn More</button>
            </div>
            <div>
                <img src='/assets/images/gears.jpg' alt='gears' className='images__about' />
                <button className='images__button images__button--start'>Get Started</button>
            </div>
        </div>
    );
}

export default NavImages;