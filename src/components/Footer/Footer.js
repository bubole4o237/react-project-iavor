import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return (
        <footer id="site-footer">
            <div className="footer-container">

                <div className="footer-info-div">
                    <h4>Информация</h4>
                    <p><Link to="/">Общи условия</Link></p>
                    <p><Link to="/">Политика за поверителност</Link></p>
                    <p>
                        <a href="https://bg-bg.facebook.com/" className="social-network"><img src="http://localhost:3000/img/facebook.png" alt="facebook logo" height="25" /></a>
                        <Link to="/home" id="twitter-link" className="social-network"><img src="http://localhost:3000/img/instagram.jpg" alt="instagram logo" height="20" /></Link>
                        <Link to="/" className="social-network"><img src="http://localhost:3000/img/twitter.png" alt="twitter logo" height="20" /></Link>
                    </p>
                </div>

                <div>
                    <p className="footer-copyright" >HUGY &copy;</p>
                </div>

                <div className="footer-logo">
                    <img id="bottomLogo" className="teddy-bear" src="http://localhost:3000/img/teddy-bear-cartoon.png" alt="teddy bear" height="160" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
