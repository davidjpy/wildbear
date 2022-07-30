import { GiCampCookingPot, GiClothes } from 'react-icons/gi';
import { AiFillTool } from 'react-icons/ai'
import { FaCampground } from 'react-icons/fa'

const BillBoard = () => {
    return (
            <div className='billboard__cards'>
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
    );
}

export default BillBoard;