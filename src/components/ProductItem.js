function ProductItem({ product, toggleProduct, deleteProduct }) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={product.completed}
                    onChange={() => toggleProduct(product.id)}
                />
                <span
                    style={{
                        textDecoration: product.completed ? "line-through" : "none",
                    }}
                >
          {product.name}
        </span>
            </label>

            <div>Qty: {product.quantity}</div>
            <div>Price: {product.price} ₴</div>

            <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </li>
    );
}

export default ProductItem;