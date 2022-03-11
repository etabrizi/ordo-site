import Layout from '../../components/Layout'
import ContentBlock from '../../components/ContentBlock';
import Aside from '../../components/Aside';
import Link from 'next/link';
import Head from 'next/head';
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext';

const Training = () => {
    const { lightTheme } = useContext(ThemeContext);
    return (<>
        <Head>
            <title>Ordo Consultancy Ltd - A Digital Consultancy Service - Training</title>
        </Head>
        <Layout pageTitle="Need some skills?" activeNav="training">
            <ContentBlock>
                <h3>Training</h3>
                <p>We offer training to anyone who's willing to learn. Whether it's students looking to brush up on skills or professionals needing that extra string to your bow.</p>
                <p>Ordo offer ''one to one'' tution with one of our experienced consultants. Either at your home, business or via Zoom online, we'll give you expert training at a very competitive price.</p>
                <p>We're offering training courses (details shown aside). Full day courses can be spilt over max three days. </p>
                <p>Why not <Link href="/contact"><a className="bold">get in touch</a></Link>. We're happy to discuss anything free of charge.</p>
                <Aside>
                    <h4>Courses we offer:</h4>
                    <p><span className="bold">React Training</span> - Beginner course (Full day - 7hrs)</p>
                    <p><span className="bold">Web Design Training</span> - Beginner course (Full day - 7hrs)</p>
                    <p><span className="bold">CSS Training</span> - Intermediate course (Full day - 7hrs)</p>
                </Aside>
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

export default Training
