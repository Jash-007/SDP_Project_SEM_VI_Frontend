import React from 'react'
import './home.css'
function Homeoption  ()  {
    const handleuser = () => {
      window.location.href = "/sigin"
    }
    const handleguider = () => {
        window.location.href = "/recuter"
      }
  return (
    <>
       <div className="flex flex-col h-screen justify-center items-center" style={{backgroundImage: "url('https://www.aihr.com/wp-content/uploads/SelectionProcess-e1567938469835.jpg')", backgroundSize: 'cover'}}>
      <h1 className="text-4xl font-bold mb-8 text-black">Welcome to Placement Guideance App!</h1>
      <div className="flex space-x-10">
        <button onClick={handleuser} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline">
          User
        </button>
        <button onClick={handleguider} className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline">
          Guider
        </button>
      </div>
    </div>
  </>
);
}







  

export default Homeoption