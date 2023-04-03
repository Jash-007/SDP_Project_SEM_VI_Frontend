import React from 'react'
import { Route,Routes } from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';
import Frontpage  from './Homepage/frontpage';
import Updateuser from './Profile';
import Admin from './Admin';
import Recuter from './Recuter';
import Recuter1 from './RecuterLinks/recuter1';
import Feedback from './FeedBack';
import UpdateForm from './Admin/updateform';
import UserProfile from './Homepage/userprofile';
import UpdateFormRecuter from './Admin/updateformrecuter';
import Homeoption from './Home';
import LoginR from './Login/loginrecuter';

import ResetPassword from './Forgotpassword/resetpassword';
import ForgotPass from './Forgotpassword/forgot';
import Checkmail from './Forgotpassword/checkmail';
import SingleSearch from './Admin/singlesearch';
function Home() {
    return (
        <>
            {/* </ButtonAppBar /> */}
            <div className='route'>
                <Routes>
                    {/* <Route path="/" element={<Personal />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experience" element={<Experience />} /> */}
                    <Route path="/sigin" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/update' element={<Updateuser/>}/>
                    <Route path='/admin' element={<Admin />}/>
                    <Route path='/recuter' element={<Recuter/>}/>
                    <Route path='/recuter1' element={<Recuter1/>}/>
                    <Route path='/loginrecuter' element={<LoginR/>}/>
                    <Route path='/feedback' element={<Feedback/>}/>
                    <Route path='/Updateform' element={<UpdateForm/>}/>
                    <Route path='/Updateformrecuter' element={<UpdateFormRecuter/>}/>
                    <Route path='/profile' element={<UserProfile/>}/>
                    <Route path='/Frontpage' element={<Frontpage/>}/>
                    <Route path='/ResetPassword' element={<ResetPassword/>}/>
                    <Route path='/ForgotPassword' element={<ForgotPass/>}/>
                    <Route path='/Checkmail' element={<Checkmail/>}/>
                    <Route path='/singlesearch' element={<SingleSearch/>}/>
                    <Route path='/' element={<Homeoption />}/>
                    
                </Routes>
            </div>
        </>
    );
}

export default Home;