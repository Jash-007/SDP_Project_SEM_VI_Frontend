import React, { useState } from 'react'
import Footer from '../Homepage/footer';
import Navbar from '../Homepage/navbar';
import { useNavigate } from 'react-router';
function Feedback  ()  {
      const nav=useNavigate();
    const [Error, setError] = useState();
    const handleSubmit= async (e)=>
    {
      console.log("handle")
      e.preventDefault();
      try {
        const { name,email,message } = Data;
        const res = await fetch("/feedback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            
          }),
        });
        const mes=res.json();
        if(mes.error){
          setError(mes.error);
        }else{
          nav( '/recuter1');
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
      message: "",
      });
    const handleChange=({ currentTarget : input })=>{
  
      setData({ ...Data, [input.name]: input.value });
  
    }
  return( <>
    <Navbar />
    <div class="container my-24 px-6 mx-auto">


<section class="mb-32 text-gray-800">
  <div class="flex flex-wrap">
    <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
      <h2 class="text-3xl font-bold mb-6">Contact us</h2>
      <p class="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium, modi accusantium ipsum corporis quia asperiores
        dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
        autem omnis fugiat perspiciatis? Ad, veritatis.
      </p>
      <p class="text-gray-500 mb-2">New York, 94126, United States</p>
      <p class="text-gray-500 mb-2">+ 01 234 567 89</p>
      <p class="text-gray-500 mb-2">info@gmail.com</p>
    </div>
    <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
      <form onSubmit={handleSubmit}>
        <div class="form-group mb-6">
          <input type="text" name='name' onChange={handleChange} value={Data.name} id='name'  class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Name" />
        </div>
        <div class="form-group mb-6">
          <input type="email" name='email' onChange={handleChange} value={Data.email} id='email' class="form-control block 
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
            placeholder="Email address" />
        </div>
        <div class="form-group mb-6">
          <textarea name='message' onChange={handleChange} value={Data.message} id='message' class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "  rows="3" placeholder="Message"></textarea>
        </div>
        <div class="form-group form-check text-center mb-6">
          <input type="checkbox"
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="exampleCheck87" checked />
          <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this
            message</label>
        </div>
        <button type="submit" value="submit" class="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Send</button>
      </form>
    </div>
  </div>
</section>


</div>

    <Footer /></>
  );
}
export default Feedback
