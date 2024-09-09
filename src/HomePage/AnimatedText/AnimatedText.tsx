// src/components/AnimatedText.tsx
import { link } from 'fs';
import React from 'react';
import './AnimatedText.css';
import { useNavigate ,Link} from 'react-router-dom';

interface AnimatedTextProps {
  firstText: string;
  secondText: string;
  subText: string;
  animate: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ firstText, secondText,subText, animate }) => {
  // Split the main text into two parts
  const [firstPart, secondPart] = firstText.split(' ');
  const navigate = useNavigate();
  const handleButtonClick = () => {
    try {
     console.log("enter")
      navigate('/inquiry');
    } catch (error) {
      console.log("not enter")
      console.error('An error occurred:', error);
     
    }
  };

  return (
    <div className={`animated-text ${animate ? 'animate' : ''}`}>
      <div className="main-text">
        <span className="yellow-text">{firstPart}</span>
        <span className="black-text">{secondPart}</span>
        <span className="black-text">  </span>
        <span className="black-text">{secondText}</span>
         <div className="sub-text">{subText}</div>
         <Link to="/inquiry" className="button">
          Enquir Now !
          </Link>
        {/* </button> */}
      </div>
     
    </div>
  );
};

export default AnimatedText;
