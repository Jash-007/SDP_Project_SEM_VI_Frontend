import React,{useState} from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
function Navbar2  ()  {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate()
  const handlelogout = () => {
    nav( "/login")
  }
  const handleDownload=async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.get('https://appbackend-mrpn.onrender.com/downloaddata', {
        responseType: 'arraybuffer'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'users.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    
    //console.log(download)
  }
  const handleRDownload=async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.get('https://appbackend-mrpn.onrender.com/Rdownloaddata', {
        responseType: 'arraybuffer'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'guider.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    
    //console.log(download)
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
        <h2>Admin Site</h2>
        
        <div class="flex space-x-4 items-center">
        <button onClick={handleDownload} class="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">Downoad User Data
        </button>
        <button onClick={handleRDownload} class="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">Downoad Guider Data
        </button>
          <button onClick={handlelogout} class="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">LogOut</button>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
export default Navbar2
