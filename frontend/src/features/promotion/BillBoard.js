import { GiShoppingCart, GiCampCookingPot, GiClothes } from 'react-icons/gi';
import { AiFillTool } from 'react-icons/ai'
import { FaCampground } from 'react-icons/fa'

const BillBoard = () => {
    return (
        <>
            <h3 className='billboard__divider'>
                What You’re Looking For Camping Is All Here
                <GiShoppingCart className='divider__logo' />
            </h3>
            <div className='billboard__categories'>
                <div className='categories__cards'>
                    <div className='cards__card'>
                        <FaCampground className='card__icon' />
                        <div className='card__texts'>
                            <h3 className='card__header'>
                                Site <span className='card__header card__header--highlight'>Shelters</span>
                            </h3>
                            <div className='card__body'>
                                <p>Tent, Sleeping Bag, Mattress, Pillow, Quilt, table, Chair.</p>
                                <p className='card__body card__body--highlight'>Solid | Tenacious | Adjustable</p>
                            </div>
                        </div>
                    </div>
                    <div className='cards__card'>
                        <GiCampCookingPot className='card__icon' />
                        <div className='card__texts'>
                            <h3 className='card__header'>
                                Outdoor <span className='card__header card__header--highlight'>Kitchens</span>
                            </h3>
                            <div className='card__body'>
                                <p>Stove, Cooler, Folding Cookset, Kettle, Tableware.</p>
                                <p className='card__body card__body--highlight'>Cleanable | Collapsible | Portable</p>
                            </div>
                        </div>
                    </div>
                    <div className='cards__card'>
                        <GiClothes className='card__icon' />
                        <div className='card__texts'>
                            <h3 className='card__header'>
                                Camping <span className='card__header card__header--highlight'>Clothes</span>
                            </h3>
                            <div className='card__body'>
                                <p>Umbrella, Hat, Sunglasses, Jacket, Trouser, Gloves, Footwear.</p>
                                <p className='card__body card__body--highlight'>Waterproof | Lightweight | Wicking</p>
                            </div>
                        </div>
                    </div>
                    <div className='cards__card'>
                        <AiFillTool className='card__icon' />
                        <div className='card__texts'>
                            <h3 className='card__header'>
                                Survival <span className='card__header card__header--highlight'>Toolkits</span>
                            </h3>
                            <div className='card__body'>
                                <p>First Aid Kit, Hiking Stick, Peg Mallet, Multi-Tools.</p>
                                <p className='card__body card__body--highlight'>Durable | Reliable | Capable</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='categories__description'>
                    <h3>Why You Would Want to Buy From Us ?</h3>
                    <div className='description__divider' />
                    <p className='description__body'>
                        We are a passionate team who are dedicated to providing a streamlined service to our dear customers, from the very beginning stage of looking out for merch suiting their needs, to having problems after receiving the product. We aim to spread joy and happiness to all kinds of campers. Here, not only you will find a wide range of customized gears for your requirements, but you will also find all-rounded customer supports from our help centre, full of camping enthusiasts yet professionals in resolving customers' problem.
                    </p>
                </div>
                <div className='progress'>
                    <h4 className='progress__header progress__header--odd'>24-Hours Customer Service</h4>
                    <div className='progress__arrow progress__arrow--odd' />
                    <h4 className='progress__header progress__header--even'>No Extra Charges</h4>
                    <div className='progress__arrow progress__arrow--even' />
                    <h4 className='progress__header progress__header--odd'>Low Shippment Cost</h4>
                    <div className='progress__arrow progress__arrow--odd' />
                    <h4 className='progress__header progress__header--even'>Speedy Delivery</h4>
                    <div className='progress__arrow progress__arrow--even' />
                    <h4 className='progress__header progress__header--odd'>After Sales Service</h4>
                </div>
            </div>
        </>
    );
}

export default BillBoard;