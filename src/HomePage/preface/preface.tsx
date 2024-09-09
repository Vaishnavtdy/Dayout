// App.js

import React from 'react';
import './preface.css'; // Import your CSS file for styling
import theng from '../assets/theng.png';
const Prefaces = () => {
  <div id="prefaces"></div>
  return (
    <section className="home pt-5 pb-5" id="home">
      <div className="row justify-content-evenly align-middle">
        {/* <!-- here data-aos is used for adding aos animation  --> */}
        <div className="col-10 col-md-6 text-center text-md-start" data-aos="slide-right">
          <h2>
            Welcome to the <br /><span className="c-orange">Place of Enjoyment</span>
          </h2>
          <p className="text-muted">
          Dream Goa Travel Company  is the best travel agency in goa, to satisfy your dream plan in goa then choose our service to provide you 100% statisfication.Goa trip is a perfect heaven for the ones who need and want relaxation. Goa Beach Resorts always add to the fun.Tour packages at best price available in goacalling. Here we provide all types of vechicle which will fulfill your needs.The cabs are air-conditioned, have panic buttons and all drivers trained in self-defence and first-aid
          </p>
          <a href="" className="link ms-4 d-none">See My Work</a>
        </div>
        <div className="col-10 col-md-4 d-none d-md-block">
          <img src={theng} className="img-fluid" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Prefaces;
