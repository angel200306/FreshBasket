import { useState } from "react";

function AddProduct({ addProduct }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!name) return;

        addProduct(name, Number(quantity), Number(price));
        setName("");
        setQuantity(1);
        setPrice("");
    };
    return (<form onSubmit={submit}>
            <input
                placeholder="Product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <button>Add</button>
        </form>
    );
}

export default AddProduct;