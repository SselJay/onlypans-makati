import React from "react";
import './style.css';

export default function UserFooter () {
    return (
        <>
            <footer className="text-white text-center text-lg-start bg-danger">
        <div className="container p-4">
            <div className="row mt-4">
                <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-4">About Onlypans</h5>
                    <p className="">Don't let the name deceive you! Onlypans offers you the best mexican food you can
                        find.
                    </p>
                    <p>Our Quesa Birria Tacos with consomme is a mouth-watering marriage between premium beef and
                        creamy melted cheese.
                    </p>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <ul className="fa-ul" style={{marginLeft: 1.65, listStyle: "none"}}>
                        <li className="mb-3">
                            <p>5663 Don Pedro, Makati, 1210 Metro Manila, Philippines</p>
                        </li>
                        <li className="mb-3">
                            <p>+63 995 217 4326</p>
                        </li>
                        <li className="mb-3">
                            <p>Service: Dine-In and Take-Away</p>
                        </li>
                        <li className="mb-3">
                            <p>Order: https://www.foodpanda.ph</p>
                        </li>
                        <li className="mb-3">
                
                <div className="container d-flex justify-content-around align-items-center m-0 p-0">
                    <div className="d-flex align-items-center">
                    <a href="https://www.foodpanda.ph/restaurant/j5oj/onlypans-taqueria?fbclid=IwAR3goy-k2e684ob48wgGMnWWlVNdfEOGsv1jieacVKHkjsj-SqFdMZ8Cjjk"><img className="footericon img-fluid mx-2" src="/img/foodpandalogowhite.png" style={{ width: 100 }} alt="" /></a>

                    <a href="https://food.grab.com/ph/en/restaurant/onlypans-taqueria-poblacion-available-for-long-distance-delivery-delivery/2-C3AYC8CJMGJUHE"><img className="footericon img-fluid mx-2" src="/img/GrabFoodLogowhite.png" style={{ width: 50, height: 50 }} alt="" /></a>
                    </div>
                    <div className="vr" style={{ width: 2, height: 90, color: "white", opacity: 10 }}></div>
                    <div>
                    <a href="https://www.facebook.com/onlypansph"><img className="footericon img-fluid mx-2" src="/img/facebook--v1.png" style={{ width: 40 }} /></a>
                    
                    <a href="https://www.instagram.com/onlypanspoblacion/?hl=en&fbclid=IwAR0C_9yi4DyvZnjXOmpH3dqxYZDJCQ_9R3Ru5kqrXOJxDL4O3Jy06OXkyCs"><img className="footericon img-fluid mx-2" src="/img/instagramnewv1.png" style={{ width: 40 }} /></a>
                    </div>
                </div>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-4">Opening hours</h5>

                    <table className="table text-center text-white">
                        <tbody className="font-weight-normal">
                            <tr>
                                <td>Mon - Thu:</td>
                                <td>11am - 12mn</td>
                            </tr>
                            <tr>
                                <td>Fri - Sat:</td>
                                <td>11am - 2am</td>
                            </tr>
                            <tr>
                                <td>Sunday:</td>
                                <td>11am - 1am</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            © 2022 Copyright:
            {/* <a className="text-white" href="https://www.facebook.com/onlypansph/photos/?ref=page_internal">Onlypans
                Taqueria
                Poblacion</a> */}
        </div>
    </footer>
        </>
    )
}