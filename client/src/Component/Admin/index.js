import React from 'react';
import axios from 'axios';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminsearch.css'
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Button,
} from '@material-ui/core';
// import { Add, Delete, Edit, Save, Cancel } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
// import styles from "./style.module.css";
import { useState, useEffect } from "react";
import Navbar2 from './Navbar2';
import { useNavigate } from 'react-router';
// function Admin() {
//     const [Error, setError] = useState();
//     const [data, setData] = useState([]);
//     const fetchData=async()=>{
//       //e.preventDefault();
//       console.log("Admin")

//      const res = await fetch("/admin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({

//       }),
//     });
//    const y=await res.json();
//   //  const now1=data.map((e,index)=>
//   //  <div key={index} >Keyur king</div>)
//      setData(y)
//      console.log(y)
//      console.log("asjda")
//      const data1= JSON.stringify(data)
//      console.log(data1)
//     //  const data1=y.data.json()

//     }
//     useEffect(()=>{

//       fetchData();
//     },[])

//    // console.log(data)
//     // useEffect(() => {
//     //  const fun=async()=>{
//     //   console.log("Admin");
//     //   await fetch('/admin')
//     //     .then((response) => response.json())
//     //     .then((data) => setData(data))
//     //     .catch((error) => {
//     //       console.log(error);
//     //     });
//     //   }
//     //     fun();
//     // }, []);
//   // const handleSubmit= async (e)=>
//   // {
//   //   console.log("handle")
//   //   e.preventDefault();
//   //   try {
//   //     const { name,email,number,password,workstatus } = Data;
//   //     const res = await fetch("/admin", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({
//   //         name,
//   //         email,
//   //         number,
//   //         password,
//   //         workstatus
//   //       }),
//   //     });
//   //     const mes=res.json();
//   //     if(mes.error){
//   //       setError(mes.error);
//   //     }else{
//   //       window.location.href = "/admin";
//   //     }
//   //   }
//   //   catch(err)
//   //   {
//   //         console.log(err);
//   //   }
//   // }
//   // const [Data, setData] = useState({ 
//   //   name: "", 
//   //   email: "", 
//   //   number: "",
//   //   password: "",
//   //   workstatus:"",});
//   // const handleChange=({ currentTarget : input })=>{

//   //   setData({ ...Data, [input.name]: input.value });

//   // }
// //  console.log(data)

//   // console.log(now1)
//   //let dataarr=data;
//     return(
//       <div>
//         <h2>Admin Page</h2>
//         {/* //<li>{data}</li> */}
//         {/* {[data].map((e,index)=>
//      <div key={index._id} value={e}>{index.email}</div>)} */}
//      <ul>
//         {( data || [] ) && data.map((item) => (
//           <li key={item._id}>
//             <span>{item.name}</span>
//             <span>{item.email}</span>

//           </li>
//         ))}
//       </ul>
//        {/* <ul>
//         {data.map((items) => {
//          return(
//         <li key={items.name} ><h1>{items.name}</h1><p>Hello</p></li>

//          )

//          })}
//  </ul> */}
//        {/* <Grid container justify="center" spacing={4}>
//         {[data].map((item) => (
//           <Grid item key={item.name}  xs={12} sm={6} md={4} lg={3}>

//           </Grid>
//         ))};
//       </Grid> */}
//       </div> 
//     //   <div>
//     //     <h2>Admin Page</h2>
//     //   <div className="mx-auto mt-4">

//     //     <div className="mt-2 flex flex-col items-stretch gap-3 xl:mt-5 xl:flex-row xl:flex-wrap">
//     //       {user
//     //         .filter((user) => user.mainuser)
//     //         .map((item) => (

//     //             <table>
//     //             id={item._id}
//     //             name={item.name}
//     //             email={item.email}
//     //             number={item.number}

//     //             isAdmin={true}
//     //             </table>
//     //         ))}
//     //     </div>
//     //   </div>
//     // </div>
// );}
// function Admin(){
//   const [user, setUser] = useState([]);

//   const fetchData = () => {
//     return fetch("/admin")
//           .then((response) => response.json())
//           .then((data) => setUser(data));
//   }

