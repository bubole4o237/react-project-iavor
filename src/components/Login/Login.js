import { Link } from 'react-router-dom';
import './Login.css';

const Login = (props, isLoggedIn) => {
    console.log(props);
    console.log(isLoggedIn);
    return (
        <div id='loginPage'>
            <h1>This is LOGIN page</h1>
            <Link to="/user/home" className="button"><i className="fas fa-sign-out-alt"></i> Go to logged USER HOME page</Link>
        </div>
    );
}

export default Login;
