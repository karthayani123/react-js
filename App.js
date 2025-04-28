import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 


function App() {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      
      <div className="bg-dark text-white p-3" style={{ width: '250px' }}>
        
        <div className="mb-4">
          <a href="#home">
            <img src="./spotify-logo-icon-f7sn2mkxloi86pa2.jpg" alt="Spotify Logo" className="img-fluid" />
          </a>
        </div>

        
        <ul className="nav flex-column mb-4">
          <li className="nav-item mb-2">
            <a href="#home" className="nav-link text-white">
               Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#search" className="nav-link text-white">
               Search
            </a>
          </li>
        </ul>
        <hr></hr>
 
        
        <ul className="nav flex-column mb-4">
          <li className="nav-item mb-2">
            <a href="#create" className="nav-link text-white">
               Your Library
            </a>
          </li>
         
        </ul>
        <hr></hr>
        <div>
            <button className="btn btn-fisrt me-1">
              
            </button>
            <button className="btn btn-first">
              
            </button>
          </div>
          <div>
            <a href="#English" className="btn btn-first text-white me-2">English</a>
            <button className="btn btn-first text-white">Telugu</button>
          </div>
         <hr></hr>
        
        <ul className="nav flex-column">
          
          <li className="nav-item">
            <a href="#privacy" className="nav-link text-white small">Privacy</a>
          </li>
          <li className="nav-item">
            <a href="#privacy" className="nav-link text-white small">Security</a>
          </li>
          <li className="nav-item">
            <a href="#privacy" className="nav-link text-white small">About ads</a>
          </li>
        </ul>
      </div>

  
      <div className="flex-grow-1 bg-light p-4">
        
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <button className="btn btn-secondary me-2">
              
            </button>
            <button className="btn btn-secondary">
              
            </button>
          </div>
          <div>
            <a href="#signup" className="btn btn-link text-dark me-2">Sign Up</a>
            <button className="btn btn-primary">Login</button>
          </div>
        </div>

    
        <section className="mb-5">
          <h2 className="mb-3">Spotify Playlists</h2>
          <div className="row">
            {[
              { img: './bts.jpg', title: 'K-Pop Songs', desc: 'K-pop mix' },
              { img: './jk.jpg', title: 'Jungkook', desc: 'Golden Album' },
              { img: './v.jpg', title: 'yeontan', desc: 'layover' },
              { img: './rm.jpg', title: 'Kim Namjoon', desc: 'Indigo' },
            ].map((item, idx) => (
              <div className="col-md-3 mb-4" key={idx}>
                <div className="card bg-white shadow-sm border-0 position-relative">
                  <img src={item.img} alt={item.title} className="card-img-top" />
                  <div className="position-absolute top-50 start-50 translate-middle text-white">
                    
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-muted">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        <section>
          <h2 className="mb-3">Music</h2>
          <div className="row">
            {[
              { img: './j-hope.jpg', title: 'Jung Ho-seok', desc: 'Producer' },
              { img: './suga.jpg', title: 'Min Yoongi', desc: 'K-pop Rapper' },
              { img: './ep.jpg', title: 'enhypen', desc: 'k-pop boy band' },
              { img: './ramcharan.jpg', title: 'Ram Charan', desc: 'Ram charan all hit songs' },
            ].map((item, idx) => (
              <div className="col-md-3 mb-4" key={idx}>
                <div className="card bg-white shadow-sm border-0 position-relative">
                  <img src={item.img} alt={item.title} className="card-img-top" />
                  <div className="position-absolute top-50 start-50 translate-middle text-white">
                    
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-muted">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
