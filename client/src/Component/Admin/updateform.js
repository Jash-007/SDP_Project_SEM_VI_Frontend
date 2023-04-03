import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useHistory } from 'use-history';
// import React, { useState } from 'react';
// import axios from 'axios';
import { useParams ,useLocation} from "react-router-dom";



function UpdateForm  (props)  {
  const location = useLocation();

    const [users, setUsers] = useState({
        name: "",
        email: "",
        number: "",
      });
  const handleClick = () => {
    // Code to be executed when the button is clicked
    // history.pus('/another-page'); // Navigate to another page
    navigate('/admin');
  }
      useEffect(()=>{
        console.log(location.state.item.item)
      },[])
      const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setUsers({ ...users, [name]: value });
        console.log(users);
      };

    
  
      const navigate=useNavigate()
      const updateItem = async (item) => {
        try {
          console.log('item',item)
            const response = await axios.post("/adminedit", {id:location.state.item.item,users:users});
            console.log(response);
            // const updatedItems = users.map((i) =>
            //   i._id === response.data._id ? response.data : i
            // );
            // setUsers(updatedItems);
            // setEditItem(null);
           
          } catch (error) {
            console.error(error);
          }
          
      };
      console.log(props)

  return (
    <div>
        <div class="flex justify-center items-center h-screen w-full bg-blue-400">
    <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Update User</h1>
        <form  onSubmit={handleClick}>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="first_name">Name</label>
                <input value={props.name} onChange={handleChange} class="border py-2 px-3 text-grey-800" type="text" name="name" id="name"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="last_name">Email</label>
                <input value={props.email} onChange={handleChange} class="border py-2 px-3 text-grey-800" type="email" name="email" id="email"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="email">Number</label>
                <input value={props.number} onChange={handleChange} class="border py-2 px-3 text-grey-800" type="number" name="number" id="number"/>
            </div>
            
            <button type='submit' value="submit" class="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" onClick={updateItem}>Update</button>
        </form>

    </div>
</div>
    </div>
  )
}
export default UpdateForm