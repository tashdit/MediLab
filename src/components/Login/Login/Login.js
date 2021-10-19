import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <div>
            <Header></Header>
            <div className="text-center mt-5">
                <h2> Login  </h2>
                <button onClick={signInUsingGoogle} className="btn btn-warning " style={{ marginRight: "20px" }}> Login use Google</button>
                <button onClick={signInUsingGithub} className="btn btn-warning"> Login use Git</button><br />
                <Link to="/registar">, please Registered?</Link>
            </div>
        </div>
    );
};

export default Login;