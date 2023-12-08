
const CartItem = ({ product, onRemove }) => (
    <div>
        <li>{product.title}</li>
        <li>{product.description}</li>
        <li>{product.price}</li>
        <li>{product.qty}</li>
        <button onClick={onRemove}>Delete</button>
    </div>
);

export default CartItem