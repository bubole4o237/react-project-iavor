import { NavLink, Link } from 'react-router-dom';

const LoggedUserHeader = (props) => {

    return (
        <header id="site-header">
            <nav className="navbar">
                <div>
                    <img id="topLogo" className="teddy-bear" src="http://localhost:3000/img/teddy-bear-cartoon.png" alt="teddy bear" height="110" />
                </div>
                <section className="navbar-user">
                    <div className="first-bar">
                        <ul className="navigation-ul">
                            <li><NavLink activeClassName='nav-link-selected' className="button" to="/">НАЧАЛО</NavLink></li>
                            <li><NavLink activeClassName='nav-link-selected' className="button" to="/home">ПЕРСОНАЛИЗИРАНЕ</NavLink></li>
                            <li><NavLink activeClassName='nav-link-selected' className="button" to="/">ЗА НАС</NavLink></li>
                            <li><NavLink activeClassName='nav-link-selected' className="button" to="/">КОНТАКТИ</NavLink></li>
                        </ul>
                    </div>
                    <div className="second-bar">
                        <ul className="navigation-ul">
                            <li>Welcome, username!</li>
                            <li><Link to="/" className="button"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
                        </ul>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default LoggedUserHeader;
