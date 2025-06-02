import Layout from "../../components/Layout";
import ContentBlock from "../../components/ContentBlock";

import Head from "next/head";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import Aside from "../../components/Aside";

const Development = () => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>
          Ordo Consultancy Ltd - A Digital Consultancy Service - App services
        </title>
      </Head>
      <Layout pageTitle="native digital capacity" activeNav="apps">
        <ContentBlock minHeight={575}>
          <h3>App services</h3>

          <p>
            At Ordo Consultancy Ltd, we specialise in building high-quality web
            and mobile applications for a range of platforms, including both{" "}
            <strong>Apple (iOS)</strong> and <strong>Android</strong> devices.
          </p>

          <p>
            Our approach combines the latest technology with years of
            experience, ensuring your app is robust, scalable, and ready for
            your audience. Whether you need a{" "}
            <strong>native application</strong> for Apple, a{" "}
            <strong>cross-platform app</strong> that works seamlessly across
            devices, or a <strong>Progressive Web App (PWA)</strong> to maximise
            reach and engagement, we’ve got you covered.
          </p>

          <p>
            We use a range of cutting-edge tools and frameworks to deliver
            top-notch results, including:
          </p>
          <ul>
            <li>
              <strong>Capacitor</strong> for building hybrid apps that combine
              native performance with web technologies.
            </li>
            <li>
              <strong>React Native</strong> for creating powerful cross-platform
              experiences with shared codebases.
            </li>
            <li>
              <strong>Xcode</strong> for native iOS app development and
              deployment to the App Store.
            </li>
          </ul>

          <p>
            Our focus is on delivering intuitive, user-friendly applications
            that meet your business needs and delight your users.
          </p>

          <p>
            <strong>📲 Let’s bring your app idea to life.</strong>
          </p>

          <Aside noBackground>

            <p><a href="/apps/bp-logger">BP Logger - Native Apple app</a></p>
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
          h4 {
            text-align: left;
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
