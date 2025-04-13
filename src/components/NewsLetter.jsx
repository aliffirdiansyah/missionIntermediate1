import newsletterImg from "/img/newsletter.jpg";

const NewsLetter = () => {
  return (
    <section
      className="w-100 rounded-lg py-5 px-3 text-white text-center mt-5"
      style={{
        backgroundImage: `url(${newsletterImg})`, // Perbaiki penggunaan template literal
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container bg-dark bg-opacity-75 p-5 rounded">
        <h2 className="fs-2 fw-bold mb-3">Berlangganan Newsletter Kami!</h2>
        <p className="fs-5 mb-4">
          Dapatkan update terbaru, tips eksklusif, dan promo menarik langsung ke email Anda.
        </p>

        <form className="row justify-content-center g-2">
          <div className="col-12 col-md-6">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Masukkan email Anda"
              required
            />
          </div>
          <div className="col-12 col-md-auto">
            <button type="submit" className="btn btn-warning btn-lg fw-semibold">
              Berlangganan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
