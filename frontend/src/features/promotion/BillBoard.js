import { GiCampCookingPot, GiClothes } from 'react-icons/gi';
import { AiFillTool } from 'react-icons/ai'
import { FaCampground } from 'react-icons/fa'

const BillBoard = () => {
    return (
            <section className='billboard'>
                <div className='billboard__category'>
                    <FaCampground className='billboard__icon' />
                    <div className='billboard__texts'>
                        <h3 className='billboard__header'>
                            Site <span className='billboard__header billboard__header--highlight'>Shelters</span>
                        </h3>
                        <div className='billboard__body'>
                            <p>Tent, Sleeping Bag, Mattress, Pillow, Quilt, table, Chair.</p>
                            <p className='billboard__body billboard__body--highlight'>Solid | Tenacious | Adjustable</p>
                        </div>
                    </div>
                </div>
                <div className='billboard__category'>
                    <GiCampCookingPot className='billboard__icon' />
                    <div className='billboard__texts'>
                        <h3 className='billboard__header'>
                            Outdoor <span className='billboard__header billboard__header--highlight'>Kitchens</span>
                        </h3>
                        <div className='billboard__body'>
                            <p>Stove, Cooler, Folding Cookset, Kettle, Tableware.</p>
                            <p className='billboard__body billboard__body--highlight'>Cleanable | Collapsible | Portable</p>
                        </div>
                    </div>
                </div>
                <div className='billboard__category'>
                    <GiClothes className='billboard__icon' />
                    <div className='billboard__texts'>
                        <h3 className='billboard__header'>
                            Camping <span className='billboard__header billboard__header--highlight'>Clothes</span>
                        </h3>
                        <div className='billboard__body'>
                            <p>Umbrella, Hat, Sunglasses, Jacket, Trouser, Gloves, Footwear.</p>
                            <p className='billboard__body billboard__body--highlight'>Waterproof | Lightweight | Wicking</p>
                        </div>
                    </div>
                </div>
                <div className='billboard__category'>
                    <AiFillTool className='billboard__icon' />
                    <div className='billboard__texts'>
                        <h3 className='billboard__header'>
                            Survival <span className='billboard__header billboard__header--highlight'>Toolkits</span>
                        </h3>
                        <div className='billboard__body'>
                            <p>First Aid Kit, Hiking Stick, Peg Mallet, Multi-Tools.</p>
                            <p className='billboard__body billboard__body--highlight'>Durable | Reliable | Capable</p>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default BillBoard;