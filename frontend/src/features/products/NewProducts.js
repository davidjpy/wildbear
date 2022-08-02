const NewProducts = () => {

    const fakeData = Array(5).fill(null);

    return (
        <div className='newproducts'>
            <div className='newproducts__divider'>
                <h3>Featured Products</h3>
                <div className='newproducts__underline' />
            </div>
            <div className='newproducts__cards'>
                {fakeData.map((item) => {
                    return (
                        <Product />
                    );
                })}
            </div>
        </div>
    );
}

const Product = () => {
    return (
        <div className='newproducts__card'>
            <img src='/assets/images/newProduct.jpg' alt='merch' className='newproducts__image' />
        </div>
    );
}

export default NewProducts;