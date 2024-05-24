
import React from 'react';

const PopularContent = () => {
  const imageUrl = "https://www.celebritycruises.com/blog/content/uploads/2022/01/most-beautiful-mountains-in-the-world-kirkjufell-iceland-1024x580.jpg";

  return (
    <div className='imageContainer'>
      <div className="images">
        <img src={imageUrl} alt="" className='popularContentImages' />
        <img src={imageUrl} alt="" className='popularContentImages' />
        <img src={imageUrl} alt="" className='popularContentImages' />
      </div>
      <button className='popularContentBtn'>View Details</button>
      <div className='popularContent'>
        <h2>Popular Destination</h2>
        <p>We bring you the best recommendations for unforgettable experiences.</p>
      </div>
    </div>
  );
};

export default PopularContent;

