function Stats({ products }) {
    const totalItems = products.reduce((sum, p) => sum + p.quantity, 0);
    const totalPrice = products.reduce(
        (sum, p) => sum + p.quantity * p.price,
        0
    );

    return (
        <div className="stats">
            <p>Total items: {totalItems}</p>
            <p>Total price: {totalPrice} ₴</p>
        </div>
    );
}

export default Stats;