import { useEffect, useState } from "react";
import $ from "jquery";
import Navbar from "../components/Navbar";
import { useCart } from "../components/CartContext";

export default function Products() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toUpperCase().includes(searchTerm.toUpperCase())
  );

  return (
    <div>
      {" "}
      <Navbar />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Products
        </a>
        <div className="collapse navbar-collapse">
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              onChange={handleSearchChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Category</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              // <tr key={product.id} onClick={() => showModal(product)}>
              <tr key={product.id} onClick={() => {
                setSelectedProduct(product);
                setShowModal(true);
                addToCart(product);
              }}>
              
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <img
                    src={product.image}
                    alt="Product"
                    width="50"
                    height="50"
                  />
                </td>
                <td>{product.category}</td>
                <td>
                  {product.rating.rate} ({product.rating.count} reviews)
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={`modal ${showModal ? "show" : ""}`} tabIndex="-1" style={{ display: showModal ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{selectedProduct?.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{selectedProduct?.description}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal backdrop */}
      {showModal && <div className="modal-backdrop show"></div>}
    </div>
  );
}