import React from 'react';
import Home from './components/Home';
import Adduser from './components/AddUser';
import Edituser from './components/EditUser';
import Allusers from './components/AllUsers';
import Notfound from './components/NotFound';
import Viewuser from './components/ViewUser';
import UserView from './usercomponents/UserView';
import UserAboutUs from './usercomponents/UserAboutUs';
import UserEvents from './usercomponents/UserEvents';
import { Route, Routes} from 'react-router-dom';
import UserMenu from './usercomponents/UserMenu';
const Componentroute = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/add' element={<Adduser/>}/>
            <Route path='/admin' element={<Allusers/>}/>
            <Route path='/useraboutus' element={<UserAboutUs/>}/>
            <Route path='/userevents' element={<UserEvents/>}/>
            <Route path='/usermenu' element={<UserMenu/>}/>
            <Route path='/view/:id' element={<Viewuser/>}/>
            <Route path='usermenu/view/:id' element={<UserView/>}/>
            <Route path='/edit/:id' element={<Edituser/>}/>
            <Route path='*' element={<Notfound/>}/>
                              
        </Routes>    
    );
}

export default Componentroute;
