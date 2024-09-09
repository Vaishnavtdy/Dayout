import React from 'react';
import './ServiceSection.css';
import one_a from '../assets/1a.jpg';
import two_a from '../assets/2a.jpg';
import three_a from '../assets/3a.jpg';
import four_a from '../assets/4a.jpg';


const ServiceSection: React.FC = () => {
  return (
    <section>
      <div className="text">
        <h2>We have the best services available for you!</h2>
      </div>
      <div className="rowitems">
        <div className="container-box">
          <div className="container-image">
          
            <img src={one_a} alt="Flight Services" />
          </div>
          <h4>Flight Services</h4>
          <p>Arrival and Departure</p>
        </div>

        <div className="container-box">
          <div className="container-image">
          <img src={two_a} alt="Flight Services" />
          </div>
          <h4>Food Services</h4>
          <p>Catering</p>
        </div>

        <div className="container-box">
          <div className="container-image">
          <img src={three_a} alt="Flight Services" />
          </div>
          <h4>Travel Services</h4>
          <p>Pick-up/drop</p>
        </div>

        <div className="container-box">
          <div className="container-image">
          <img src={four_a} alt="Flight Services" />
          </div>
          <h4>Hotel Services</h4>
          <p>Check-in/out</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
