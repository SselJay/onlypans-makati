import React from "react"
import { Link } from 'react-router-dom';
// import { ElfsightWidget } from 'react-elfsight-widget';
import './style.css';

function UserHome() {

    return (
        <>
            <div className="mt-1 mb-5">
                <img alt="" src="https://scontent.ffjr1-3.fna.fbcdn.net/v/t39.30808-6/308513978_605411891323167_655469283823557726_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=NRG6wpJmk-kAX-u_8L5&_nc_ht=scontent.ffjr1-3.fna&oh=00_AT_KT7OArJa1CuFx8OZ4S9Aqgu00OM-CcAF6ChAeYdzgcg&oe=63309B1F" className="img-fluid opacity-75" style={{ borderBottom: '8px solid rgba(0, 0, 0, 1)' }} />
            </div>
            <div className="container sectionOneFavorite">
                <div className="row d-flex flex-md-row flex-column mt-5 mb-5 ">
                    <div className="col imgFavorite1">
                        <img src="/img/Menu/Home/quesabirriataco.png" className="card-img-top container1" alt="..." style={{ border: '0px solid rgba(0, 0, 0, 0.7)', borderRadius: 10 }} />
                    </div>
                    <div className="col">
                        <h5 className="homepic mb-3 bg-dark text-white p-2 fs-3 text-md-start text-center mt-3 mt-md-0" style={{ borderRadius: 5 }}>Quesa Birria Taco</h5>
                        <p className="textFavorite text-md-start text-center">Easily our best seller, everyone who comes to OnlyPans come to have a taste of
                            this delectible dish.</p>
                        <p className="textFavorite text-md-start text-center">To serve this dish USDA beef is slowly cooked in authentic mexican chills and 16
                            spices with top grade mozzarella cheese, 3 kinds of sauces, pico de gallo & lime.</p>
                        <p className="textFavorite text-md-start text-center">Our customers who have tried our Quesa Birria Taco always come back to have a
                            bite of this dish. </p>
                    </div>
                </div>

                <div className="row d-flex flex-md-row flex-column mt-5 mb-5 pt-3" style={{ borderRadius: 10, backgroundColor: 'rgba(52, 52, 52, 0.08)' }}>
                    <div className="col ">
                        <h5 className="homepic mb-3 bg-dark text-white p-2 fs-3 text-md-end text-center" style={{ borderRadius: 5 }}>Cartinas Taco</h5>
                        <p className="textFavorite text-md-end text-center">For those who opt to savor the flavor of pork we have Cartinas Taco to satisfy
                            your cravings.</p>
                        <p className="textFavorite text-md-end text-center">Made from slow cooked top grade pork meat aat our house special recipe, topped
                            with pickled onions and chipotle barbecue sauce.</p>
                        <p className="textFavorite text-md-end text-center">Truly, Cartinas Taco is an experience you will never forget.</p>
                    </div>
                    <div className="col imgFavorite2 mb-3">
                        <img src="/img/Menu/Home/carnitastaco.png" className="card-img-top container1" alt="..." style={{ border: '0px solid rgba(0, 0, 0, 0.7)', borderRadius: 10 }} />
                    </div>
                </div>

                <div className="row d-flex flex-md-row flex-column mt-5 mb-5 ">
                    <div className="col imgFavorite1">
                        <img src="/img/Menu/Home/camaronshrimptostadas.png" className="card-img-top img-fluid container1" alt="..." style={{ border: '0px solid rgba(0, 0, 0, 0.7)', borderRadius: 10 }} />
                    </div>
                    <div className="col">
                        <h5 className="homepic mb-3 bg-dark text-white p-2 fs-3 text-md-start text-center mt-3 mt-md-0" style={{ borderRadius: 5 }}>Camaron Tostadas</h5>
                        <p className="textFavorite text-md-start text-center">We you are a seafood type of person Camaron Tostadas will definitely suite your
                            tastebud.</p>
                        <p className="textFavorite text-md-start text-center">This selection is cooked with fresh shrimp in house special marinade, dipped in
                            beer batter & served with homemade coleslaw, alfalfa, red radish & pickled onions.</p>
                        <p className="textFavorite text-md-start text-center">You will, for sure, enjoy our offer.</p>
                    </div>
                </div>

                <div className="row d-flex flex-md-row flex-column mt-5 mb-5 pt-2" style={{ borderRadius: 10, backgroundColor: 'rgba(52, 52, 52, 0.08)' }}>
                    <div className="col ">
                        <h5 className="homepic mb-3 bg-dark text-white p-2 fs-3 text-md-end text-center" style={{ borderRadius: 5 }}>Quesadillas</h5>
                        <p className="textFavorite text-md-end text-center">After experiencing our best seller you might want to venture into our other
                            choices. Quesadillas is definitely one of our best.</p>
                        <p className="textFavorite text-md-end text-center">Made with soft tortillas with your choice of meat filled with cheese and spices,
                            served with house special sauces and pico de gallo.</p>
                        <p className="textFavorite text-md-end text-center">For the meat you can select beef, shrimp, pork, chicken or cheese. Truly, you
                            would not get tired of it.</p>
                    </div>
                    <div className="col imgFavorite2 mb-3">
                        <img src="/img/Menu/Home/quesadillas.png" className="card-img-top container1" alt="..." style={{ border: '0px solid rgba(0, 0, 0, 0.7)', borderRadius: 10 }} />
                    </div>
                </div>
                
            </div>
            <script src="//code.tidio.co/ovhukj0pgjzcrvi6arlddnoklwfdxfvx.js" async></script>
        </>
    )
}

export default UserHome
