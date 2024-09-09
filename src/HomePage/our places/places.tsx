// AdventurePackage.tsx

import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './places.sass'; // Import the CSS file
import backgroundImage from '../assets/beach.jpg'; // Replace with the actual path to your background image
import { Link } from 'react-router-dom';
import dummy from '../assets/adventure.jpg'
interface AdventurePackage {
  _id: string;
  name: string;
  rate: string;
  description: string;
  imageUrl: string;
  tripOutline: string;
  tripInstruction: string;
  tripIncludes: string;
}

const AdventurePackageCard: React.FC<{ adventurePackage: AdventurePackage }> = ({ adventurePackage }) => {
  return (
    <Col md={3} className="col-cardStyles">
      <Card key={adventurePackage._id}>
        <Link to={`/adventure/${adventurePackage._id}`} className="card-link"> {/* Use Link to navigate */}
          <div className="card">
            <img src={dummy} alt={adventurePackage.name} />
            {/* <img src={adventurePackage.imageUrl} alt={adventurePackage.name} /> */}
            <div className="overlay-text-bottom">{adventurePackage.description}</div>
          </div>
        </Link>
      </Card>
    </Col>

  );
};

const AdventurePackageList: React.FC = () => {
  const [data, setData] = React.useState<AdventurePackage[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4561/api/adventure-packages');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
    className="main-container"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      padding: '2rem 2rem',
    }}
  >
    <div className="card-list-container" style={{ padding: '2rem 2rem' }}>
      <div className="heading-container">
       <h1 className="heading">ADVENTURE ACTIVITIES</h1>
      </div>
      <div className="space"></div>
      <Row className="row-gap3">
        {data.map((item, index) => (
          <AdventurePackageCard key={index} adventurePackage={item} />
        ))}
      </Row>
    </div>
    </div>
  );
};

export default AdventurePackageList;
