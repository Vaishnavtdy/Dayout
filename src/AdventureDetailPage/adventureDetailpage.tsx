// AdventureDetailPage.tsx

import React, { useState, useEffect } from 'react';
import './AdventureDetailPage.css'; // Import your CSS file
import goa from './assets/adventure.jpg';
import CartButton from './CartButton';
import { Row } from 'react-bootstrap';
import { useParams ,useNavigate} from 'react-router-dom';
import { Card, CardSubtitle, CardText, CardTitle, CardBody, CardImg } from "reactstrap";
import { toast } from 'react-toastify';
interface AdventureDetail {
  id: string;
  name: string;
  rate: string;
  description: string;
  imageUrl: string;
  tripOutline: string;
  tripInstruction: string;
  tripIncludes: string;
  // ... other fields you need
}

interface Review {
  name: string;
  email: string;
  description: string;
}

const AdventureDetailPage: React.FC = () => {
    const navigate = useNavigate();
  const [content, setContent] = useState<string>('');
  const [adventureDetail, setAdventureDetail] = useState<AdventureDetail | null>(null);
  const [selectedView, setSelectedView] = useState<'description' | 'reviews'>('description');
  const [data, setData] = React.useState<Review[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchAdventureDetail = async () => {
      try {
        const response = await fetch(`http://localhost:4561/api/adventure-packages/${id}`);

        if (response.ok) {
          const data = await response.json();
          setAdventureDetail(data);
        } else {
          console.error('Failed to fetch adventure detail');
        }
      } catch (error) {
        console.error('Error fetching adventure detail:', error);
      }
    };

    fetchAdventureDetail();
  }, [id]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4561/api/add-Revies');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = async (quantity: number) => {
    console.log(`Adding to cart: Quantity - ${quantity}`);

    try {
      const response = await fetch('http://localhost:4561/api/add-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: adventureDetail?.name || '',
          rate: adventureDetail?.rate || '',
          description: adventureDetail?.description || '',
          imageUrl: adventureDetail?.imageUrl || '',
          tripOutline: adventureDetail?.tripOutline || '',
          tripInstruction: adventureDetail?.tripInstruction || '',
          tripIncludes: adventureDetail?.tripIncludes || '',
          quantity: quantity,
        }),
      });

      if (response.ok) {
        console.log('Cart submitted successfully');
        toast.success('Item added to cart successfully', {
          position: 'bottom-right',
          autoClose: 3000,
        });
      } else {
        console.error('Cart submission failed');
        toast.error('Failed to add item to cart', {
          position: 'bottom-right',
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error('Error submitting cart package:', error);
      toast.error('An error occurred', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  const handleViewCart = () => {
    console.log('View Cart clicked');
    // Implement the action you want when the "View Cart" button is clicked
    // For example, you can navigate to the cart page or show a modal
   
    navigate('/cart');
  };

  const handleViewSelection = (view: 'description' | 'reviews') => {
    setSelectedView(view);
  };

  const [Review, setReview] = useState<Review>({
    name: '',
    email: '',
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4561/api/add-Revies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Review),
      });

      console.log("response");
      console.log(response);
      if (response.ok) {
        console.log('review Submitted successfully');
        setReview({
          name: '',
          email: '',
          description: '',
        });
      } else {
        console.error('review submission failed');
      }
    } catch (error) {
      console.error('Error submitting review package:', error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setReview((prevPackage) => ({
      ...prevPackage,
      [name]: value,
    }));
  };

  if (!adventureDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="adventurepage">
      <div className="adventurecontainer">
        <div className="left-sid">
          <div className="text-row">
            <div className="text-row">
              <div className="column">
                <div className="text-element">
                  <img src={goa} className="adventureDetailimage" />
                  <div className="text-row">
                    <div className="text-element">{adventureDetail.description}</div>
                    <div className="text-element">Tour Packages</div>
                    <div className="text-elementBlue">{adventureDetail.name}</div>
                    <div className="text-elementOrange">{adventureDetail.rate}</div>
                    <div className="text-element">{adventureDetail.rate} ( 1 Night Stay)</div>
                    <div className="text-element">₹ 8,500.00 –3 Days ( 2 Night Stay)</div>
                    <div className="text-element">₹ 9,999.00 –4 Days ( 3 Night Stay)</div>
                    <div className="text-element">₹ 11,500 –5 Days ( 4 Night Stay)</div>
                    <CartButton onAddToCart={handleAddToCart} />
                    <button className="viewCartButton" onClick={handleViewCart}>
                      View Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hrLine"></div>
        <div className="additionalDivs">
          <div
            className={`additionalDiv ${selectedView === 'description' ? 'selected' : ''}`}
            onClick={() => handleViewSelection('description')}
          >
            Description
          </div>
          <div
            className={`additionalDiv ${selectedView === 'reviews' ? 'selected' : ''}`}
            onClick={() => handleViewSelection('reviews')}
          >
            Reviews
          </div>
        </div>
        {selectedView === 'description' && (
          <div className="contentContainer">
            <div className="text-elementunderline">Trip Outline</div>
            <div className="text-element">{adventureDetail.tripOutline}</div>
            <div className="text-elementunderline">Trip Instruction</div>
            <div className="text-element">{adventureDetail.tripInstruction}</div>
            <div className="text-elementunderline">Trip Includes</div>
            <div className="text-element">{adventureDetail.tripIncludes}</div>
          </div>
        )}
        {selectedView === 'reviews' && (
          <div className="contentContainer">
            {data.map((review) => (
              <Card key={review.email}>
                <CardBody>
                  <div className="reviews-top">
                    <div className="user-details">
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {review.name}
                      </CardSubtitle>
                    </div>
                    <div className="reviews-body">
                      <CardText>{review.description}</CardText>
                    </div>
                    <CardText>
                      <small className="text-muted text-bold">{review.email}</small>
                    </CardText>
                  </div>
                </CardBody>
              </Card>
            ))}
            <div className="reviewcontainer">
              <div className="text-element">Add a review</div>
              <div className="text-element">Your email address will not be published. Required fields are marked *</div>
              <div className="text-element">Your review</div>
              <div style={{ marginBottom: '15px' }}>
                <br />
                <textarea
                  id="description"
                  name="description"
                  value={Review.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  cols={195}
                  style={{ resize: 'vertical' }}
                />
                <div className="horizontalContainer">
                  <div className="horizontalFields">
                    <div className="formField">
                      <Row>
                        <div>Name*</div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          className="customInput"
                          onChange={handleInputChange}
                          value={Review.name}
                        />
                      </Row>
                    </div>
                    <div className="formField">
                      <Row>
                        <div>Email*</div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          className="customInput"
                          onChange={handleInputChange}
                          value={Review.email}
                        />
                      </Row>
                    </div>
                  </div>
                </div>
                <button type="submit" className="submitButton" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdventureDetailPage;
