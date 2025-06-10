const CourseList = (props) => {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row mb-3">
          <div className="d-flex justify-content-end align-items-end gap-2">
  <select name="" id="" className="form-control w-25">
    <option value="">Urutkan</option>
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
  </select>
  <input type="text" className="form-control w-25" placeholder="Cari Kelas" />
</div>

          </div>
        <div className="row g-3">
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
      </div>
    );
};  

export default CourseList;  