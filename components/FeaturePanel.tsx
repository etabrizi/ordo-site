import { ReactNode } from 'react'


type Props = {
    children?: ReactNode
}

const FeaturePanel = ({ children }: Props) => {
   

    return (<div className="feature-block">
        {children}
        <style jsx>{`
        .feature-block {
           display: flex;
           justify-content: center;
           align-items: center;
           background: grey;
           border-radius: 1.6em;
           margin: 20px 0 10px 0;
           padding: 25px;
           height: 175px;
           flex-direction: column;
        }
        @media only screen and (min-width: 767px) {
            .feature-block {
           display: flex;
        }
        }
`}</style>
    </div>)
}

export default FeaturePanel