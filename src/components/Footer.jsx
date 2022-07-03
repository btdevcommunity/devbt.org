
import './footer.scss';
import discord from '../assets/images/discord.png';
import twitter from '../assets/images/twitter-o.png';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import facebook from '../assets/images/facebook.png';
import ig from '../assets/images/instagram.png';

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
                <a href="https://twitter.com/btdevcommunity" 
                    target="_blank" rel="noreferrer" >
                    <img src={twitter}  className="social-icon" alt="twitter"/>
                </a>
                <a href="https://discord.gg/T2vHCmApfN"
                    target="_blank" rel="noreferrer">
                    <img src={discord}  className="social-icon" alt="discord"/>
                </a>
                <a href="https://github.com/btdevcommunity"
                    target="_blank" rel="noreferrer">
                    <img src={github}  className="social-icon" alt="github"/>
                </a>
                <a href="https://www.linkedin.com/company/btdevcommunity"
                    target="_blank" rel="noreferrer">
                    <img src={linkedin}  className="social-icon" alt="Linkedin"/>
                </a>
                <a href="https://www.facebook.com/btdevcommunity"
                    target="_blank" rel="noreferrer">
                    <img src={facebook}  className="social-icon" alt="facebook"/>
                </a>
                <a href="https://www.instagram.com/btdevcommunity"
                    target="_blank" rel="noreferrer">
                    <img src={ig}  className="social-icon" alt="instagram"/>
                </a>
            </div>
        </div>
        </>
       
    );
}
export default Footer;