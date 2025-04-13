import Logo from "/img/Logo.png";

const Footer = () => {
  return (
    <section className="w-100 mt-5">
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row gy-4">
            {/* Informasi Perusahaan */}
            <div className="col-12 col-md-4">
              <img src={Logo} alt="Logo" className="mb-3" />
              <p className="text-light">
                VideoBelajar adalah platform edukasi yang menyediakan berbagai kursus online untuk meningkatkan keterampilan Anda.
              </p>
            </div>

            {/* Navigasi Kategori */}
            <div className="col-12 col-md-4">
              <h5 className="fw-bold mb-3">Kategori</h5>
              <ul className="list-unstyled ">
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-light">Pemasaran</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-light">Desain</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-light">Pengembangan Diri</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-light">Bisnis</a>
                </li>
              </ul>
            </div>

            {/* Sosial Media */}
            <div className="col-12 col-md-4">
              <h5 className="fw-bold mb-3">Ikuti Kami</h5>
              <div className="d-flex gap-3">
                <a href="#" className=" fs-4">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className=" fs-4">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className=" fs-4">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className=" fs-4">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-secondary mt-5 small">
            &copy; 2025 VideoBelajar. Semua Hak Dilindungi.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
