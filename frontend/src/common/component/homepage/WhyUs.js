const WhyUs = ({ scrollRef }) => {
    return (
        <section ref={scrollRef} className='whyus' style={{ scrollMargin: window.innerHeight < 850 ? '100px' : 'none' }}>
            <div className='whyus__about'>
                <h3>Why You Would Want to Buy From Us ?</h3>
                <div className='whyus__underline' />
                <p className='whyus__body'>
                    We are a passionate team that is committed to offering our valued customers a seamless experience from the moment when they are browsing for merchandise that suits their needs to having issues after receiving the product. To all types of campers, we want to spread joy and happiness. Not only will you discover a large selection of gear that is specifically designed for your needs here, but you'll also get all-around customer care from our help center, which is staffed with camping lovers who are also experts in solving customer problems.                </p>
            </div>
            <div className='whyus__progress'>
                <h4 className='whyus__header whyus__header--odd'>24-Hours Customer Service</h4>
                <div className='whyus__arrow whyus__arrow--odd' />
                <h4 className='whyus__header whyus__header--even'>No Extra Charges</h4>
                <div className='whyus__arrow whyus__arrow--even' />
                <h4 className='whyus__header whyus__header--odd'>Low Shippment Cost</h4>
                <div className='whyus__arrow whyus__arrow--odd' />
                <h4 className='whyus__header whyus__header--even'>Speedy Delivery</h4>
                <div className='whyus__arrow whyus__arrow--even' />
                <h4 className='whyus__header whyus__header--odd'>After Sales Service</h4>
            </div>
        </section>
    );
}

export default WhyUs;