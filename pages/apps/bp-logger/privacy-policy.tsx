import Layout from "../../../components/Layout";
import ContentBlock from "../../../components/ContentBlock";
import Head from "next/head";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/themeContext";
import Image from "next/image";
import Aside from "../../../components/Aside";

const Development = () => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>
          Ordo Consultancy Ltd - A Digital Consultancy Service - Development
          services
        </title>
      </Head>
      <Layout pageTitle="BP Logger" activeNav="apps">
        <ContentBlock minHeight={575}>
          <h3>Privacy Policy for BP Logger App</h3>
          <p>
            <strong>Effective Date:</strong> June 2025
          </p>

          <h3>1. Introduction</h3>
          <p>
            BP Logger App ("we," "our," or "us") respects your privacy. This
            Privacy Policy explains how we collect, use, and protect your
            information when you use our mobile application ("BP Logger App").
          </p>

          <h3>2. Data Collection and Storage</h3>
          <ul>
            <li>
              <strong>Local Storage Only:</strong> All data you enter into BP
              Logger App, including blood pressure readings and related health
              information, is stored <strong>locally on your device</strong>.
            </li>
            <li>
              <strong>No Tracking or Analytics:</strong> We do{" "}
              <strong>not collect</strong> any personal information, usage data,
              or analytics.
            </li>
            <li>
              <strong>Anonymous Data:</strong> Your health data remains{" "}
              <strong>completely anonymous</strong> and is not linked to your
              identity.
            </li>
            <li>
              <strong>No External Access:</strong> We do{" "}
              <strong>not share, transmit, or sell</strong> any data to third
              parties.
            </li>
          </ul>

          <h3>3. Your Data, Your Control</h3>
          <ul>
            <li>You have full control over your data.</li>
            <li>
              You can delete or export your data at any time from within the
              app.
            </li>
            <li>No data is stored on our servers.</li>
          </ul>

          <h3>4. Data Security</h3>
          <p>
            While we do not control the security of your device, BP Logger App
            is designed to store data securely in local storage. Please ensure
            you take appropriate measures to secure your device.
          </p>

          <h3>5. Children's Privacy</h3>
          <p>
            BP Logger App is not intended for individuals under the age of 12.
          </p>

          <h3>6. Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy occasionally. Any changes will be
            posted with an updated "Effective Date" above.
          </p>

          <h3>7. Contact Us</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact our director Emyr, at:
          </p>
          <p>
            <strong>Ordo Consultancy Ltd</strong> <strong>Email:</strong>{" "}
            <a href="mailto:emyr@ordoconsultancy.net">
              emyr@ordoconsultancy.net
            </a>
          </p>

          <Aside noBackground>
            <Image
              src="/bp-logo.png"
              alt="Bp Logger logo"
              width={256}
              height={256}
            />
          </Aside>
        </ContentBlock>
        <style jsx>{`
          .stack-wrapper {
            background: #fff;
          }

          .clients {
            display: flex;
          }

          h3 {
            color: ${lightTheme ? "#000" : "#fff"};
            transition: color 0.2s;
            font-size: 24px;
          }
          a {
            color: ${lightTheme ? "#000" : "#fff"};
            transition: color 0.2s;
          }
        `}</style>
      </Layout>
    </>
  );
};

export default Development;
