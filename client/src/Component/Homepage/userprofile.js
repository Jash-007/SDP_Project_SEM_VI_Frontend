import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router';
function UserProfile  () {
    const [data, setData] = useState({
        name: "",
        email: "",
        number: "",
        workstatus: "",
      });
     const nav=useNavigate()
   
    useEffect(()=>{
        var user=localStorage.getItem("ceremdendial");
        user=JSON.parse(user);
        setData({ ['name']: user.name,['email']:user.email,['number']:user.number,['workstatus']:user.workstatus });
      },[])
      
const handlehome=()=>{
    nav('/FrontPage')
}
  return (
   
    <body class="bg-gray-300 antialiased">
        <div class="container mx-auto my-60">
            <div>
    
                <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                    <div class="flex justify-center">
                            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553__340.png" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/>
                    </div>
                    
                    <div class="mt-16">
                        <h1 class="font-bold text-center text-3xl text-gray-900">{data.name}</h1>
                       
                        <p>
                            <span>
                                
                            </span>
                        </p>
                        <div class="my-5 px-6">
                            <a href="#" class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Connect with <span class="font-bold">@{data.name}</span></a>
                        </div>
                        <div class="flex justify-between items-center my-5 px-6">
                            <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                            <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                            <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                            <a href="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                        </div>
    
                        <div class="w-full">
                           
                            <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="https://e7.pngegg.com/pngimages/522/873/png-clipart-black-envelope-icon-advanced-case-management-envelope-computer-icons-icon-design-envelope-mail-miscellaneous-angle.png" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                      Mail me:  {data.email}
                                    
                                </a>
    
                                <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/accept-call-icon.png" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    Call On:    {data.number}
                                    
                                </a>
                                <button onClick={handlehome} class="bg-orange-500 px-4 py-2 text-white">Back to Home Page</button>
                                
    
                               
                                   
                
                          
                                
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    </body>
 
  )
}
export default UserProfile
