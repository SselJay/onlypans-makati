import React from 'react';
import UserNavbar from '../usercomponents/UserNavBar'
import UserFooter from '../usercomponents/UserFooter';
import UserHome from '../usercomponents/UserHome';
const Home = () => {
    return (
        <div className='container-fluid m-0 p-0'>
            <UserNavbar/>
            <UserHome/>
            <UserFooter/>
        </div>
    );
}

export default Home;
