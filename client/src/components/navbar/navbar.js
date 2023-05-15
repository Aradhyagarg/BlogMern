import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";
import "./navbar.css";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:8000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className='nav'>
        <div className='navLeft'>
          <h1 className="navlogo">
          <img src="./Snip.png" height={60} width={300} alt="Logo"/>
          </h1>
        </div>
        <div className='navCenter'>
          <ul className="navList">
            <li className="navListItem">
              <Link className="link navAlign" to="/">
                <span>
                  <i className="navIcon fa-solid fa-house"></i>
                </span>
                <span className="navText">
                  HOME
                </span>
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link navAlign" to="/about">
                <span>
                  <i className="navIcon fa-solid fa-address-card"></i>
                </span>
                <span className="navText">
                  ABOUT
                </span>
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link navAlign" to="/contact">
                <span>
                  <i className="navIcon fa-solid fa-location-crosshairs"></i>
                </span>
                <span className="navText">
                  CONTACT
                </span>
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link navAlign" to="/publish">
                <span>
                  <i className="navIcon fa-solid fa-upload"></i>
                </span>
                <span className="navText">
                  PUBLISH
                </span>
              </Link>
            </li>
            <li className="navListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className='navRight'>
          {user ? (
            <Link to="/settings">
              <img className="navImg" src={PF+user.profilePic} alt="" />
            </Link>
          ) : (
            <ul className="navList">
              <li className="navListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="navListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
        </div>
    </div>
  )
}
