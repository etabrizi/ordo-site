import Layout from '../../components/Layout';
import ContentBlock from '../../components/ContentBlock';
import Aside from '../../components/Aside';
import Link from 'next/link';
import Head from 'next/head';
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext';


const Web = () => {
    const { lightTheme } = useContext(ThemeContext);
    return (<>
        <Head>
            <title>Ordo Consultancy Ltd - A Digital Consultancy Service - Web services</title>
        </Head>
        <Layout pageTitle="Making technology work" activeNav="web">
            <ContentBlock minHeight={575}>
                <h3>Web services</h3>
                <p>Technology moves quickly, we keep up. That's why Ordo provides the latest skill set when it comes to new and emerging web technologies.</p>
                <p>Whatever the project size, we have the experience and the drive to deliver the results your business needs. </p>
                <div title="HTML, CSS, Javascript, React, Next, Vue, Firebase" className={lightTheme ? "icon-techstack" : "icon-techstack-white"}></div>
                <p>We operate on a contract basis, offering full / part-time project support. We manage the inputs and deliver the output whilst keeping communication key to our delivery.</p>
                <p>Why not <Link href="/contact"><a className="bold">get in touch</a></Link>. We're happy to discuss anything free of charge.</p>
                <Aside>
                    <h4>Clients we've worked with:</h4>
                    <div title="Birmingham City University" className="icon-bham_uni"></div>
                    <div title="Npower" className="icon-npower"></div>
                    <div title="Wolverhampton City Council" className="icon-wolverhampton_logo"></div>
                    <div title="Alive Digtial" className="icon-alive"></div>
                    <div title="Leicester City Council" className="icon-leicester_council"></div>
                    <div title="Strategy Consultancy" className="icon-strategy"></div>
                </Aside>
            </ContentBlock>
            <style jsx>{`

          .stack-wrapper{
              background: #fff;
          }  
            
        .clients {
            display: flex;
        }
        
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

export default Web
