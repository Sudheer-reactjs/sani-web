import React from 'react';
import PropTypes from 'prop-types';
HowItWorkSection.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  };

export default function HowItWorkSection({title, content, imageUrl}) {
  return (
    <>
       <div className='grid md:grid-cols-2 justify-center items-center'> 
          <div className=''>
             <h3>{title}</h3>
             <p>{content}</p>
          </div>
          <div className='flex justify-center'>
             <img className='' src={imageUrl}></img>
          </div>
       </div>
    </>
  )
}
