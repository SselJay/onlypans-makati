import React from 'react';
import { getAllUsers } from '../service/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './NavBar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Admin.css'

const userInitialState = {
    name: "",
    description: "",
    price: "",
    photo: "",
    departmentName: ""
}
const Viewuser = () => {
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
        <div className="container mt-3">
            <Navbar />
            <h1 className="AdminHeading">View</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card my-2 border-danger shadow-lg">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-md-6 mb-4">
                                    <img className="img-fluid img-rounded" src={photo} alt="logo" />
                                    {/* <img style={{ width: 300, height: 300 }} src={photo} alt="logo" /> */}
                                </div>
                                <div className="col-md-6 align-text-top form-floating">
                                    <h3>{name}</h3>
                                    <p className='fs-5 mt-3'>{description}</p>
                                    <p className='fs-5 mt-3'>Price:P{price}</p>
                                    <Link variant="danger" to='/admin'>
                                            <Button className="fw-bold fs-5" variant="danger">
                                                Back to Menu
                                            </Button>
                                        </Link>
                                    {/* <p className='fs-5'>Category:{departmentName}</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Viewuser;
