import Link from "next/link";
import { useCart } from ".//CartContext";

function Navbar() {  const { cartItems } = useCart();

  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {" "}
          <Link href="/">
            <span className="mr-4 hover:text-gray-400 cursor-pointer">
              Home
            </span>
          </Link>
          <br />
          <Link href="/products">
            <span className="cursor-pointer text-2xl font-bold">PRODUCTS</span>
          </Link>
          <div>
            <Link href="/about">
              <span className="hover:text-gray-400 cursor-pointer">About</span>
            </Link>
          </div>{" "}
          <span>Cart ({cartItems.length})</span>
          <br />{" "}
          <Link href="/Cart">
            <span className="hover:text-gray-400 cursor-pointer">
              View Cart
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
