import React from 'react'
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend
// );
function Chartlike  ()  {
  
  const location = useLocation();
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
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
 

  return (
    <div>
      <h2>Hello Pie</h2>
        <Pie data={data} />

        
    </div>
  )
}
export default Chartlike
