import login from '/img/login.png';
import google from '/img/google.png';
import {useNavigate} from "react-router-dom";  

const FormLogin = () => {

  const navigate = useNavigate();

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow-lg" style={{ width: "100%", maxWidth: "500px" }}>
        <img src={login} className="card-img-top" alt="Login Image" />
        <div className="card-body">
          <h1 className="text-center h4 fw-bold">Masuk Ke Akun</h1>
          <p className="text-center text-muted">Yuk, lanjutin belajarmu di VideoBelajar.</p>
          <div className="mt-4">
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-medium">
                Email <span className="text-danger">*</span>
              </label>
              <input type="email" className="form-control" id="email" placeholder="Masukkan email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-medium">
                Password <span className="text-danger">*</span>
              </label>
              <input type="password" className="form-control" id="password" placeholder="Masukkan password" />
            </div>
            <div className="text-end mb-3">
              <a href="#" className="text-danger text-decoration-none">
                Lupa Password?
              </a>
            </div>
            <button className='btn btn-success w-100 mb-2' onClick={() => navigate('/')}>Masuk</button>
            <button className='btn btn-outline-success w-100 mb-2' onClick={() => navigate('/register')}>Daftar</button>
            <div className="text-center text-muted mt-2 mb-2">atau</div>
            <button className="btn btn-light border w-100 d-flex justify-content-center align-items-center">
              <img src={google} alt="Google" className="me-2" style={{ height: "20px" }} /> Masuk dengan Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