//   useEffect(() => {
//     fetchData();
//   },[])
// console.log(user)
//   return (
//     <main>
//       <h1>User List</h1>
//       <ul>
//         {[user] && [user].length > 0 && [user].map((userObj, index) => (
//             <li key={userObj._id}>{userObj.name}</li>
//           ))}
//       </ul>
//     </main>

//   );
// }
// function Admin() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("/admin")
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   }, []);

//   console.log(users);

//   return (
//     <div>
//     <table class="rwd-table">
//                   <tbody>
//                     <tr>
//                       <th>Patient Name</th>
//                       <th>Email</th>
//                       <th>Date of Birth</th>

//                     </tr>
//                     {(users || []).map((i) => {
//                       return (
//                         <tr key={i._id}>
//                           <td>{i.name}</td>
//                           <td>{i.email}</td>
//                           <td>{i.number}</td>

//                           <td>

//                           </td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table></div>
//   );
// }
function Admin() {

const navigation = useNavigate()

  const [users, setUsers] = useState({
    g: []
  });
  const [recuter,setRecuter]=useState({
    r:[]
  });
  const [newItem, setNewItem] = useState({name:"",email:"",number:""});
  const [newRItem,setnewRItem] = useState({name:"",email:"",companyname:"",like:0,dislike:0})
  const [searchItem, setSearchItem] = useState({name:"",email:"",number:""});
  const [name, setName] = useState("");
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState({name:""})

 
  useEffect(() => {
    axios.get("/admin").then(
      (res) => {
        setUsers({ g: res.data });
        console.log(res.data)
      },
      (error) => {
        console.log("error in fetching");
      }
    );
  },[]);
  useEffect(() => {
    axios.get("/adminrecuter").then(
      (res) => {
        setRecuter({ r: res.data });
        console.log(res.data)
      },
      (error) => {
        console.log("error in fetching");
      }
    );
  },[]);

  const handleChangeuser = (e) => {
    const name=e.target.name;
    const value=e.target.value;
    setNewItem({ ...newItem, [name]: value });
  };
  const handleChangerecuter = (e) => {
    const name=e.target.name;
    const value=e.target.value;
    setnewRItem({ ...newRItem, [name]: value });
  };
   const handleChangeSearch = (e) => {
    const name=e.target.name;
    const value=e.target.value;
    setSearchTerm({ ...searchItem, [name]: value });
  };
  const createItem = async () => {
    console.log("ADD")
    try {
      const response = await axios.post('/adminadd', { name: newItem.name, email: newItem.email, number: newItem.number });
      
      setNewItem(response);
    } catch (error) {
      console.error(error);
    }
  };
  const createRItem = async () => {
    console.log("ADDR")
    try {
      const response = await axios.post('/adminrecuteradd', { name: newRItem.name, email: newRItem.email, companyname: newRItem.companyname,like:0,dislike:0 });
      
      setNewItem(response);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteItem = async (user) => {
    try {
      console.log("delete")
      // console.log(user);
      const res=await axios.post("/admindelete",{_id:user});
      // const y=await res.json();
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteRItem = async (recuter) => {
    try {
      console.log("delete")
      // console.log(user);
      const res=await axios.post("/adminrecuterdelete",{_id:recuter});
      // const y=await res.json();
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  const updateItem =  (item) => {
    console.log("update")
    console.log(item)
   
    navigation("/UpdateForm",  {state:{item: item}} );
  };
  const updateRItem =  (item) => {
    console.log("update")
    console.log(item)
   
    navigation("/Updateformrecuter",  {state:{item: item}} );
  };
  const handleSSubmit = async (user) => {
  
    console.log("sear")
   
    try {
      const response = await axios.post("/search", { name: user });
      alert("name:",response.name,"is valid name");
      setSearchItem({name: response.data.name,email: response.data.email,number: response.data.number});
      console.log(searchItem)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <Navbar2/>
      <div name="users">
      <h1>User List
        {/* {users.g[0].name} */}
      </h1>
      
      <div>

   
        <div class="px-3 py-4 flex justify-center">
          <table class="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr class="border-b">
                <th class="text-left p-3 px-5">Name</th>
                <th class="text-left p-3 px-5">Email</th>
                <th class="text-left p-3 px-5">Number</th>
                <th class="text-left p-3 px-5">Role</th>
                <th></th>
              </tr>
              <tr>
            
                            <td><div class="my-2 col-md-10 col-12">
                                <input class="form-control" type="text" placeholder="Name" name="name" id="name"
                                    value={newItem.name} onChange={handleChangeuser} required/>
                            </div></td><td>
                            <div class="my-2 col-md-10 col-12">
                                <input class="form-control" type="email" placeholder="Email" name="email" id="email"
                                    value={newItem.email} onChange={handleChangeuser} required/>
                            </div></td><td>
                            <div class="my-2 col-md-10 col-12">
                                <input class="form-control" type="number" placeholder="Number" name="number" id="number"
                                    value={newItem.number} onChange={handleChangeuser}  required/>
                            </div></td>
                           <td>
                            <div class="my-2 col-md-10 col-12">
                                <button type="submit" onClick={createItem} class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Add</button>
                            </div></td>
                        
              </tr>
              {users.g.map((index, i) => {
                return (
                  <tr value={index._id} key={i} class="border-b hover:bg-orange-100 bg-gray-100">
                    <td class="p-3 px-5"><input type="text" value={index.name} class="bg-transparent" /></td>
                    <td class="p-3 px-5"><input type="text" value={index.email} class="bg-transparent" /></td>
                    <td class="p-3 px-5"><input type="text" value={index.number} class="bg-transparent" /></td>
                    <td class="p-3 px-5">
                      <select value={index.workstatus} class="bg-transparent">
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                      </select>
                    </td>
                    <td class="p-3 px-5 flex justify-end">
                      <button type="button" onClick={()=>updateItem({item:index._id})} class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
                      <button type="button" onClick={()=>deleteItem(index._id)} class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                     </td>
                  </tr>);
              })}</tbody>
          </table></div>
      </div>

      </div>
      <div name="recuter">
      <h1>Guider List
        {/* {users.g[0].name} */}
      </h1>

      <div>

        <div class="px-3 py-4 flex justify-center">
          <table class="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr class="border-b">
                <th class="text-left p-3 px-5">Name</th>
                <th class="text-left p-3 px-5">Email</th>
                <th class="text-left p-3 px-5">Company Name</th>
                <th class="text-left p-3 px-5">Like</th>
                <th class="text-left p-3 px-5">DisLike</th>
                <th></th>
              </tr>
              <tr>
            
                            <td><div class="my-2 col-md-10 col-12">
                                <input class="form-control" type="text" placeholder="Name" name="name" id="name"
                                    value={newRItem.name} onChange={handleChangerecuter} required/>
                            </div></td><td>
                            <div class="my-2 col-md-10 col-12">
                                <input class="form-control" type="email" placeholder="Email" name="email" id="email"
                                    value={newRItem.email} onChange={handleChangerecuter} required/>
                            </div></td><td>
                            <div class="my-2 col-md-10 col-12">
                                <input class="form-control" type="text" placeholder="Compnay Name" name="companyname" id="compnayname"
                                    value={newRItem.companyname} onChange={handleChangerecuter}  required/>
                            </div></td>
                           <td>
                            <div class="my-2 col-md-10 col-12">
                                <button type="submit" onClick={createRItem} class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Add</button>
                            </div></td>
                        
              </tr>
              {recuter.r.map((index, i) => {
                return (
                  <tr value={index._id} key={i} class="border-b hover:bg-orange-100 bg-gray-100">
                    <td class="p-3 px-5"><input type="text" value={index.name} class="bg-transparent" /></td>
                    <td class="p-3 px-5"><input type="text" value={index.email} class="bg-transparent" /></td>
                    <td class="p-3 px-5"><input type="text" value={index.companyname} class="bg-transparent" /></td>
                    <td class="p-3 px-5"><input type="text" value={index.like} class="bg-transparent" /></td>
                    <td class="p-3 px-5"><input type="text" value={index.dislike} class="bg-transparent" /></td>
                   
                    <td class="p-3 px-5 flex justify-end">
                      <button type="button" onClick={()=>updateRItem({item:index._id})} class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
                      <button type="button" onClick={()=>deleteRItem(index._id)} class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                     </td>
                  </tr>);
              })}</tbody>
          </table></div>
      </div>
      </div>
    </main>

  );
}


export default Admin