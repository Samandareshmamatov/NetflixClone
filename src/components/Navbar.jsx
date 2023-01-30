import React from "react";
import { auth } from "../firebase/config";
import logo from "../img/Netflix_logo.png";
const Navbar = ({ user }) => {
  const [fixed, setFixed] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  });
  return (
    <div className={`navbar  ${fixed ? "fixedNav" : ""}`}>
      <div className="logoLink">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navRight">
        <div className="userImgBox">
          <img src={user.photoURL} alt="Rasm" className="userImage" />
        </div>
        <div>
          <button className="userBtn" onClick={() => auth.signOut()}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
