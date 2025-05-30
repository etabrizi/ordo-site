import Link from "next/link";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/themeContext";
import AuthContext from "../contexts/authContext";

type Props = {
  active: string;
};

const Navigation = ({ active }: Props) => {
  const { lightTheme } = useContext(ThemeContext);
  const [mobileToggle, setMobileToggle] = useState(false);
  const { user, login, logout, authReady } = useContext(AuthContext);


  const setToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  return (
    <nav className={mobileToggle ? "open" : "closed"}>
      <button
        className="toggle-button"
        aria-label="Toggle menu"
        onClick={setToggle}
      ></button>
      <ul>
        <li id="home" className={active === "home" ? "active" : ""}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li id="development" className={active === "development" ? "active" : ""}>
          <Link href="/development">
            <a>Development</a>
          </Link>
        </li>
         <li id="apps" className={active === "apps" ? "active" : ""}>
          <Link href="/apps">
            <a>Apps</a>
          </Link>
        </li>
        <li id="design" className={active === "design" ? "active" : ""}>
          <Link href="/design">
            <a>Design</a>
          </Link>
        </li>
        <li id="contact" className={active === "contact" ? "active" : ""}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <div className="login-panel">
        {authReady && (
          <div>
            {!user && (
              <button className="login-btn" onClick={login}>
                Client login
              </button>
            )}

            {user && (
              <>
                <span className="email">{user && user?.email}</span>
                <button className="logout-btn" onClick={logout}>
                  logout
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .login-btn,
        .logout-btn {
          background: #404040;
          border: none;
          border-radius: 1.6em;
          padding: 5px 15px;
          font-size: 1.4em;
          margin-right: 20px;
          color: #fff;
          cursor: pointer;
        }
        .email {
          color: #fff;
          font-size: 1.6em;
          margin-right: 10px;
        }

        .login-panel {
          border-radius: 1.6em;
          position: absolute;
          top: 40px;
          right: 0;
          display: none;
        }

        nav {
          width: 100%;
        }
        nav.closed ul {
          display: none;
        }

        .toggle-button {
          position: absolute;
          right: 15px;
          top: 12px;
          border: none;
          height: 40px;
          width: 40px;
          cursor: pointer;
          background: ${!mobileToggle
            ? `transparent url("data:image/svg+xml,%3Csvg id='Layer_1' width='100%25' height='100%25' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12,2A10,10,0,1,1,2,12,10,10,0,0,1,12,2Zm0-2A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm6,17H6V15H18Zm0-4H6V11H18Zm0-4H6V7H18Z' transform='translate(0 0)' fill='%23fff'/%3E%3C/svg%3E") no-repeat;`
            : `transparent url("data:image/svg+xml,%3Csvg version='1.1' width='100%25' height='100%25' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 24 24' style='enable-background:new 0 0 24 24;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12 s12-5.4,12-12S18.6,0,12,0z M18,16.1L13.8,12l4.1-4.1L16.1,6L12,10.2L7.8,6.1L6,7.9l4.2,4.1l-4.1,4.2L7.9,18l4.1-4.2l4.1,4.1 C16.2,17.9,18,16.1,18,16.1z'/%3E%3C/svg%3E%0A") no-repeat;`};
        }

        nav ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          font-size: 1.4em;
          line-height: 1em;
          flex-direction: column;
        }
        nav li a {
          background: #494949;
          color: #fff;
          padding: 20px;
          text-decoration: none;
          width: 100%;
          display: block;
          box-sizing: border-box;
        }
        nav li.active a {
          background-color: ${lightTheme ? "#fff" : "#000"};
          color: ${lightTheme ? "#000" : "#fff"};
          transition: color 0.2s, background-color 0.2s;
        }
        @media only screen and (min-width: 767px) {
          .login-panel {
            display: block;
          }

          nav.closed ul,
          nav.open ul {
            display: flex;
          }
          .toggle-button {
            display: none;
          }

          nav {
            width: 100%;
            margin-left: 20px;
          }
          nav ul {
            flex-direction: row;
          }
          nav ul li {
            margin-right: 3px;
          }
          nav li a {
            padding: 14px 40px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
