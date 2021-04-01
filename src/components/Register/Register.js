import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div id='registerPage'>
            <h1>Register page</h1>
            <Link to="/login" className="button"><i className="fas fa-sign-out-alt"></i> Go to LOGIN PAGE</Link>
        </div>
    );
}

export default Register;
