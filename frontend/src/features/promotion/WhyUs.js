const WhyUs = ({ scrollRef }) => {
    return (
        <div ref={scrollRef} className='whyus' >
            <div className='whyus__about'>
                <h3>Why You Would Want to Buy From Us ?</h3>
                <div className='whyus__underline' />
                <p className='whyus__body'>
                    We are a passionate team who are dedicated to providing a streamlined service to our dear customers, from the very beginning stage of looking out for merch suiting their needs, to having problems after receiving the product. We aim to spread joy and happiness to all kinds of campers. Here, not only you will find a wide range of customized gears for your requirements, but you will also find all-rounded customer supports from our help centre, full of camping enthusiasts yet professionals in resolving customers' problem.
                </p>
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
        </div>
    );
}

export default WhyUs;