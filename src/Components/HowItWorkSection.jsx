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
       <div className='grid md:grid-cols-2 items-center gap-[24px] mt-[50px] md:mt-[90px] md:mb-[130px]'>  
          <div className='number-text'>
             <h3 className='mb-[20px]'>{title}</h3>
             <p className='max-w-[580px] lg:text-[28px] lg:leading-[34px]'>{content}</p>
          </div>
          <div className='flex justify-center'>
             <img className='' src={imageUrl}></img>
          </div>
       </div>
    </>
  )
}
