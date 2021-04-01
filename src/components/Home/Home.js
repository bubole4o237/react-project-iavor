import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <main id="site-main">
            <div className="main-div">


                <section className="section-big-teddy-bear">
                    <div>
                        <img id="main-teddy-bear" className="teddy-bear" src="http://localhost:3000/img/teddy-bear-1.jpg" alt="teddy bear" height="300" />
                    </div>
                </section>

                <section className="section-customize">
                    <p className="title-customize">ПЕРСОНАЛИЗИРАНОТО МЕЧЕ</p>
                    <p className="title-customize">ДАРЯВА С РАДОСТ</p>
                    <div className="div-customize">
                        <Link to={`/customize/teddy-bear`}><button id="customize-button" className="button">ПЕРСОНАЛИЗИРАЙ</button></Link>
                    </div>
                </section>

            </div>
        </main>
    );
}

export default Home;
