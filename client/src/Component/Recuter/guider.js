import React,{useState , useEffect} from 'react'
import Pastrecuter from '../Homepage/pastreccuters';
import axios from 'axios'
const Guider = () => {
    const [users, setUsers] = useState({ 
        g:[]
      });
      useEffect(() => {
        axios.get("/vrecuter").then(
          (res) => {
           
        
            //const f=res.json();
            // setPost([...post,{[res.data.name]}]);
            // console.log(res.data);
            // console.log(post);
            setUsers({ g: res.data });
          
            // console.log(res.data);
          //  console.log(loguser);
        //	console.log(res.description);
            // console.log(res.amount);
            // console.log(post);
          },
          (error) => {
            console.log("error in fetching");
          }
        );
      });

  return (
    <div className="flex w-full flex-col items-stretch gap-3 xl:flex-row xl:flex-wrap">
    {users.g.
    
      map((index,i) => (
        <Pastrecuter
          key={index._id}
          _id={index._id}
          name={index.name}
          email={index.email}
          companyname={index.companyname}
          suggestion={index.suggestion}
          link={index.link}
          isAdmin={false}
        />
      ))}
  </div>

  )
}
export default Guider