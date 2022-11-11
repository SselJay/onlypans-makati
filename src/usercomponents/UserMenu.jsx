import React, { useEffect, useState } from 'react';
import UserFooter from "./UserFooter";
import UserNavBar from "./UserNavBar";
import Image from 'react-bootstrap/Image';
import { getAllUsers } from "../service/api";
import './style.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
export default function UserMenu() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = async () => {
        const response = await getAllUsers();
        console.log(response);
        setUser(response.data);
    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <UserNavBar />
            <div className='container'>
                <h1 className="AdminHeading text-center mt-5 mb-4">Our Menu</h1>
                <div className="container mb-5" style={{ borderBottom: '12px solid rgba(0, 0, 0, 0.8)', borderRadius: 25, width: 310 }}></div>
                <div className="container mb-5">
                    <div className="row">
                        {
                            user.map((data) => (
                                <div className="col-lg-4 col-md-6 ">
                                    <div className="card my-2 shadow-lg container1 border-danger">
                                        <h5 className="titlefont card-title mb-1 fs-2 bg-dark text-white text-center py-4" style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>{data.name}</h5>
                                        <div className="card-body">
                                            <div className="align-items-center">
                                                <div className="col-sm-12">
                                                    <Image className='img-fluid mb-2' rounded src={data.photo} alt="logo" />
                                                </div>
                                                <div className="col-sm-12">
                                                    <ul className="list-group text-center">
                                                        <div className="container d-flex mt-4 justify-content-between">
                                                            <p className="card-text text-white fs-3 fw-bold bg-dark" style={{ border: '1px solid rgba(0, 0, 0, 0.7)', borderRadius: 50, width: 130 }}>₱ {data.price}</p>
                                                            <Link variant="danger" to={`/usermenu/view/${data.id}`}>
                                                                <Button className='fs-5 fw-bold' variant="danger" onClick={handleClose}>
                                                                    See Details
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-12 d-flex gap-3 justify-content-center align-items-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >
            <UserFooter />
        </>
    )
}