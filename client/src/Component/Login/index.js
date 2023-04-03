import React from 'react';
import { useNavigate } from 'react-router';
// import styles from "./style.module.css";
import { useState, useEffect } from "react";
function Login() {
   const nav=useNavigate();
    const [Data, setData] = useState({ email: "", password: "" });
    //const [loading, setload] = useState(true);
    const [Error, setError] = useState();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...Data, [input.name]: input.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const { email, password } = Data;
          if(email=="admin@gmail.com" && password=="admin"){
            nav("/admin");
          }
          const res = await fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
         
          const y = await res.json();
          console.log(y);
          localStorage.setItem("ceremdendial", JSON.stringify(y));

          if(y.error){
            setError(y.error);
          }else{
            nav("/Frontpage");
          }
         
        //  localStorage.setItem("jtwtoken", JSON.stringify(y.token));
          //localStorage.setItem("loginuser", JSON.stringify(y.loginuser));
          //localStorage.setItem("bool",true);
          //  setLogin("jwtokenlocal",y.token);
          //window.location.href = "/sigin";
          // if (y.token && y) {
          //   console.log("logged in");
          //   // navigate("/");
           
          //   window.location.href = "/sigin";
          //  } //else {
          // console.log("error in genrating token");
          // }
        } catch (error) {
          alert(error);
        }
      };
      const handleSignup =()=>{
        nav("/sigin");
      }
      const handleforgot =()=>{
        nav("/Forgotpassword");
      }
      return (

    

<section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

      <p className="mt-4 text-gray-500">
        Welcome to the best platform for placement prepration 
       
      </p>
      <h3 className="mt-6 text-gray-900">
        Enjoy Your Ride!!!
       
      </h3>
    </div>

    <form onSubmit={handleSubmit} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
      <div>
        <label for="email" className="sr-only">Email</label>

        <div className="relative">
          {/* <input type="email" onChange={handleChange} value={Data.email} required className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter email"/> */}
          <input type="email" name="email" id="email"  onChange={handleChange} value={Data.email} required classNameName="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" />
                     
          <span
            className="absolute inset-y-0 right-0 grid place-content-center px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label for="password" className="sr-only">Password</label>

        <div className="relative">
          {/* <input type="password" onChange={handleChange} value={Data.password} className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter password"/> */}
          <input type="password" name="password" id="password" onChange={handleChange} value={Data.password} placeholder="Password" classNameName="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    
          <span
            className="absolute inset-y-0 right-0 grid place-content-center px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          No account?
          <button className="underline" onClick={handleSignup}>Sign up</button>
        </p>

        <button
          type="submit" value="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Login
        </button>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Forgot your password?
          <button className="underline" onClick={handleforgot}>Forgot Password</button>
        </p>

      </div>
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtKKNMs42KbTBvkI6VciPlhrE7O-ntNHo6n6RXMEvWg&usqp=CAU&ec=48600113"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>

      )
    }
export default Login;
