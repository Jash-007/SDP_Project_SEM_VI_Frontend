import React from 'react'
import './t.css';
// const rediredct= require('../Login/index')
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Sigin = () => {
  const nav = useNavigate()
  const [Error, setError] = useState();
  const handleSubmit= async (e)=>
  {
    console.log("handle")
    e.preventDefault();
    try {
      const { name,email,number,password,workstatus } = Data;
      const res = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          number,
          password,
          workstatus
        }),
      });
      const mes=res.json();
      if(mes.error){
        setError(mes.error);
      }else{
        window.location.href = "/login";
      }
    }
    catch(err)
    {
          console.log(err);
    }
  }
  const [Data, setData] = useState({ 
    name: "", 
    email: "", 
    number: "",
    password: "",
    workstatus:"",});
  const handleChange=({ currentTarget : input })=>{

    setData({ ...Data, [input.name]: input.value });

  }
//   return (
//     <div>
//       {/* <div  classNameNameName="bg-green-400 container mx-auto px:4">
//         <div classNameNameName="grid grid-cols-2 divide-x">
//          <div>
          
//          </div>
//          <div>
//           hello3
//          </div>
//         </div>
//       </div> */}
//       <form onSubmit={handleSubmit}>
// <div>
//         <span>Name</span>
//         <input
//           type="text"
//           name="name"
//           onChange={handleChange}
//           value={Data.name}
//           required
//         classNameNameName='bg-gray-50 border border-gray-700 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com'
//         />
//         <span>Email</span>
//          <input
//           type="email"
//           name="email"
//           onChange={handleChange}
//           value={Data.email}
//           required
//         classNameNameName=''
//         />
//         <span>Mobile</span>
//          <input
//           type="tel"
//           name="number"
//           onChange={handleChange}
//           value={Data.number}
//           pattern="[0-9]{10}"
//           required
//         classNameNameName=''
//         />
//         <span>Password</span>
//          <input
//           type="password"
//           name="password"
//           onChange={handleChange}
//           value={Data.password}
//           required
//         classNameNameName=''
//         />
//         <span>Confirm Password</span>
//          <input
//           type="password"
//           name="confpassword"
//           onChange={handleChange}
//           value={Data.confpassword}
//           required
//         classNameNameName=''
//         />
//         <div>
        // <span>Work status</span>
        // <input type="radio" id="student"  name="workstatus" value="Student"/>
        // <label for="student">Student</label>
        // <input type="radio" id="profession" name="workstatus" value="Professional"/>
        // <label for="profession">Professional</label>
      
//         <button type="submit" value="Submit">Submit</button>
//    </div>
//     </div>
//     </form>
//     </div>
   
//   )
const handleLogin=()=>{
  nav("/login")
}
  return(

    <div className="h-screen md:flex">
      <div
        className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">GoPlaced</h1>
          <p className="text-white mt-1">The most popular prepration platform</p>
          <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd" />
            </svg>
            <input className="pl-2 outline-none border-none" type="text" name="name" id="name" onChange={handleChange} value={Data.name} required placeholder="Full name" />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input className="pl-2 outline-none border-none" type="email" name="email" id="email" onChange={handleChange} value={Data.email} required placeholder="Email Address" />
          </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
              <input className="pl-2 outline-none border-none" type="number" name="number" onChange={handleChange} value={Data.number} required pattern="[0-9]{10}" placeholder="Mobile No." />
          </div>
           
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd" />
                  </svg>
                  <input className="pl-2 outline-none border-none" type="password" name="password"  onChange={handleChange} value={Data.password} placeholder="Password" />
          </div><br/>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
          <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black-400" viewBox="0 0 20 20"
                    fill="currentColor">
                      <path className="cls-1" fill-rule="evenodd" d="M6.37,47.11H8.53V40.48A41.15,41.15,0,0,1,19.92,12a37.93,37.93,0,0,1,55.33,0,41.16,41.16,0,0,1,11.4,28.5v6.63H88.8a6.39,6.39,0,0,1,6.37,6.37v63a6.39,6.39,0,0,1-6.37,6.37H6.37A6.39,6.39,0,0,1,0,116.51v-63a6.39,6.39,0,0,1,6.37-6.37Zm14.22,0h54V40.48a29.07,29.07,0,0,0-8-20.16,26,26,0,0,0-38,0,29,29,0,0,0-8,20.16v6.63ZM35.3,77l7,6.53L58.84,66.72c1.47-1.5,2.39-2.69,4.21-.83l5.9,6c1.93,1.92,1.83,3,0,4.83L45.62,99.69c-3.85,3.78-3.19,4-7.08.13L25.37,86.74a1.71,1.71,0,0,1,.16-2.65L32.38,77c1-1.07,1.85-1,2.92,0Z" clip-rule="evenodd"/></svg>
                  <input className="pl-2 outline-none border-none" type="password" name="confpassword"  onChange={handleChange} value={Data.confpassword} required placeholder="Conform Password" />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
          <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black-400" viewBox="0 0 20 20"
                    fill="currentColor">
                      <path className="cls-1" fill-rule="evenodd" d="M6.37,47.11H8.53V40.48A41.15,41.15,0,0,1,19.92,12a37.93,37.93,0,0,1,55.33,0,41.16,41.16,0,0,1,11.4,28.5v6.63H88.8a6.39,6.39,0,0,1,6.37,6.37v63a6.39,6.39,0,0,1-6.37,6.37H6.37A6.39,6.39,0,0,1,0,116.51v-63a6.39,6.39,0,0,1,6.37-6.37Zm14.22,0h54V40.48a29.07,29.07,0,0,0-8-20.16,26,26,0,0,0-38,0,29,29,0,0,0-8,20.16v6.63ZM35.3,77l7,6.53L58.84,66.72c1.47-1.5,2.39-2.69,4.21-.83l5.9,6c1.93,1.92,1.83,3,0,4.83L45.62,99.69c-3.85,3.78-3.19,4-7.08.13L25.37,86.74a1.71,1.71,0,0,1,.16-2.65L32.38,77c1-1.07,1.85-1,2.92,0Z" clip-rule="evenodd"/></svg>
                  <input className="pl-2 outline-none border-none" type="text" name="workstatus"  onChange={handleChange} value={Data.workstatus} required placeholder="Work Status" />
          </div>
                  <button type="submit" value="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                  <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span><br/>

                  <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Already have an account?
          <button className="underline" onClick={handleLogin}>Login</button>
        </p>

        
      </div>
        </form>
      </div>
    </div>
  )
}

export default Sigin;