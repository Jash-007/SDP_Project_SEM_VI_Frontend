import React from 'react'
import { useNavigate } from 'react-router'
function Navbar1  ()  {
  const nav = useNavigate()
  const handlelogin = () => {
    nav( '/loginrecuter')
  }
  const handlesignup = () => {
     nav( '/recuter');
  }
  return (
    <div>
       <nav>
    <div class="">
      <div class="flex justify-between h-16 px-10 shadow items-center">
        <div class="flex items-center space-x-8">
        <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
         
        </div>
        <div class="flex space-x-4 items-center">
          <button onClick={handlelogin} class="text-gray-800 text-sm">LOGIN</button>
          <button onClick={handlesignup} class="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</button>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
export default Navbar1
