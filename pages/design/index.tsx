import Layout from "../../components/Layout";
import ContentBlock from "../../components/ContentBlock";
import Link from "next/link";
import Head from "next/head";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

const Design = () => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>
          Ordo Consultancy Ltd - A Digital Consultancy Service - Design services
        </title>
      </Head>
      <Layout pageTitle="Let's get creative" activeNav="design">
        <ContentBlock>
          <h3>Design services</h3>
          <p>
            Ordo provides a high level experienced digital design consultancy
            service. Using the latest creative tools, we aim to achieve
            excellent production results.
          </p>

          <span
            title="Adobe Indesign, Adobe Illustrator, Adobe Photoshop, Miro, Figma."
            className="art-packs"
          ></span>

          <ul className="copy">
            <li>
              We offer a step by step process for delivery, which keeps the
              design process clear and concise.
            </li>
            <li>
              We listen to clients needs and make sure our work satisfies the
              requirements.
            </li>
            <li>
              We aim to achive high end results, on time and with the greatest
              impact.
            </li>
          </ul>

          <p>
            Why not{" "}
            <Link href="/contact">
              <a className="bold">get in touch</a>
            </Link>
            . We're happy to discuss anything free of charge.
          </p>
        </ContentBlock>
        <style jsx>{`
          h3 {
            color: ${lightTheme ? "#000" : "#fff"};
            transition: color 0.2s;
          }
          a {
            color: ${lightTheme ? "#000" : "#fff"};
            transition: color 0.2s;
          }
          h4 {
            text-align: left;
            margin-bottom: 20px;
          }
          .art-packs {
            display: block;
            height: 92px;
            background: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 753.3 127.2' style='enable-background:new 0 0 753.3 127.2;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%232D0E0F;%7D .st1%7Bfill:%23F4991C;%7D .st2%7Bfill:%23132035;%7D .st3%7Bfill:%2353A0D8;%7D .st4%7Bfill:%23460D22;%7D .st5%7Bfill:%23E83C69;%7D .st6%7Bfill:%23FFD131;%7D .st7%7Bfill:%23191834;%7D .st8%7Bfill:%234CB37D;%7D .st9%7Bfill:%23765FA6;%7D .st10%7Bfill:%23E95025;%7D .st11%7Bfill:%23EE7265;%7D .st12%7Bfill:%2346B7EA;%7D%0A%3C/style%3E%3Cg id='vlpa'%3E%3Cg id='vlpb'%3E%3Cg id='vlpc'%3E%3Cg id='vlpd'%3E%3Cpath class='st0' d='M196.5,0.2h84.1c12.8,0,23.1,10.3,23.1,23.1v80.9c0,12.8-10.3,23.1-23.1,23.1h-84.1 c-12.8,0-23.1-10.3-23.1-23.1V23.2C173.4,10.5,183.7,0.2,196.5,0.2z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg id='vlpe'%3E%3Cg id='vlpf'%3E%3Cpath class='st1' d='M236.4,76.2h-20.2L212,88.9c-0.1,0.5-0.5,0.8-1,0.8h-10.2c-0.6,0-0.8-0.3-0.6-1l17.5-50.3 c0.2-0.5,0.3-1.1,0.5-1.8c0.2-1.1,0.3-2.3,0.3-3.5c-0.1-0.3,0.2-0.5,0.4-0.6h0.2H233c0.4,0,0.7,0.2,0.7,0.4l19.8,55.9 c0.2,0.6,0,0.9-0.5,0.9h-11.3c-0.4,0.1-0.8-0.2-0.9-0.6L236.4,76.2L236.4,76.2z M219.3,65.1h13.8c-0.3-1.1-0.8-2.5-1.2-3.9 c-0.5-1.5-1-3-1.5-4.7c-0.5-1.7-1-3.3-1.6-5c-0.5-1.7-1-3.3-1.5-4.8c-0.4-1.5-0.8-2.9-1.2-4.2H226c-0.5,2.3-1.1,4.7-1.8,7 c-0.8,2.6-1.6,5.3-2.5,8C220.9,60.3,220.1,62.9,219.3,65.1L219.3,65.1z'/%3E%3Cpath class='st1' d='M265.7,42c-1.8,0.1-3.5-0.7-4.8-1.9c-1.2-1.4-1.9-3.1-1.8-5c-0.1-1.8,0.7-3.6,2-4.8c1.3-1.2,3-1.9,4.8-1.9 c2.1,0,3.7,0.7,4.9,1.9c1.2,1.3,1.8,3,1.8,4.8c0.1,1.8-0.6,3.6-1.9,5C269.4,41.4,267.5,42.1,265.7,42L265.7,42z M259.6,89.1V47.3 c0-0.5,0.2-0.8,0.7-0.8H271c0.5,0,0.7,0.3,0.7,0.8v41.8c0,0.6-0.2,0.9-0.7,0.9h-10.6C259.9,89.9,259.6,89.6,259.6,89.1z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg id='Layer_2_1_'%3E%3Cg id='Surfaces'%3E%3Cg id='Photo_Surface'%3E%3Cg id='Outline_no_shadow'%3E%3Cpath class='st2' d='M369.9,0.2H454c12.8,0,23.1,10.3,23.1,23.1v80.9c0,12.8-10.3,23.1-23.1,23.1h-84.1 c-12.8,0-23.1-10.3-23.1-23.1V23.3C346.8,10.5,357.1,0.2,369.9,0.2z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg id='Outlined_Mnemonics_Logos'%3E%3Cg id='Ps'%3E%3Cpath class='st3' d='M376.1,89.3V33.4c0-0.4,0.2-0.6,0.5-0.6c0.9,0,1.8,0,3-0.1c1.3-0.1,2.7-0.1,4.1-0.1s3-0.1,4.7-0.1 c1.7-0.1,3.3-0.1,4.9-0.1c4.5,0,8.1,0.5,11.2,1.7c2.7,0.9,5.2,2.4,7.3,4.5c1.7,1.7,3.1,3.9,4,6.2c0.8,2.3,1.2,4.6,1.2,7.1 c0,4.7-1.1,8.5-3.3,11.6c-2.2,3-5.2,5.3-8.7,6.6c-3.7,1.4-7.8,1.8-12.2,1.8c-1.3,0-2.2,0-2.7-0.1c-0.5-0.1-1.3-0.1-2.3-0.1v17.4 c0.1,0.4-0.2,0.7-0.6,0.8c-0.1,0-0.1,0-0.2,0h-10.3C376.3,90,376.1,89.8,376.1,89.3z M387.9,43.3v18.2c0.8,0.1,1.5,0.1,2.1,0.1 h2.9c2.1,0,4.2-0.3,6.2-1c1.7-0.5,3.3-1.5,4.5-2.9c1.1-1.4,1.7-3.2,1.7-5.6c0.1-1.7-0.4-3.4-1.2-4.8c-0.9-1.4-2.2-2.5-3.8-3.1 c-2-0.8-4.2-1.1-6.4-1.1c-1.4,0-2.7,0-3.7,0.1C389.1,43.2,388.3,43.3,387.9,43.3L387.9,43.3z'/%3E%3Cpath class='st3' d='M451,58.2c-1.6-0.9-3.4-1.5-5.2-1.8c-2-0.4-4-0.7-6.1-0.7c-1.1-0.1-2.2,0.1-3.3,0.4 c-0.7,0.2-1.3,0.5-1.7,1.1c-0.3,0.4-0.4,1-0.4,1.5c0,0.5,0.2,1,0.5,1.4c0.5,0.6,1.1,1.1,1.8,1.5c1.2,0.7,2.6,1.2,3.9,1.8 c2.9,1,5.8,2.3,8.4,4c1.8,1.1,3.3,2.7,4.3,4.5c0.9,1.7,1.3,3.6,1.2,5.6c0.1,2.6-0.7,5.1-2.1,7.2c-1.5,2.2-3.6,3.9-6.1,4.8 c-2.7,1.1-5.9,1.7-9.8,1.7c-2.5,0-4.9-0.2-7.4-0.7c-1.9-0.3-3.8-0.9-5.5-1.7c-0.4-0.2-0.7-0.6-0.6-1v-9.4c0-0.2,0.1-0.4,0.2-0.5 s0.3-0.1,0.5,0.1c2.1,1.2,4.3,2.1,6.7,2.7c2.1,0.5,4.2,0.8,6.4,0.8c2.1,0,3.5-0.3,4.5-0.8c0.9-0.4,1.5-1.3,1.5-2.3 c0-0.8-0.4-1.5-1.3-2.2s-2.7-1.5-5.3-2.6c-2.8-1-5.3-2.3-7.7-3.9c-1.7-1.2-3.1-2.8-4.1-4.6c-0.9-1.7-1.3-3.6-1.2-5.5 c0-2.3,0.7-4.6,1.8-6.6c1.4-2.2,3.4-3.9,5.7-5c2.6-1.3,5.8-1.9,9.6-1.9c2.2,0,4.5,0.2,6.7,0.5c1.6,0.2,3.2,0.7,4.7,1.2 c0.2,0.1,0.4,0.3,0.5,0.5c0.1,0.2,0.1,0.4,0.1,0.7v8.8c0,0.2-0.1,0.4-0.3,0.5C451.5,58.3,451.2,58.3,451,58.2z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpath class='st4' d='M23.1,0h84.1c12.8,0,23.1,10.3,23.1,23.1v80.9c0,12.8-10.3,23.1-23.1,23.1H23.1C10.3,127,0,116.7,0,103.9V23.1 C0,10.3,10.3,0,23.1,0z'/%3E%3Cg id='vlpa_1_'%3E%3Cg id='vlpb_1_'%3E%3Cpath class='st5' d='M47.3,33.2v55.9c0,0.6-0.3,0.9-0.8,0.9H35.9c-0.5,0-0.7-0.3-0.7-0.9V33.2c0-0.5,0.3-0.7,0.8-0.7h10.6 c0.3-0.1,0.7,0.2,0.7,0.5C47.3,33.1,47.3,33.2,47.3,33.2z'/%3E%3Cpath class='st5' d='M78.7,90.6c-4,0.1-8-0.8-11.7-2.4c-3.4-1.6-6.2-4.2-8.2-7.4c-2-3.3-3-7.4-3-12.4c-0.1-4,1-8,3-11.5 c2.1-3.5,5-6.5,8.6-8.4c3.8-2.1,8.4-3.1,13.7-3.1c0.3,0,0.7,0,1.1,0.1c0.5,0.1,1,0.1,1.7,0.1V28.4c0-0.4,0.2-0.6,0.5-0.6h11 c0.3-0.1,0.5,0.2,0.5,0.4v0.1V80c0,1,0.1,2.1,0.1,3.3c0.1,1.1,0.2,2.2,0.2,3.1c0,0.4-0.2,0.7-0.5,0.9c-2.8,1.2-5.8,2.1-8.8,2.6 C84.4,90.4,81.5,90.6,78.7,90.6L78.7,90.6z M84,79.8V55.9c-0.5-0.1-1-0.2-1.5-0.3c-0.6-0.1-1.2-0.1-1.8-0.1 c-2.1,0-4.2,0.4-6.1,1.4c-1.8,0.9-3.4,2.3-4.6,4c-1.2,1.7-1.8,4.1-1.8,6.9c-0.1,1.9,0.3,3.8,0.9,5.6c0.5,1.5,1.4,2.8,2.4,3.9 c1,1,2.3,1.7,3.7,2.2c1.5,0.5,3,0.7,4.5,0.7c0.8,0,1.6-0.1,2.3-0.1C82.8,80.1,83.4,80,84,79.8L84,79.8z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpath class='st6' d='M520.2,4.9h117.5v117.5H520.2V4.9z'/%3E%3Cpath class='st7' d='M600.2,20.5h-12.5l11.1,17.3l-23.5-17.3h-12.5l11.1,22.6l-23.5-22.6h-12.5l10.9,29.2l-10.9,57h12.5l23.5-61.1 l-11.1,61.1h12.5l23.5-66.4l-11.1,66.4h12.5l23.7-73L600.2,20.5z'/%3E%3C/g%3E%3Cg%3E%3Cpath class='st8' d='M698.7,118.1c10,0,18.2-8.1,18.2-18.2V81.8h-18.2c-10,0-18.2,8.1-18.2,18.2S688.6,118.1,698.7,118.1z'/%3E%3Cpath class='st9' d='M680.5,63.6c0-10,8.1-18.2,18.2-18.2h18.2v36.4h-18.2C688.6,81.8,680.5,73.6,680.5,63.6z'/%3E%3Cpath class='st10' d='M680.5,27.2c0-10,8.1-18.2,18.2-18.2h18.2v36.4h-18.2C688.6,45.4,680.5,37.2,680.5,27.2z'/%3E%3Cpath class='st11' d='M716.9,9h18.2c10,0,18.2,8.1,18.2,18.2s-8.1,18.2-18.2,18.2h-18.2V9z'/%3E%3Cpath class='st12' d='M753.3,63.6c0,10-8.1,18.2-18.2,18.2s-18.2-8.1-18.2-18.2s8.1-18.2,18.2-18.2S753.3,53.5,753.3,63.6z'/%3E%3C/g%3E%3C/svg%3E%0A")
              no-repeat;
            margin-bottom: 20px;
          }
          @media only screen and (min-width: 767px) {
            .art-packs {
              margin-bottom: 40px;
            }
          }
        `}</style>
      </Layout>
    </>
  );
};

export default Design;
