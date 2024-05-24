import React from 'react';


const Navbar = () => {
  return (
    <div className="container">
      <div className="menu">
        <div className="left__Menu">
          <li>Home</li>
          <li>Destination</li>
          <li>Our Package</li>
        </div>
        <div className="right__Menu">
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact</li>
        </div>

      </div>
      {/* <div className="travel__logo">
        <img src="https://png.pngtree.com/template/20191030/ourmid/pngtree-travel-logo-airplane-design-airplane-tickets-travel-agencies-image_325199.jpg" alt="" />
      </div> */}
      <div className="background__Image">
        <img 
          src="https://t3.ftcdn.net/jpg/07/62/21/96/360_F_762219651_jUyrqSmBhtYcFQPGRWbuc4lmIG3qFGQD.jpg" 
          alt="Background"
        />
      </div>

      <div className="bgImageContent">
      <h2>Journey to the Unknown,Exploring
the World's Hidden Gems</h2>

  <p style={{color: "#292323",opacity:"1"}}>Traveling opens up a world of experiences, from exploring new cultures and cuisines to 
discovering breathtaking landscapes and historical landmarks.</p>
<button className='btn'>Contact Us</button>
      </div>
      
     
    </div>
  );
};

export default Navbar;
