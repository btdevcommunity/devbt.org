import Hero from '../../components/Hero';
import Item from '../../components/Item';
import './home.scss';

const Home = () => {
    return (
        <div >
            <Hero/>
            <div className='home'>
                <Item/>
            </div>
        </div>
    );
}
export default Home;