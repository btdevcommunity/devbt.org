import './hero.scss';
import social from '../assets/images/socials-cover.png'

const Hero = () => {
    return (
        <div>
            <img className="hero" src={social} alt="hero images " />
        </div>
    );
}
export default Hero;