import React from 'react';
import ButtonSection from './ButtonSection'

const ButtonList = () => {
  const buttonItems = [
    { label: 'DOWNLOAD', icon: 'fab fa-apple', class: 'downloadapple'},
    { label: 'DOWNLOAD', icon: 'fab fa-google-play', class: 'downloadandroid'},

  ];

  return (
    <div id='buttoncontainer'>
      <ButtonSection buttonList={buttonItems} />
    </div>
  );
};

export default ButtonList;