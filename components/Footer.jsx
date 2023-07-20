import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook, AiOutlineWhatsApp} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 ARYAS Headphones All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineFacebook />
        <AiOutlineWhatsApp />
      </p>
    </div>
  )
}

export default Footer