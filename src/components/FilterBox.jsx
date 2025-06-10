const FilterBox = () => {
  return (
    <div className="card mb-4">
        <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">Filter</span>
                        <a className="text-decoration-none text-danger" href="#">Reset</a>
        </div>

        <div className="card mt-3">
            <div className="card-body">
            <p className="text-success">Bidang Studi</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FilterBox