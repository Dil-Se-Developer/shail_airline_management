import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_section">
      <div className="footer_city">
        <div className="footer_cards">
          <h4>POPULAR LOCATIONS</h4>
          <p>Kolkata</p>
          <p>Mumbai</p>
          <p>Chennai</p>
          <p>Pune</p>
        </div>
        <div className="footer_cards">
          <h4>TRENDING LOCATIONS</h4>
          <p>Bhubaneshwar</p>
          <p>Hyderabad</p>
          <p>Chandigarh</p>
          <p>Nashik</p>
        </div>
        <div className="footer_cards">
          <h4>ABOUT US</h4>
          <p>About AirIndia Group</p>
          <p>Careers</p>
          <p>Contact Us</p>
          <p>AirIndia People</p>
          <p>Waah Jobs</p>
        </div>
        <div className="footer_cards">
          <h4>AirIndia</h4>
          <p>Help</p>
          <p>Sitemap</p>
          <p>Legal & Privacy information</p>
          <p>Blog</p>
        </div>
        <div className="footer_cards">
          <h4>FOLLOW US</h4>
          <BsFacebook size={'1.5rem'}/>
          <BsInstagram size={'1.5rem'}/>
          <BsTwitter size={'1.5rem'}/>
          <BsYoutube size={'1.5rem'}/>
        </div>
      </div>
      <div className="footer_country">
        <div className="footer_end_card_1">
          <span>Other Countries </span>
          <span> India</span>
          <span>-South Africa</span>
          <span>-Indonesia</span>
        </div>
        <div className="footer_end_card_1">
          <span>Free Classifieds in India</span>
          <span> © 2006-2022 AirIndia</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
