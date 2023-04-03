import React,{ useState }  from 'react'
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Navbar1 from './navbar1';
import { useNavigate } from 'react-router';
function Recuter() {
    const nav = useNavigate();
    const [Error, setError] = useState();
  const handleSubmit= async (e)=>
  {
    console.log("handle")
    e.preventDefault();
    try {
      const { name,email,companyname,suggestion,link,workstatus } = Data;
      const res = await fetch("https://appbackend-mrpn.onrender.com/recuter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          companyname,
          suggestion,
          link,
          workstatus
        }),
      });
      const mes=res.json();
      if(mes.error){
        setError(mes.error);
      }else{
        nav('/Frontpage');
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
    companyname: "",
    suggestion: "",
    link:"",
    workstatus:"",});
  const handleChange=({ currentTarget : input })=>{

    setData({ ...Data, [input.name]: input.value });

  }
    return (
        <>
        <Navbar1/>
        <form onSubmit={handleSubmit}>
      
        <MDBInput className="pl-2 outline-none border-none" type="text" name="name" id="name" onChange={handleChange} value={Data.name} required placeholder="Full name" />
      <br/>

      <MDBInput className="pl-2 outline-none border-none" type="email" name="email" id="email" onChange={handleChange} value={Data.email} required placeholder="Email" />
      <br/>
      <MDBInput className="pl-2 outline-none border-none" type="text" name="companyname" id="companyname" onChange={handleChange} value={Data.companyname} required placeholder="Company Name" />
      <br/>
      <MDBInput className="pl-2 outline-none border-none" type="text" name="suggestion" id="suggestion" onChange={handleChange} value={Data.suggestion} required placeholder="Suggestion" />
      <br/>
      <MDBInput className="pl-2 outline-none border-none" type="text" name="link" id="link" onChange={handleChange} value={Data.link} required placeholder="Add Link for the profile" />
      <br/>
      <MDBInput className="pl-2 outline-none border-none" type="text" name="workstatus" id="workstatus" onChange={handleChange} value={Data.workstatus} required placeholder="Work Status" />
      <br/>



      <MDBBtn className='mb-4' type='submit' value="submit" block>
         Submit Suggestion
      </MDBBtn>
    </form>
    </>
     )
}
export default Recuter
