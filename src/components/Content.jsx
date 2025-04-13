import { useState } from "react";

function Contents(props) {
  const [activeTab, setActiveTab] = useState("semua");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="w-100 py-5 bg-light">
      <div className="container px-4">
        <h2 className="display-5 fw-bold text-center text-dark mb-5">
          Pilih Kategori
        </h2>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4 overflow-auto">
          {["semua", "pemasaran", "desain", "pengembangan diri", "bisnis"].map((tab) => (
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

        {/* Tab Content */}
        <div className={activeTab === "semua" ? "tab-content" : "tab-content d-none"}>
          <div className="row g-4">
            {props.courses &&
              props.courses.map((item, index) => (
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
                      <p className="card-text text-muted medium flex-grow-1 text-truncate" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {item.description}
                      </p>
                      <p className="text-muted small">By {item.author}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-warning fw-bold">⭐ {item.rate}</span>
                        <span className="text-success fw-bold">Rp. {item.price}</span>
                      </div>
                      <a href="#" className="btn btn-primary mt-3 w-100">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Tab lainnya */}
        <div className={activeTab === "pemasaran" ? "tab-content" : "tab-content d-none"}>
          <p className="text-muted text-center">
            Kuasai strategi pemasaran digital, SEO, dan media sosial.
          </p>
        </div>
        <div className={activeTab === "desain" ? "tab-content" : "tab-content d-none"}>
          <p className="text-muted text-center">
            Pelajari teknik desain grafis dengan Photoshop, Illustrator, dan lainnya.
          </p>
        </div>
        <div className={activeTab === "pengembangan" ? "tab-content" : "tab-content d-none"}>
          <p className="text-muted text-center">
            Tingkatkan potensi diri dan keterampilan pribadi Anda.
          </p>
        </div>
        <div className={activeTab === "bisnis" ? "tab-content" : "tab-content d-none"}>
          <p className="text-muted text-center">
            Pelajari strategi membangun dan mengelola bisnis yang sukses.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contents;
