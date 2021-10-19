import React, { useState } from "react";
import "./Registar.css"

import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,

} from "firebase/auth";
import initializeAuthentication from "../../Firebase/Firebase.init";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Form, Button } from "react-bootstrap";

initializeAuthentication();

const Register = () => {
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        if (e.target.value.length < 6) {
            console.error("password must need to be at least 6 characters");
            return;
        } else {
            setPassword(e.target.value);
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                verifyEmail();
            })
            .catch((error) => console.log(error.message));
    };

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser).then(() => {

        });
    };



    return (
        <div>

            <Header></Header>
            <div className="form-container">
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
              </Button><br />
                    <span>I have alredy Registard</span> <Link to='/login'> <a>Log in</a></Link>
                </Form>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Register;