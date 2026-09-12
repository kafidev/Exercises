import { useState } from "react";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleAddToCart = () => {
    if (productName.trim() !== "" && productPrice.trim() !== "") {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
        quantity: 1,
      };
      setProducts([...products, newProduct]);
      setProductName("");
      setProductPrice("");
    }
  };

  const increaseQuantity = (productId) => {
    const updateProducts = products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updateProducts);
  };

  const decreaseQuantity = (productId) => {
    const updateProducts = products.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updateProducts);
  };

  const removeProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-100 font-sans">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Shopping Cart
      </h2>

      {/* Input Form */}
      <div className="flex flex-col gap-3 mb-6">
        <input
          type="text"
          placeholder="Product Name..."
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />
        <input
          type="number"
          placeholder="Product Price..."
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />
        <button
          onClick={handleAddToCart}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition duration-200 text-sm shadow-sm"
        >
          Add to Cart
        </button>
      </div>

      {/* Cart Items Section */}
      {products.length > 0 ? (
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-2">
            Products in Cart
          </h3>
          <ul className="space-y-3 mb-6 max-h-60 overflow-y-auto pr-1">
            {products.map((product) => (
              <li
                key={product.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100"
              >
                <div>
                  <strong className="text-gray-800 block text-sm">
                    {product.name}
                  </strong>
                  <span className="text-gray-500 text-xs">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-white border border-gray-200 rounded-md overflow-hidden">
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold transition"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-semibold text-gray-700">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-bold transition"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeProduct(product.id)}
                    className="bg-red-50 hover:bg-red-100 text-red-600 text-xs font-medium px-2.5 py-1.5 rounded-md transition"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total Price Box */}
          <div className="flex justify-between items-center bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <span className="font-bold text-gray-700 text-sm">Total Price:</span>
            <span className="text-lg font-extrabold text-indigo-600">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-400 py-6 text-sm">
          The cart is empty.
        </p>
      )}
    </div>
  );
};

export default ShoppingCart;