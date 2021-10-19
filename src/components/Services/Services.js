import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);



    return (
        <div className="services-main">
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="row">
                    <div className="d-flex " style={{ flexWrap: "wrap" }}>
                        {
                            products.map(product => <Service
                                key={product.key}
                                product={product}
                            >
                            </Service>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;