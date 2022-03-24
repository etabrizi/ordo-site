import Layout from '../../components/Layout'
import ContentBlock from '../../components/ContentBlock';
import FeaturePanel from '../../components/FeaturePanel';
import Link from 'next/link'
import Head from 'next/head';
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext';


const Design = () => {
    const { lightTheme } = useContext(ThemeContext);
    return (<>
        <Head>
            <title>Ordo Consultancy Ltd - A Digital Consultancy Service - Design services</title>
        </Head>
        <Layout pageTitle="Let's get creative" activeNav="design">
            <ContentBlock>
                <h3>Design services</h3>
                <p>Ordo provides a high level experienced digital design consultancy service. Using the latest creative tools, we aim to achieve excellent production results.</p>
                <ul className="copy">
                    <li>We offer a step by step process for delivery, which keeps the design process clear and concise.</li>
                    <li>We listen to clients needs and make sure our work satisfies the requirements.</li>
                    <li>We aim to achive high end results, on time and with the greatest impact.</li>
                </ul>
                <p>Why not <Link href="/contact"><a className="bold">get in touch</a></Link>. We're happy to discuss anything free of charge.</p>
            </ContentBlock>
            <FeaturePanel>
               <div><h3>Tools we use</h3></div>
               <div><span title="Adobe Indesign, Adobe Illustrator, Adobe Photoshop, Miro, Figma." className="art-packs"></span></div>
            </FeaturePanel>
            <style jsx>{`
             h3 {
                color: ${lightTheme ? '#000' : '#fff'};
                transition: color 0.2s;
            }
            a {
                color: ${lightTheme ? '#000' : '#fff'};
                transition: color 0.2s;
            }
            h4 {
                text-align: left;
                margin-bottom: 20px;
            }
      `}</style>
        </Layout>
    </>)
}

export default Design
