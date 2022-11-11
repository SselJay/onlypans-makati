import React from 'react';
import Navbar from './NavBar';
import { useState, useEffect } from 'react';
import { editUser, getAllUsers } from '../service/api';
import { getAllDept } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

const userCapturedVal = {
    name: "",
    description: "",
    price: "",
    photo: "",
    department: ""

}

const Edituser = () => {
    //edit user
    const [user, setUser] = useState(userCapturedVal);
    const { name, description, price, photo, department } = user;
    const { id } = useParams();
    const loadUserData = async () => {
        const response = await getAllUsers(id);
        setUser(response.data);
    }
    useEffect(() => {
        loadUserData();
    }, []);

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    let navigate = useNavigate();

    const editUserDetails = async () => {
        await editUser(id, user);
        navigate('/admin');
    }
    //get department
    const [deptName, setDept] = useState([]);
    useEffect(() => {
        getDepartments();
    }, [])

    const getDepartments = async () => {
        const response = await getAllDept();
        console.log(response);
        setDept(response.data);
    }

    return (
        <div className="container mt-3">
            <Navbar />
            <h1 className="text-center mt-5 fw-bold">Edit Menu</h1>
            <hr className='mb-5'/>
            <form>
                <div className='container row g-0 d-flex flex-lg-row flex-md-column justify-content-center'>
                    <div className='col-lg-4 col-md-12 pt-4'>
                        <Image className="img-fluid img-rounded" rounded src={photo} alt="logo" />
                        {/* <img style={{ with: 200, height: 200 }} src={photo} alt="logo" /> */}
                    </div>
                    <div className='col-lg-7 col-md-12 ms-2'>
                        <div className="mb-2">
                            <Form.Label htmlFor="name">Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="name"
                                aria-describedby="name"
                                onChange={(e) => onValueChange(e)} name="name" value={name}
                                className="border-danger"
                            />
                            {/* <input type="text" placeholder="Title"
                                onChange={(e) => onValueChange(e)} name="name" value={name}
                            /> */}
                        </div>
                        <div className="mb-2">
                            <Form.Label htmlFor="photo">Photo HTML Link</Form.Label>
                            <Form.Control
                                type="text"
                                id="photo"
                                aria-describedby="photo"
                                onChange={(e) => onValueChange(e)} name="photo" value={photo}
                                className="border-danger"
                            />
                            {/* <input type="text" placeholder="Photo Url"
                                onChange={(e) => onValueChange(e)} name="photo" value={photo}
                            /> */}
                        </div>
                        <div className="mb-2">
                            <Form.Label htmlFor="price">Price</Form.Label>
                            <Form.Control
                                type="text"
                                id="price"
                                aria-describedby="price"
                                onChange={(e) => onValueChange(e)} name="price" value={price}
                                className="border-danger"
                            />
                            {/* <input type="text" placeholder="Price"
                                onChange={(e) => onValueChange(e)} name="price" value={price}
                            /> */}
                        </div>
                        <div className="mb-2">
                            <Form.Label htmlFor="description">Description</Form.Label>
                            <Form.Control
                                type="textarea"
                                id="description"
                                aria-describedby="description"
                                onChange={(e) => onValueChange(e)} name="description" value={description}
                                className="border-danger"
                            />
                            {/* <input type="textarea" placeholder="Description"
                                onChange={(e) => onValueChange(e)} name="description" value={description}
                            /> */}
                        </div>
                        <div className="mb-2">
                            <Form.Select onChange={(e) => onValueChange(e)} name="department" value={department} className="border-danger">
                                <option disabled>Select Group</option>
                                {
                                    deptName.map((data) => (
                                        <option value={data.departmentName}>{data.departmentName}</option>
                                    ))
                                }
                            </Form.Select>
                        </div>
                        <div className="mb-2">
                            <input type="sumbit" className="btn btn-danger" value="Update" onClick={() => editUserDetails()} />
                        </div>
                    </div>
                </div>
            </form>
        </div >
    );
}

export default Edituser;
