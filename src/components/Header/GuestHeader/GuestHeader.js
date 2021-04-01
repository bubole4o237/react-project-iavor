import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

const GuestHeader = (props) => {

    const [check, setCheck] = useState(false);
    console.log('Hello from GuestHeader!');
    console.log(props.isLoggedIn);

    const onClickButtonLoginHandler = () => {
        const isOk = true;
        setCheck(true);
    
        return check;
    }
    
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
                        </ul>
                    </div>
                    <div className="second-bar">
                        <ul className="navigation-ul">
                            <li><Link to="/register" className="button"><i className="fas fa-user-plus"></i> Register</Link></li>
                            <li><Link to="/login" className="button" onClick={onClickButtonLoginHandler}><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                        </ul>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default GuestHeader;
