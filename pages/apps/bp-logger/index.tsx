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
          Ordo Consultancy Ltd - A Digital Consultancy Service - App services
        </title>
      </Head>
      <Layout pageTitle="native digital capacity" activeNav="apps">
        <ContentBlock minHeight={575}>
          <h3>BP Logger</h3>

          <p>
            <strong>Stay in control of your health</strong> with BP Logger, the
            easy-to-use app for logging blood pressure readings.{" "}
          </p>
          <p>
            The app empowers you to monitor and manage your blood pressure from
            your mobile device. Your readings are securely stored locally on
            your phone or tablet, giving you complete control over your health
            data at all times. You can log readings manually, review over time,
            and explore how lifestyle factors like stress, exercise, or alcohol
            may be affecting your blood pressure.
          </p>
          <p>
            The app also includes optional notifications, health recommendation
            based on guidelines, and the ability to print or share your readings
            with your GP. This helps support proactive health management and
            encourages small, informed changes to maintain healthy blood
            pressure.
          </p>

          <ul>
            <li>
              <strong>Average Readings:</strong> Get a rounded-up average of
              your blood pressure readings for days with multiple entries,
              providing a clear snapshot of your daily health.
            </li>
            <li>
              <strong>PDF Download:</strong> Export your blood pressure logs as
              a PDF to easily share with your healthcare provider.
            </li>
            <li>
              <strong>Personalised Recommendation:</strong> Receive tailored
              health recommendation based on your readings.
            </li>
            <li>
              <strong>Comprehensive History with Graph:</strong> Visualize your
              progress over time with easy-to-read graph of your blood pressure
              history.
            </li>

            <li>
              <strong>CSV Export:</strong> Export your blood pressure data as a
              CSV file for further analysis or record-keeping.
            </li>
          </ul>

          <p>
            <a href="/apps/bp-logger/privacy-policy">View Privacy policy</a>
          </p>
          <Aside noBackground>
            <Image src="/bp-logo.png" alt="Bp Logger logo" width={256} height={256} />
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
