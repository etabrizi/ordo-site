import Head from "next/head";
import Layout from "../../components/Layout";
import ContentBlock from "../../components/ContentBlock";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/themeContext";

const Contact = () => {
  const { lightTheme } = useContext(ThemeContext);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formDisabled, setFormDisabled] = useState(true);
 
  const setNameForm = (event : any) => {
    setName(event.target.value)
    checkForm()
  }

  const setEmailForm = (event : any) => {
    setEmail(event.target.value)
    checkForm()
  }

  const setMessageForm = (event : any) => {    
    setMessage(event.target.value)
    checkForm()
  }

  const checkForm = () => {
    if((name !== '') && (email !== '') && (message !== '')) {
      setFormDisabled(false);
    }else{
      setFormDisabled(true);
    }
  }

  return (
    <>
      <Head>
        <title>
          Ordo Consultancy Ltd - A Digital Consultancy Service - Contact us
        </title>
      </Head>
      <Layout pageTitle="Let's connect" activeNav="contact">
        <ContentBlock>
          <h3>Contact</h3>
          <p>
            If you're intrested in using our services, please use our enquiry
            form. Alternatively, contact us via our social media platforms.
          </p>
          <form
            name="contact"
            action="/success"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                Your Name: <input onChange={setNameForm} type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" onChange={setEmailForm} name="email" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" onChange={setMessageForm}></textarea>
              </label>
            </p>
            <p>
              <button disabled={formDisabled} className="button" type="submit">
                Send
              </button>
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

          form {
            width: 100%;
          }

          form p {
            width: 100%;
          }

          form label {
            width: 100%;
            display: block;
          }

          form input,
          form textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid grey;
            font-family: arial;
            outline: none;
            background: ${lightTheme ? "#fff" : "#000"};
            color: ${lightTheme ? "#000" : "#fff"};
          }

          form textarea {
            min-height: 150px;
          }

          .hide {
            display: none;
          }

          .warning {
            padding: 10px;
            border: 1px solid #fd9c03;
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

          .button {
            font-size: 1.4em;
            text-align: center;
            background: #ffa800;
            bottom: 0;
            display: block;
            padding: 7px 20px;
            border-radius: 1.6em;
            text-decoration: none;
            border: none;
            color: #000;
            transition: scale 12.2s;
            margin-bottom: 30px;
            cursor: pointer;
          }
          .button:hover {
            background: #e0e0e0;
            transform: scale(1.05, 1.05);
            transition: transform 0.2s;
          }

          .button:disabled {
            opacity: 0.6;
            background: #b9b9b9;
          }
        `}</style>
      </Layout>
    </>
  );
};

export default Contact;
