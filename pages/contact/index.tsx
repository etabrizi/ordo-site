import Head from "next/head";
import Layout from "../../components/Layout";
import ContentBlock from "../../components/ContentBlock";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

const Contact = () => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>
          Ordo Consultancy Ltd - A Digital Consultancy Service - Contact us
        </title>
      </Head>
      <Layout pageTitle="Let's talk" activeNav="contact">
        <ContentBlock>
          <h3>Contact</h3>
          <p>
            In the age of automation and messaging, just a friendly chat is a
            great way for introduction. Or alternatively, contact us via our
            social platforms.
          </p>
          <p>
            <a className="telephone" href="tel:44 7850 174 596">
              (m)+44 7850 174 596
            </a>
          </p>
          <p>Or send us a message</p>
          <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
          <ul className="links">
            <li>
              <a
                className="contact-links"
                href="https://twitter.com/ordoconsultancy"
              >
                <span
                  className={lightTheme ? "icon-twitter" : "icon-twitter-white"}
                ></span>
                <span>We're on twitter</span>
              </a>
            </li>
            <li>
              <a
                className="contact-links"
                href="https://www.linkedin.com/company/ordo-consultancy-limited/"
              >
                <span
                  className={
                    lightTheme ? "icon-linkedin" : "icon-linkedin-white"
                  }
                ></span>
                <span>We're on linkedin</span>
              </a>
            </li>
          </ul>
        </ContentBlock>
        <style jsx>{`
          h3 {
            color: ${lightTheme ? "#000" : "#fff"};
            transition: color 0.2s;
          }
          .clients {
            display: flex;
          }

          .telephone {
            color: ${lightTheme ? "#000" : "#fff"};
            font-size: 1.2em;
            transition: color 0.2s;
          }

          .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: flex-start;
          }
          .links li {
            font-size: 1.2em;
            color: #000;
            padding: 20px 20px 20px 0;
          }
          .contact-links {
            display: block;
            transition: 0.2s;
            color: ${lightTheme ? "#000" : "#fff"};
          }
          .contact-links:hover span:first-child {
            transform: scale(1.1, 1.1);
            transition: 0.2s;
          }
          .contact-links span {
            display: inline-block;
            vertical-align: top;
            transition: 0.2s;
          }
          .contact-links span:last-child {
            margin-top: 7px;
            margin-left: 10px;
          }
        `}</style>
      </Layout>
    </>
  );
};

export default Contact;
