import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import UserFooter from "./UserFooter";
import UserNavBar from "./UserNavBar";
import './style.css';

export default function UserAboutUs() {
    return (
        <div className="container-fluid m-0 p-0">
            <UserNavBar />

            <Carousel  style={{ borderBottom: '3px solid rgba(0, 0, 0, .8)'}}>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://scontent.fdxb1-1.fna.fbcdn.net/v/t39.30808-6/307750053_605413957989627_8794517207391078997_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=d0s85nOOWEwAX-jZjAJ&_nc_ht=scontent.fdxb1-1.fna&oh=00_AT_USMYiUgwp9bJMbUto3GQhH7mDlbXjoN1HMFVFiGB0UA&oe=63306C9F"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://scontent.fdxb1-1.fna.fbcdn.net/v/t39.30808-6/307461683_605413867989636_7977856939855303875_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=9N1B-0bE_DUAX88yxaw&_nc_ht=scontent.fdxb1-1.fna&oh=00_AT82RyMT_1g8ilKufTFPreZPVr-5lBYXV59SLkAEvSZ0YQ&oe=63311BBF"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://scontent.fdxb1-1.fna.fbcdn.net/v/t39.30808-6/307461744_605413917989631_6842389866800087816_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=-yUjuonQK2EAX9qWP_a&_nc_ht=scontent.fdxb1-1.fna&oh=00_AT_mHSYJbz3uyT50rtqUPe3j6WBOIBxXt5dimcOY536m1Q&oe=633132DA"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <div className="container">
                <div className="text-center my-5 p-5 ourStory border border-2" style={{ borderRadius: 10, backgroundColor: 'rgba(52, 52, 52, 0.02)' }}>
                    <p className="amongus fw-bold fs-1">Our Story</p>
                    <hr className="w-25 mx-auto my-4" />
                    <div className="container w-75">
                        <p>Before being none for its tacos Onlypans started, not with a physical restaurant establishment as it is
                            today, but as a food delivery business with only one recipe: sushi bake. This was during the height of
                            the pandemic in the year 2020.</p>
                        <p>Upon encouragement of an acquintance, and due to the prevalance of sushi bake at that time, the owner
                            decided to start baking and selling sushi bake, initially friends serving as customers, without
                            expecting any returns.</p>
                        <p>However, to the surprise of the owner, the feedback was overwhemingly positive! Thus, business grew.</p>
                        <p>Two years after, Onlypans opens its physical store in Barangay Poblacion-a hip cultural district in
                            Makati City, with an entirely new menu of mexican food. Similary to its humble beginnings, its tacos and
                            other menu items received and continue to earn rave reviews.
                        </p>
                    </div>
                </div>
            </div>

            <div>

            </div>

            <hr className="w-75 mx-auto my-5" />

            <div className="container mt-5 mb-5 textForm">
                <div className="row g-0 d-flex flex-lg-row flex-md-column flex-sm-column flex-lg-nowrap">
                    <div className="col-12 border-1 border-dark flex-fill">


                        <h5 className="amongus fs-3 text-center mx-2 mb-4"> Location Map</h5>
                        <iframe className="border border-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.621015610933!2d121.02928795048636!3d14.563651989776085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c96b4c1d5447%3A0xbddd5f124b4d3a35!2sOnlypans%20Taqueria%20Poblacion!5e0!3m2!1sen!2sph!4v1663731544660!5m2!1sen!2sph" width="600" height="450" style={{ border: "10" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                    <div className="col-12 border-1 border-dark flex-fill textForm">
                        <div className="col border-1 border-dark p-1" style={{ borderRadius: 10, backgroundColor: 'rgba(52, 52, 52, 0.02)' }}>
                            <h5 className="amongus fs-3 ms-2 text-center"> Contact Us</h5>
                            <div className="container mt-2">
                                <form action="https://formspree.io/f/xvoygrjr" id="test-form" method="POST">
                                    <div className="form-group">
                                        <label for="firstName">First Name:</label>
                                        <input className="form-control" type="text" id="firstName" name="firstName" />
                                    </div>
                                    <div className="form-group">
                                        <label for="lastName">Last Name:</label>
                                        <input className="form-control" type="text" id="lastName" name="lastName" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email:</label>
                                        <input className="form-control" type="email" id="email" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="message">Message:</label>
                                        <textarea className="form-control" name="message" id="message" rows="10"
                                            maxlength="200"></textarea>
                                    </div>
                                    <div className="container m-0 p-0 text-end">
                                        <button className="btn btn-danger mt-2" id="test-form-submit">Submit</button>
                                    </div>
                                </form>
                                <div id="status" className="mt-2 text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="w-100 mx-auto my-5" />

                <div className="container d-flex flex-column gap-5 p-3" style={{ borderRadius: 15, backgroundColor: 'rgba(52, 52, 52, 0.02)', width: 900 }}>
                    <div className="container d-flex justify-content-start align-items-center">
                        <div className="">
                            <img className="mx-3" src="/img/opdp2.png" alt="" style={{ width: 130, borderRadius: 100 }} />
                        </div>
                        <div className="vr mx-5" style={{ width: 5, color: "red", opacity: 10 }}></div>
                        <div className="d-flex flex-column">
                            <ul>
                                <h4 className="fw-bold mb-2">Phyllip Sam Salvador</h4>
                                <h6 className="p-1" style={{ borderRadius: 10, backgroundColor: 'rgba(52, 52, 52, 0.2)', width: 120, backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>Web Developer</h6>
                                <li><p className="m-0">• Full Stack Web Developer of Makati-Onlypans Restaurant Website</p></li>
                                <li><p className="m-0">• BS Accountancy </p></li>
                                <li><p>• Accountant with a heart of a Programmer </p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="container d-flex justify-content-start align-items-center">
                        <div className="">
                            <img className="mx-3" src="/img/opdp.png" alt="" style={{ width: 130, borderRadius: 100 }} />
                        </div>
                        <div className="vr mx-5" style={{ width: 5, color: "red", opacity: 10 }}></div>
                        <div className="d-flex flex-column">
                            <ul>
                                <h4 className="fw-bold mb-2">Russel Jay Buan</h4>
                                <h6 className="p-1" style={{ borderRadius: 10, backgroundColor: 'rgba(52, 52, 52, 0.2)', width: 120, backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>Web Developer</h6>
                                <li><p className="m-0">• Web Developer of TheGreenProject</p></li>
                                <li><p className="m-0">• Co-Developer of Makati-OnlyPans Website</p></li>
                                <li><p>• BS Degree in Information Technology</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <UserFooter />
        </div>
    )
}
