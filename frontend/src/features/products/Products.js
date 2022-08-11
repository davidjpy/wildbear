const Products = () => {

    const cards = [...Array(25).keys()];

    return (
        <div className='products'>
            {cards.map((item) => {
                return (
                    <div key={item} className='products__card'>
                        {item}
                    </div>
                );
            })}
        </div>
    );
}

export default Products;