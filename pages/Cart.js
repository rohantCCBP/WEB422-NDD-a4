import Navbar from "/components/Navbar.js";
import { useCart } from "/components/CartContext";

export default function Cart() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Navbar />
      <ul>
        {cartItems.map((item, index) => (
          <>
            {" "}
            <li key={index}>
              <b>{item.title}</b> - {item.description} - ${item.price}
            </li>{" "}
            <br />
          </>
        ))}
      </ul>
      <div>Grand Total: ${totalPrice.toFixed(2)}</div>
    </div>
  );
}
