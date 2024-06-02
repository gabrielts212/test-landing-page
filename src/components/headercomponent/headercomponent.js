// components/CustomPage.js
import React from 'react';

const CustomPage = ({ HeaderComponent, headerProps }) => {
  return (
    <div>
      <HeaderComponent {...headerProps} />
    
    </div>
  );
};

export default CustomPage;
