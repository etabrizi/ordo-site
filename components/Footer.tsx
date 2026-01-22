
const Footer = () => (
    <footer role="contentinfo">Ordo Consultancy Ltd 2026 <span>- Registered in England and Wales - Company Number - 7655054</span>
        <style jsx>{`
           footer { 
                background:#404040; 
                padding:20px; 
                font-size:1.2em; 
                font-family:Arial, Helvetica, sans-serif; 
                text-align:center; 
                color:#ececec;
                margin: 10px 0 0 0; 
                border-top-left-radius: 1.6em; 
                border-top-right-radius: 1.6em; 
                border-bottom-left-radius: 0; 
                border-bottom-right-radius: 0;
                display:block;
                }
                span {
                    display: none;
                }
                @media only screen and (min-width: 767px) {
                footer {
                    border-radius: 1.6em;
                    padding:5px; 
                    margin-bottom: 30px;
                }
                    span {
                        display: inline;
                    }
                }
    `}</style>
    </footer>
)

export default Footer
