import logo from "/img/Logo.png";
import profile from "/img/profile.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleApplyPromo = () => {
    let discount = 0;

    if (promoCode.toLowerCase() === "diskon50") {
      discount = 50;
    } else if (promoCode.toLowerCase() === "diskon20") {
      discount = 20;
    } else {
      setPromoApplied(false);
      alert("Kode promo tidak valid");
      return;
    }

    setPromoApplied(true);

    setCart((prevCart) =>
      prevCart.map((item) => ({
        ...item,
        originalPrice: item.originalPrice || item.price,
        price: Math.round((item.originalPrice || item.price) * (1 - discount / 100)),
      }))
    );
  };

  const handleRemovePromo = () => {
    setPromoApplied(false);
    setPromoCode("");

    setCart((prevCart) =>
      prevCart.map((item) => ({
        ...item,
        price: item.originalPrice || item.price,
      }))
    );
  };

  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm py-3 fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="ms-auto d-flex align-items-center gap-3">
            <button className="btn btn-info" onClick={() => navigate("/courses")}>
              Kategori
            </button>

            {/* Cart Dropdown */}
            <div className="dropdown">
              <button
                className="btn position-relative"
                type="button"
                id="cartDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-shopping-cart fs-4 text-dark"></i>
                {cart.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                )}
              </button>

              <ul
                className="dropdown-menu dropdown-menu-end p-2"
                aria-labelledby="cartDropdown"
                style={{ minWidth: "500px" }}
              >
                <li className="fw-bold mb-2">Keranjang</li>

                {cart.length === 0 && (
                  <li className="text-muted text-center">Keranjang kosong</li>
                )}

                {cart.map((item) => (
                  <li key={item.id} className="mb-1">
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{item.name}</span>
                      <div className="d-flex gap-2 align-items-center">
                        <span className="text-muted small">Rp {item.price}</span>
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="btn btn-sm btn-outline-danger py-0 px-2"
                        >
                          &times;
                        </button>
                      </div>
                    </div>
                  </li>
                ))}

                <li><hr className="dropdown-divider" /></li>

                {/* Promo Input */}
                <li className="d-flex gap-2 mb-2">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="diskon50"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button className="btn btn-sm btn-outline-primary" onClick={handleApplyPromo}>
                    Terapkan
                  </button>
                  <button className="btn btn-sm btn-outline-danger" onClick={handleRemovePromo}>
                    Batal
                  </button>
                </li>

                {/* Harga Total */}
                <li className="text-end fw-bold">
                  Total: Rp {totalPrice}
                </li>

                <li>
                  <button
                    className="btn btn-sm btn-primary w-100 mt-2"
                    onClick={() => navigate("/cart")}
                  >
                    Lihat Keranjang
                  </button>
                </li>
              </ul>
            </div>

            {/* Profile Image */}
            <img
              src={profile}
              alt="Profile"
              className="rounded-circle"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
