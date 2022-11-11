import React from 'react';
import { addUser } from '../service/api';
import { getAllDept } from '../service/api';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';
import Form from 'react-bootstrap/Form';
import './Admin.css'
const userCapturedVal = {
    name: "",
    description: "",
    price: "",
    photo: "",
    department: ""

}


const Adduser = () => {
    //add user
    const [user, setUser] = useState(userCapturedVal);
    const { name, description, price, photo, department } = user;
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }
    let navigate = useNavigate();
    const addUserDetails = async () => {
        await addUser(user);
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
        <div className="container">
            <Navbar />
            <h1 className="fs-1 text-center mt-5">Add Menu Items</h1>
            <hr className='mb-5'/>
            <div className='card border-danger shadow-lg'>
                <div className="col-md-12">
                    <form className='m-3 p-2'>
                        <div className="row d-flex justify-content-center">
                            <div className="mb-2">
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="name"
                                    aria-describedby="name"
                                    onChange={(e) => onValueChange(e)} name="name" value={name}
                                    className="border-danger"
                                />
                                {/* <input type="text" size="50" placeholder="Title"
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
                                    type="description"
                                    id="description"
                                    aria-describedby="description"
                                    onChange={(e) => onValueChange(e)} name="description" value={description}
                                    className="border-danger"
                                />

                                {/* <input type="text" placeholder="Description"
                                    onChange={(e) => onValueChange(e)} name="description" value={description}
                                /> */}
                            </div>
                            <div className="mb-2">
                                <Form.Label htmlFor="department">Select Group</Form.Label>
                                <Form.Select onChange={(e) => onValueChange(e)} name="department" value={department} className="border-danger">
                                    <option disabled>Select Group</option>
                                    {
                                        deptName.map((data) => (
                                            <option value={data.departmentName}>{data.departmentName}</option>
                                        ))
                                    }
                                </Form.Select>
                            </div>
                            <div className="mt-2 mb-2 d-flex justify-content-end">
                                <input type="sumbit" className="btn btn-danger" value="Create" onClick={() => addUserDetails()} />
                            </div>
                        </div>
                    </form>
                </div>
                {/* <div class="col-md-4">
                    <img style={{ with: 200, height: 200 }} src={photo} alt="logo" />
                </div> */}
            </div>

        </div>
    );
}
export default Adduser;
