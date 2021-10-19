import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faSkull, faCalendarCheck, faAddressBook, faCheck } from '@fortawesome/free-solid-svg-icons'
import "./Doctors.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Doctors = () => {
    return (
        <>

            <Header></Header>
            <section id="doctors" class="doctors">
                <div class="container">

                    <div class="section-title">
                        <h2>Doctors</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">

                        <div class="col-lg-6">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src={`https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?size=626&ext=jpg`} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Walter White</h4>
                                    <span>Chief Medical Officer</span>
                                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                    <div class="social">
                                        <a href=""><FontAwesomeIcon icon={faCamera} /></a>
                                        <a href=""><FontAwesomeIcon icon={faCheck} /></a>
                                        <a href=""><FontAwesomeIcon icon={faCalendarCheck} /></a>
                                        <a href=""> <FontAwesomeIcon icon={faAddressBook} /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4 mt-lg-0">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src={`https://image.shutterstock.com/image-photo/covid19-coronavirus-healthcare-doctors-concept-260nw-1687768795.jpg`} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Anesthesiologist</span>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                    <div class="social">
                                        <a href=""><FontAwesomeIcon icon={faCamera} /></a>
                                        <a href=""><FontAwesomeIcon icon={faCheck} /></a>
                                        <a href=""><FontAwesomeIcon icon={faCalendarCheck} /></a>
                                        <a href=""> <FontAwesomeIcon icon={faAddressBook} /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src={`https://static.toiimg.com/photo/msid-76714980/76714980.jpg?1422821`} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>William Anderson</h4>
                                    <span>Cardiology</span>
                                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                    <div class="social">
                                        <a href=""><FontAwesomeIcon icon={faCamera} /></a>
                                        <a href=""><FontAwesomeIcon icon={faCheck} /></a>
                                        <a href=""><FontAwesomeIcon icon={faCalendarCheck} /></a>
                                        <a href=""> <FontAwesomeIcon icon={faAddressBook} /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOU3Jf0uekwSKiAzUnmWo0JJe0w2r-CpsYpw&usqp=CAU`} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Neurosurgeon</span>
                                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                    <div class="social">
                                        <a href=""><FontAwesomeIcon icon={faCamera} /></a>
                                        <a href=""><FontAwesomeIcon icon={faCheck} /></a>
                                        <a href=""><FontAwesomeIcon icon={faCalendarCheck} /></a>
                                        <a href=""> <FontAwesomeIcon icon={faAddressBook} /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <Footer></Footer>
        </>
    );
};

export default Doctors;