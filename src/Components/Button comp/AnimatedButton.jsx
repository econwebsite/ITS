import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AnimatedButton.css';
import { Link } from 'react-router-dom';

const AnimatedButton = ({
  text = 'Click Me',
  backgroundColor = '#344ea1',
  animationColor = '#69ba2f',
  hoverColor = '#69ba2f',
  className = '',
  onClick,
  to,
  ...props
}) => {
  const navigate = useNavigate(); 

  const handleClick = (event) => {
    // if (to) {
    //   navigate(to); 
    // }
    if (onClick) {
      onClick(event); 
    }
  };
  return (
to?<Link to={to} className='buttonLink' style={{textDecoration:"none"}}>
    <button 
      className={`newanimation ${className}`} 
      style={{ 
        backgroundColor, 
        '--animation-color': animationColor, 
        '--hover-color': hoverColor,
        color: 'white' 
      }}
      {...props}
    >
      {text}
    </button>
    </Link> :
    <button 
    className={`newanimation ${className}`} 
    style={{ 
      backgroundColor, 
      '--animation-color': animationColor, 
      '--hover-color': hoverColor,
      color: 'white' 
    }}
    onClick={onClick ? handleClick : undefined}
    {...props}
  >
    {text}
  </button>
  );
};

export default AnimatedButton;
