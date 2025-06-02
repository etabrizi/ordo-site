import Layout from "../../../components/Layout";
import ContentBlock from "../../../components/ContentBlock";

import Head from "next/head";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/themeContext";

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
      <Layout pageTitle="native digital apps" activeNav="apps">
        <ContentBlock minHeight={575}>
          <h3>BP Logger</h3>
          <p>
            <strong>Stay in control of your health</strong> with BP Logger, the
            easy-to-use app for logging blood pressure readings.{" "}
          </p>
          <p>
            Take control of your blood pressure with a simple, private tracking
            tool. This app makes it easy to log your systolic and diastolic
            readings, then view your progress over time with a clear
            easy-to-read graph. Set daily notifications to help you stay
            consistent, and when needed, export your data as a CSV file or print
            it out to share with your GP. You'll also find helpful information
            and a personalised health recommendation, once enough readings are
            recorded.
          </p>
          <ul>
            <li>
              <strong>Average Readings:</strong> Get a rounded-up average of
              your blood pressure readings for days with multiple entries,
              providing a clear snapshot of your daily health.
            </li>
            <li>
              <strong>Daily Notifications:</strong> Receive timely reminders to
              log your blood pressure readings, ensuring consistency and helping
              you track your health progress.
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
            This app was built by <strong>Ordo Consultancy</strong>. If you have
            any questions or need support, please don’t hesitate to{" "}
            <a
              href="https://www.ordoconsultancy.net/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact us
            </a>
            .
          </p>
          <p>
            <a href="/apps/bp-logger/privacy-policy">View Privacy policy</a>
          </p>
          <Aside noBackground>
            <img
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
