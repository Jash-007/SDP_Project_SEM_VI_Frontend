import React,{useState} from 'react'
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
function SingleSearch(props) {
    const location = useLocation();


    const [users, setUsers] = useState({
        name: location.state.name.name,
        email: "",
        number: "",
      });
  return (
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
                  
                  </tr>);
              })}</tbody>
          </table></div>
      </div>
   
  )
}

export default SingleSearch