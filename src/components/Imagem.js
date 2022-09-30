import React from 'react';

const Imagem = ({ photo, alt }) => {
  return <img src={photo} alt={alt} className='m-1' />;
};

export default Imagem;
