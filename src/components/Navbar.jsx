import logo from "/img/Logo.png"
import profile from "/img/profile.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm py-3 fixed-top">
  <div className="container d-flex justify-content-between align-items-center">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo" style={{ height: "40px" }} />
    </a>

    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarContent">
      <div className="ms-auto d-flex align-items-center gap-3">
        <span className="text-muted d-none d-md-inline">Kategori</span>
        <img src={profile} alt="Profile" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
      </div>
    </div>
  </div>
</nav>

  )
}   

export default Navbar   