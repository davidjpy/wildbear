const NewProducts = () => {

    const newProducts = ['product1', 'product2', 'product3']
    const newProducts2 = ['product4', 'product5', 'product6']

    return (
        <section className='newproducts'>
            <div className='newproducts__divider'>
                <h3>Featured Products</h3>
                <div className='newproducts__underline' />
            </div>
            <div className='newproducts__cards'>
                {newProducts.map((item) => {
                    return (
                        <Product key={item} item={item} />
                    );
                })}
            </div>
            <div className='newproducts__cards'>
                {newProducts2.map((item) => {
                    return (
                        <Product key={item} item={item} />
                    );
                })}
            </div>
        </section>
    );
}

const Product = ({ item }) => {
    return (
        <div className='newproducts__card'>
            <img src={`/assets/images/products/${item}.jpg`} alt='merch' className='newproducts__image' />
            <h3 className='newproducts__pricetag'>$125</h3>
        </div>
    );
}

export default NewProducts;