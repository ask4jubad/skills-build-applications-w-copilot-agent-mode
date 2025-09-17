import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './octofitapp-small.png';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="OctoFit Logo" className="logo me-2" />
            <span>OctoFit Tracker</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/teams">Teams</a></li>
              <li className="nav-item"><a className="nav-link" href="/activities">Activities</a></li>
              <li className="nav-item"><a className="nav-link" href="/workouts">Workouts</a></li>
              <li className="nav-item"><a className="nav-link" href="/leaderboard">Leaderboard</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container mt-4">
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h1 className="card-title display-5 text-primary">Welcome to OctoFit!</h1>
            <p className="card-text">Track your fitness, join teams, and compete on the leaderboard.</p>
            <button className="btn btn-success">Get Started</button>
          </div>
        </div>
        {/* Example Bootstrap Table */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">Sample Data Table</div>
          <div className="card-body p-0">
            <table className="table table-striped table-hover mb-0">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Team</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Spider-Man</td>
                  <td>Marvel</td>
                  <td><button className="btn btn-outline-primary btn-sm">View</button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Batman</td>
                  <td>DC</td>
                  <td><button className="btn btn-outline-primary btn-sm">View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Example Bootstrap Modal Trigger */}
        <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Show Info Modal
        </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">OctoFit Modal</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                This is a Bootstrap modal for OctoFit!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/* Example Bootstrap Form */}
        <div className="card mt-4">
          <div className="card-header bg-success text-white">Join a Team</div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="team" className="form-label">Team</label>
                <select className="form-select" id="team">
                  <option>Marvel</option>
                  <option>DC</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Join</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
