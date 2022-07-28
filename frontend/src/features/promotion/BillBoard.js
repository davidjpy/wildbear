import { GiShoppingCart, GiCampCookingPot, GiClothes } from 'react-icons/gi';
import { AiFillTool } from 'react-icons/ai'
import { FaCampground } from 'react-icons/fa'

const BillBoard = () => {
    return (
        <>
            <h3 className='billboard__divider'>
                What You’re Looking For Camping Is All Here
                <GiShoppingCart size={25} className='divider__logo' />
            </h3>
            <div className='billboard__categories'>
                <div className='categories__cards'>
                    <div className='cards__card'>
                        <FaCampground className='card__icon' />
                        <div className='card__texts'>
                            <h3 className='card__header'>Camping Tents</h3>
                            <div className='card__body'>
                                <p>Tent, Sleeping Bag, Mattress, Pillow, tables, Chairs </p>
                            </div>
                        </div>
                    </div>
                    <div className='cards__card'>
                        <GiCampCookingPot className='card__icon' />
                        <div className='card__texts'>
                            <h3 className='card__header'>Kitchens</h3>
                            <div className='card__body'>
                                <p>Tent, Sleeping Bag, Mattress, Pillow, Chairs</p>
                            </div>
                        </div>
                    </div>
                    <div className='cards__card'>
                        <GiClothes className='card__icon' />
                        <div className='card__texts'>
                            <h3 className='card__header'>Clothes</h3>
                            <div className='card__body'>
                                <p>Tent, Sleeping Bag, Mattress, Pillow, Chairs</p>
                            </div>
                        </div>
                    </div>
                    <div className='cards__card'>
                        <AiFillTool className='card__icon' />
                        <div className='card__texts'>
                            <h3 className='card__header'>Accessories</h3>
                            <div className='card__body'>
                                <p>Tent, Sleeping Bag, Mattress, Pillow, Chairs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='progress'>
                    <h4 className='progress__header progress__header--odd'>24-Hours Customer Service</h4>
                    <div className='progress__arrow progress__arrow--first' />
                    <h4 className='progress__header progress__header--even'>No Extra Charges</h4>
                    <div className='progress__arrow progress__arrow--second' />
                    <h4 className='progress__header progress__header--odd'>Low Shippment Cost</h4>
                    <div className='progress__arrow progress__arrow--third' />
                    <h4 className='progress__header progress__header--even'>Speedy Delivery</h4>
                    <div className='progress__arrow progress__arrow--fourth' />
                    <h4 className='progress__header progress__header--odd'>After Sales Service</h4>
                </div>
            </div>
        </>
    );
}

export default BillBoard;