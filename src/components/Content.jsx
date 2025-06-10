import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext"; // Pastikan path ini sesuai strukturmu

function Contents({ courses }) {
  const [activeTab, setActiveTab] = useState("semua");
  const { cart, setCart } = useContext(CartContext);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((x) => x.id === item.id);
      if (found) {
        return prev.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const categories = ["semua", "pemasaran", "desain", "pengembangan", "bisnis"];

  return (
    <section className="w-100 py-5 bg-light">
      <div className="container px-4">
        <h2 className="display-5 fw-bold text-center text-dark mb-5">
          Pilih Kategori
        </h2>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4 overflow-auto">
          {categories.map((tab) => (
            <button
              key={tab}
              className={`btn btn-success px-4 py-2 rounded-pill ${
                activeTab === tab ? "active" : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab === "semua"
                ? "Semua Kelas"
                : tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Konten Kursus */}
        {activeTab === "semua" && (
          <div className="tab-content">
            <div className="row g-4">
              {courses?.map((item, index) => (
                <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.name}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.name}</h5>
                      <p
                        className="card-text text-muted medium flex-grow-1 text-truncate"
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.description}
                      </p>
                      <p className="text-muted small">By {item.author}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-warning fw-bold">⭐ {item.rate}</span>
                        <span className="text-success fw-bold">Rp. {item.price.toLocaleString("id-ID")}</span>
                      </div>
                      {cart.find((x) => x.id === item.id) ? (
                        <button className="btn btn-secondary mt-3 w-100" disabled>
                          ✅ Sudah Masuk ke Keranjang
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary mt-3 w-100"
                          onClick={() => handleAddToCart(item)}
                        >
                          Tambah Ke Keranjang
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Konten Tab Lainnya */}
        {activeTab !== "semua" && (
          <div className="tab-content">
            <p className="text-muted text-center">
              {activeTab === "pemasaran" &&
                "Kuasai strategi pemasaran digital, SEO, dan media sosial."}
              {activeTab === "desain" &&
                "Pelajari teknik desain grafis dengan Photoshop, Illustrator, dan lainnya."}
              {activeTab === "pengembangan" &&
                "Tingkatkan potensi diri dan keterampilan pribadi Anda."}
              {activeTab === "bisnis" &&
                "Pelajari strategi membangun dan mengelola bisnis yang sukses."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contents;
