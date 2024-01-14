import React from 'react';
import Header from './Header';

const MenuOps = () => {
  const menuItems = [
    { label: 'DESCRIPTION', link: '#Description' },
    { label: 'FEATURES', link: '#Features' },
    { label: 'SCREENS', link: '#Screens' },
    { label: 'EXTRA', link: '#Extra', 
      submenu: [
        { label: 'ARTICLE DETAILS', link: '#ArticleDetails' },
        { label: 'TERMS CONDITIONS', link: '#TermsConditions' },
        { label: 'PRIVACY POLICY', link: '#PrivacyPolicy' }
      ]
    },
    { label: 'DOWNLOAD', link: 'https://factoriaf5.org/' }
  ];

  return (
    <div>
      <Header logoSrc="./assets/logo.svg" menuItems={menuItems} />
    </div>
  );
};

export default MenuOps;