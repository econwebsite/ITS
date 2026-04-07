import React, { useState } from 'react';
// import { Button } from 'antd';
import "./Modelbutton.css"
import Modelform from './Modelform';

const Modelbutton =({
  text = 'Contact Us',
  backgroundColor = '#344ea1',
  animationColor = '#69ba2f',
  hoverColor = '#69ba2f',
  className = '',
  productName = null,
  docName = null,
  type: formType = null,
  title = null,
  padding = '10px 20px',
  fontSize = '1em',
  borderRadius = '5px',
  border='none'

  }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalType = formType || (text.toLocaleLowerCase().includes('Download') ? 'download' : 'contact');
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button className={`newanimation ${className}`} 
        type="primary"
        style={{ 
          backgroundColor, 
          '--animation-color': animationColor, 
          '--hover-color': hoverColor,
          color: 'white',
          padding: padding, 
          fontSize:fontSize,
          borderRadius: borderRadius,
          border: border
        }}
        onClick={showModal}
      >
       {text}
      </button>

      <Modelform
        visible={isModalVisible}
        onClose={handleCancel}
        type = {modalType}
        productName={productName || null}
        docName={docName || null}
        buttonText={text}
        title = {title || null}
      />
    </div>
  );
};

export default Modelbutton;
