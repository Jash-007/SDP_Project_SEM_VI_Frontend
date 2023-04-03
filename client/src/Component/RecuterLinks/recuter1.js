import React from 'react';
import Footer from '../Homepage/footer';
import Navbar from '../Homepage/navbar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2'
function Recuter1  (props)  {
  const location = useLocation();
  const nav = useNavigate();
  const [likes, setLikes] = useState(props.likes);
  const [users, setUsers] = useState({
    name: "",
    email: "",
    companyname: "",
    suggestions: "",
    link:"",
    workstatus:"" ,
    like:"",
    dislike:"",
  });
  
  
  useEffect(()=>{
    
    console.log(location.state.item)
    
    const dota=async (gf)=>{
      const response = await axios.post("/adminrecuterview", {id:location.state.item,users:users});
      console.log(response);
      
      setUsers({ ['name']: response.data[0].name,['workstatus']:response.data[0].workstatus,['link']:response.data[0].link,['suggestion']: response.data[0].suggestion,['email']:response.data[0].email,['companyname']:response.data[0].companyname,['like']:response.data[0].like,['dislike']:response.data[0].dislike });
     
    }
  dota()
  },[])
  const handlemessage=()=>{
    nav("/feedback")
  }
  const handleLike = async () => {
    try {
      
      const response = await axios.post("/like",{id: location.state.item});
     setLikes(response.likes);
      console.log("like send")
    } catch (error) {
      console.error(error);
    }
  };
  const data = {
    // labels: ['Dislike', 'Like'],
    datasets: [
      {
        label: 'No. of Votes of like and dislike',
        data: [users.dislike, users.like],
        backgroundColor: [
          'red',
          'blue',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          
        ],
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: true, // Don't maintain aspect ratio
    height: 50,
    radius: 200,
    
  };
  return (
    <>
    
        <Navbar />
        <div>
        {[users].map((index,i) => {
          return(
        <div  class="p-16">
<div class="p-8 bg-white shadow mt-24">
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
      <div>
        <p class="font-bold text-gray-700 text-xl">{index.like}</p>
        <p class="text-gray-400">Likes</p>
      </div>
      <div>
           <p class="font-bold text-gray-700 text-xl">{index.dislike}</p>
        <p class="text-gray-400">Dislike</p>
      </div>
          
    </div>
    <div class="relative">
      <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
<svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg>
      </div>
    </div>

    <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
<button onClick={handleLike}
  class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
  Like
</button>
    <button onClick={handlemessage}
  class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
  Message
</button>
    </div>
  </div>

  <div class="mt-20 text-center border-b pb-12">
    <h1 class="text-4xl font-medium text-gray-700">{index.name}<span class="font-light text-gray-500"></span></h1>
   

    <h4 class="mt-8 text-gray-900">{index.workstatus}-{index.companyname}</h4>
    <h5 class="mt-2 text-gray-500">{index.link}</h5>
  </div>

  <div class="mt-12 flex flex-col justify-center">
    <p class="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
    <center><a href="https://www.youtube.com/playlist?list=PLk7ptZcI9vmjLJMjTSV2FkSNFaDOV-6cr" 
  class="text-indigo-500 py-2 px-4  font-medium mt-4"
>
  Show more
</a></center>
  </div>
       <center> <h2 >Guider Like Status</h2></center>
   
<div style={{marginTop : "-32%", marginBottom: "-25%"}}>
        <Pie data={data} options={options}/>
     </div>   
    
</div>
</div> );})}</div>
        <Footer />
     
    </>
  )
}
export default Recuter1
