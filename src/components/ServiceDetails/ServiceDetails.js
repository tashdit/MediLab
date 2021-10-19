import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./ServiceDetails.css"

const ServiceDetails = () => {
    const { serviceId } = useParams();

    const [service, setService] = useState([])
    const [singleService, setSingleService] = useState({})

    useEffect(() => {
        fetch('/serviceData.json')
            .then(res => res.json())
            .then(data => setService(data.services))
    }, [])

    useEffect(() => {
        const serviceName = service.find(services => services._id === serviceId)
        setSingleService(serviceName);
    }, [service])



    return (
        <div>
            <Header></Header>
            <div className="detain-box">
                <img src={singleService?.picture} alt="" />
                <h2>Name: <span> {singleService?.name}</span></h2>
                <h3>Details {singleService?.about}</h3>
                <Link to="/home"><button className="btn btn-warning">Back to Home</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;