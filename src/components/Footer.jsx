import React from "react";
import logo from "../img/Netflix_logo.png"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container container">
          <div className="footerLogoBox">
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <h3 className="footer-title">
              &copy; Copyright {new Date().getFullYear()}
            </h3>
            <p className="footer-description">
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
              Vivamus mattis eros at sem pulvinar tincidunt.
            </p>
          </div>
          <div>
            <h3 className="footer-title">Site pages</h3>
            <ul className="footer-content-list-box">
              <li className="content-list">Home</li>
              <li className="content-list">Services</li>
              <li className="content-list">Portfolio</li>
              <li className="content-list">Group</li>
              <li className="content-list">Contacts</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Our Social Media</h3>
            <ul className="footer-end-content">
              <li className="footer-end-list">telegram</li>
              <li className="footer-end-list">Facebook</li>
              <li className="footer-end-list">Instagram</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
