
import './footer.scss';
import discord from '../assets/images/discord.png';
import twitter from '../assets/images/twitter-o.png';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import facebook from '../assets/images/facebook.png';

const Footer = () => {
    return (
        <>
        <hr className="line-break"/>
         <div className="footer">
            
            <p className="footer-head">
                Join the community today!
            </p>
            <p className="footer-solgan">
            “Sometimes you gotta create what you want to be part of” ~ Geri Weitzman
            </p>
            <div className="socials">
                <a href="/" >
                    <img src={twitter}  className="social-icon" alt="discord"/>
                </a>
                <a href="/">
                    <img src={discord}  className="social-icon" alt="discord"/>
                </a>
                <a href="/">
                    <img src={github}  className="social-icon" alt="discord"/>
                </a>
                <a href="/">
                    <img src={linkedin}  className="social-icon" alt="discord"/>
                </a>
                <a href="/">
                    <img src={facebook}  className="social-icon" alt="discord"/>
                </a>
            </div>
        </div>
        </>
       
    );
}
export default Footer;