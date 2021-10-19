import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';
const Service = (props) => {
    const { name, picture, _id } = props.product
    return (
        <div className="col-lg-4 col-md-6  services">
            <div class="icon-box">
                <div className="card-img">
                    <img src={picture} alt="" />
                </div>
                <div className="card-info">
                    <h4><a href="">{name}</a></h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    <Link to={`/ServiceDetails/${_id}`}><button className="btn btn-warning">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;