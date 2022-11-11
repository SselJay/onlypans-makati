import React, { useEffect, useState } from 'react';
import { getAllUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';
import Image from 'react-bootstrap/Image';
import './Admin.css'

const Allusers = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = async () => {
        const response = await getAllUsers();
        console.log(response);
        setUser(response.data);
    }
    const deleteData = async (id) => {
        await deleteUser(id);
        getUsers();
    }

    return (
        <div className='container'>
            <Navbar />
            <h1 className="fs-1 text-center mt-5">All Records</h1>
            <hr className='mb-5'/>
            {/* <div className="container text-center">
                <Link className='btn btn-danger mb-2 fs-3' to={'/add'}><i className="fa fa-plus-circle"></i> Add Menu</Link>
                <form>
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Search Name" />
                                </div>
                                <div className="col">
                                    <input type="submit" className="btn btn-outline-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div> */}
            <div className="container">
                <div className="row">
                    {
                        user.map((data) => (
                            <div className="col-md-4">
                                <div className="card my-2 shadow-lg border-danger">
                                    <div className="card-body">
                                        <div className="align-items-center">
                                            <div className="col-sm-12">
                                                <Image className='img-fluid mb-2' rounded src={data.photo} alt="logo" />
                                            </div>
                                            <div className="col-sm-12">
                                                <ul className="list-group text-center">
                                                    <h5 className="card-title mb-1 animate-charcter">{data.name}</h5>
                                                    {/* <p class="col card-text">{data.description}</p> */}
                                                    <p class="col card-text">P{data.price}</p>
                                                </ul>
                                            </div>
                                            <div className="col-sm-12 d-flex gap-3 justify-content-center align-items-center">
                                                <Link className="btn btn-danger my-1" to={`/view/${data.id}`}>
                                                    <i className="fa fa-solid fa-fade fa-xl fa-eye"></i>
                                                </Link>
                                                <Link className="btn btn-danger my-1" to={`/edit/${data.id}`}>
                                                    <i className="fa fa-solid fa-fade fa-xl fa-pen"></i>
                                                </Link>
                                                <button className="btn btn-danger my-1" onClick={() => deleteData(data.id)}>
                                                    <i className="fa fa-solid fa-fade fa-xl fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default Allusers;
