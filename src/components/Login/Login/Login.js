import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Please Login page</h2>
            <button className="btn btn-warning">Please Login</button>
            <Link to="/registar">Not Login, please Registered?</Link>
        </div>
    );
};

export default Login;