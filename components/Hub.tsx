import { ReactNode, Fragment } from "react";
import Footer from "./Footer";
import Heading from "./Heading";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

type Props = {
  children?: ReactNode;
  pageTitle?: string;
};

const Hub = ({ children, pageTitle }: Props) => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <Fragment>
      <div className="hub">
        <header>
          <Heading />
          {pageTitle && (
            <h2>
              {" "}
              <Typewriter
                options={{
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString(pageTitle).pauseFor(25000).start();
                }}
              />
            </h2>
          )}
        </header>
        <main>{children}</main>
        <Footer />
      </div>
      <style jsx>{`
        h2 {
          margin: 0;
          padding: 30px 30px 60px 30px;
        }
        .hub {
          margin: 0 auto;
          width: 100%;
        }
        header {
          background: #b8baba;
          border-radius: 1.6em;
          margin-bottom: 10px;
          min-height: 495px;
        }
        @media only screen and (min-width: 767px) {
          h2 {
            margin: 233px 165px 0 20px;
            padding: 0;
          }
          .hub {
            margin: 0 auto;
            width: 1000px;
            margin: 20px auto;
          }
          header {
            background: ${lightTheme
              ? "#b8baba url(/ordo_header.png) top no-repeat"
              : "#b8baba url(/ordo_header_dark.png) top no-repeat;"};
            border-radius: 1.6em;
            margin-bottom: 10px;
            animation: fadeIn;
            animation-duration: 0.7s;
          }

          @-webkit-keyframes fadeIn {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Hub;
