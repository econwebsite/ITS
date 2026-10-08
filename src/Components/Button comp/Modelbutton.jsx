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
  border='none',
  isOpen,
  onOpen,
  onClose,

  }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isControlled = typeof isOpen === 'boolean';

  const modalType = formType || (text.toLocaleLowerCase().includes('Download') ? 'download' : 'contact');
  const showModal = () => {
    if (onOpen) {
      onOpen();
    }

    if (!isControlled) {
      setIsModalVisible(true);
    }
  };

  const handleCancel = () => {
    if (onClose) {
      onClose();
    }

    if (!isControlled) {
      setIsModalVisible(false);
    }
  };

  const modalVisible = isControlled ? isOpen : isModalVisible;

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
        visible={modalVisible}
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
