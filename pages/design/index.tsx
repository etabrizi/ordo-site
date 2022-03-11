import Layout from '../../components/Layout'
import ContentBlock from '../../components/ContentBlock';
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
                <p>Ordo provides a high level, experienced and clear digital design consultancy service.</p>
                <ul className="copy">
                    <li>We offer a step by step process for delivery, which keeps the design process clear and concise.</li>
                    <li>We listen to clients' needs and make sure our work satisfies the requirements.</li>
                    <li>Whatever the budget, we aim to achive high end results, on time and with the greatest impact.</li>
                    <li>Be it the happy path or journey exceptions. We focus on the full UX journey. </li>
                </ul>

                <p>Why not <Link href="/contact"><a className="bold">get in touch</a></Link>. We're happy to discuss anything free of charge.</p>
            </ContentBlock>
            <style jsx>{`
             h3 {
                color: ${lightTheme ? '#000' : '#fff'};
                transition: color 0.2s;
            }
            a {
                color: ${lightTheme ? '#000' : '#fff'};
                transition: color 0.2s;
            }
      `}</style>
        </Layout>
    </>)
}

export default Design
