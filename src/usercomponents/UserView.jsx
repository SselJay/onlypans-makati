import React from "react";
import UserNavBar from "./UserNavBar";
import UserFooter from "./UserFooter";
import { getAllUsers } from '../service/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './style.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const userInitialState = {
    name: "",
    description: "",
    price: "",
    photo: "",
    departmentName: ""
}


export default function UserView() {
    const [user, setUser] = useState(userInitialState);
    const { name, description, price, photo, departmentName } = user;
    const { id } = useParams();
    const loadUserData = async () => {
        const response = await getAllUsers(id);
        setUser(response.data);
    }
    useEffect(() => {
        loadUserData();
    }, []);

    return (
        <>
            <div className="container-fluid mx-0 p-0">
                <UserNavBar />
                <h1 className="AdminHeading text-center mt-5 mb-4">Menu Details</h1>
                <div className="container mb-5" style={{ borderBottom: '12px solid rgba(0, 0, 0, 0.8)', borderRadius: 25, width: 400 }}></div>
                <div className="container mb-5">
                    <div className="row justify-content-center">
                    <div className="container">
                        <div className="card my-2 border-danger shadow-lg">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-6 mb-4">
                                        <img className="img-fluid img-rounded" src={photo} alt="logo" style={{border: '5px solid rgba(0, 0, 0, 0.7)', borderRadius: 10}}/>
                                        {/* <img style={{ width: 300, height: 300 }} src={photo} alt="logo" /> */}
                                    </div>
                                    <div className="col-md-6 align-text-top form-floating">
                                        <h3 className="viewfonttitle text-white bg-dark text-center" style={{borderRadius: 18}}>{name}</h3>
                                        <p className='fs-5 mt-3 p-2'>{description}</p>
                                        <p className='fs-5 mt-3 p-2'>Price: <b>₱{price}</b></p>
                                        {/* <p className='fs-5'>Category:{departmentName}</p> */}
                                        <Link variant="danger" to='/usermenu'>
                                            <Button className="fw-bold fs-5" variant="danger">
                                                Back to Menu
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <UserFooter />
        </>
    )
}