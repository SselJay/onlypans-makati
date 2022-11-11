import axios from 'axios';

const urlUser = "https://json-server-makati-onlypans.herokuapp.com/user";
const urlDept= "https://json-server-makati-onlypans.herokuapp.com/department";

export const getAllDept = async (id) => {
    id = id || '';
    return await axios.get(`${urlDept}/${id}`);
} 
export const getAllUsers = async (id) => {
    id = id || '';
    return await axios.get(`${urlUser}/${id}`);
} 

export const addUser = async (user) =>{
    return await axios.post(urlUser, user);
}
export const editUser = async (id, user)=>{
    return await axios.put(`${urlUser}/${id}`, user);
}
export const deleteUser = async (id) =>{
    return await axios.delete(`${urlUser}/${id}`);
} 
