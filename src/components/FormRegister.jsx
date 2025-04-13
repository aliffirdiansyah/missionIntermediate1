import google from '/img/google.png';

const FormRegister = () => {
  return (
    <div className="container d-flex justify-content-center mt-5">
  <div className="card shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
    <div className="card-body">
      <h1 className="text-center h4 fw-bold">Pendaftaran Akun</h1>
      <p className="text-center text-muted">Yuk, daftarkan akunmu sekarang juga!</p>
      <div className="mt-4">
        <div className="mb-3">
          <label htmlFor="nama" className="form-label fw-medium">Nama Lengkap <span className="text-danger">*</span></label>
          <input type="text" className="form-control" name="nama" id="nama" placeholder='Nama Lengkap Anda' />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-medium">Email <span className="text-danger">*</span></label>
          <input type="email" className="form-control" name="email" id="email" placeholder='Email Anda' />
        </div>
        <div className="mb-3">
          <label htmlFor="jk" className="form-label fw-medium">Jenis Kelamin <span className="text-danger">*</span></label>
          <select className="form-select" name="jk" id="jk">
            <option value="laki">Laki-Laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="noHp" className="form-label fw-medium">No. HP <span className="text-danger">*</span></label>
          <div className="input-group">
            <span className="input-group-text bg-light">+62</span>
            <input type="text" className="form-control" name="noHp" id="noHp" />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-medium">Kata Sandi <span className="text-danger">*</span></label>
          <input type="password" className="form-control" name="password" id="password" placeholder='Kata Sandi' />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label fw-medium">Konfirmasi Kata Sandi <span className="text-danger">*</span></label>
          <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" placeholder='Konfirmasi Kata Sandi' />
        </div>

        <div className="text-end mb-3">
          <a href="#" className="text-danger text-decoration-none">Lupa Password?</a>
        </div>

        <a href="index.html" className="btn btn-success w-100 mb-2">Masuk</a>
        <a href="register.html" className="btn btn-outline-success w-100 mb-2">Daftar</a>

        <div className="text-center text-muted mt-3 mb-2">atau</div>

        <button className="btn btn-light border w-100 d-flex justify-content-center align-items-center">
          <img src={google} alt="Google" className="me-2" style={{ height: "20px" }} /> Masuk dengan Google
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default FormRegister;
