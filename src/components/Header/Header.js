import { Route, Switch, Link } from 'react-router-dom';
// import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import LoggedUserHeader from './LoggedUserHeader/LoggedUserHeader';
import GuestHeader from './GuestHeader/GuestHeader';



const Header = (props) => {

    if (props.isLoggedIn) {
        return (
            <LoggedUserHeader isLoggedIn={props.isLoggedIn} />
        )
    }

    return (
        <GuestHeader isLoggedIn={props.isLoggedIn} />
    )
}

export default Header;


    // "web-vitals": "^1.1.1"
