import ProductItem from "./ProductItem";

function ProductList({ products, toggleProduct, deleteProduct }) {
    return (
        <ul>
            {products.map((p) => (
                <ProductItem
                    key={p.id}
                    product={p}
                    toggleProduct={toggleProduct}
                    deleteProduct={deleteProduct}
                />
            ))}
        </ul>
    );
}

export default ProductList;