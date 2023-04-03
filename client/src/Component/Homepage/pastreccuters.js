import React,{ useState }  from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router';

const Pastrecuter = (props) => {
    const [likes, setLikes] = useState(props.likes);
    const [dislikes, setDislikes] = useState(props.dislikes);
    const navigation = useNavigate()
    const handleLike = async () => {
        try {
            const  user=localStorage.getItem("ceremdendial");
            const user_id=user._id;
          const response = await axios.post("/like",{id: props._id,user_id:user_id});
         setLikes(response.props.likes);
          console.log("like send")
        } catch (error) {
          console.error(error);
        }
      };
    
      const handleDislike = async () => {
        try {
          const  user=localStorage.getItem("ceremdendial");
            const user_id=user._id;
          const response = await axios.post("/dislike",{id: props._id,user_id:user_id});
          setDislikes(response.props.dislikes);
          console.log("dislike send")
        } catch (error) {
          console.error(error);
        }
      };
      const handleRecuter = async (item) => {
        
          console.log("update")
          console.log("item",item)
         
          navigation("/recuter1",  {state:{item: item}} );
        
          
      };
    return (
    <>
       
        <div>
            
                {/* {[props].map((index,i) => {
                      return (
                        <div value={index._id} key={i}  class="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
                        <div class="w-full xl:w-1/2 xl:pr-8">
                           
                                <div class="flex flex-col pr-8">
                                    <div class="relative pl-12">
                                        <svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                            <path
                                                d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                                        </svg>
                                        <p class="mt-2 text-base text-gray-600">{index.suggestion}
                                        </p>
                                        <a href="https://testbook.com/placement-aptitude/test-series">Visit for test</a>
                                    </div>

                                    <h3 class="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">{index.name} <span class="mt-1 text-sm leading-5 text-gray-500 truncate">-{index.companyname}
                                          </span></h3>
                                    <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                                    <p>
                                        Likes: {likes}{' '}
                                    <button onClick={handleLike}>Like</button>
                                     </p>
                                     <p>
                                     Dislikes: {dislikes}{' '}
                                     <button onClick={handleDislike}>Dislike</button>
                                        </p>
                                </div>
                                <img class="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                                    src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2694&q=80"
                                    alt=""/>
                            </div></div>
                      );})} */}
                      {[props].sort((a, b) => b.likes - a.likes).map((index,i) => {
                      return (
                        <div
  onClick={()=>handleRecuter(index._id)}
  class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div class="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
      {index.suggestion}
      </h3>

      <p class="mt-1 text-xs font-medium text-gray-600">{index.name}</p>
    </div>

    <div class="hidden sm:block sm:shrink-0">
      <img
        alt="Paul Clapton"
        src="https://previews.123rf.com/images/vectorgalaxy/vectorgalaxy1808/vectorgalaxy180820092/108292032-teacher-vector-icon-isolated-on-transparent-background-teacher-logo-concept.jpg"
        class="h-16 w-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div class="mt-4">
    <p class="max-w-[40ch] text-sm text-gray-500">
      {index.suggestion}
    </p>
  </div>

  <dl class="mt-6 flex gap-4 sm:gap-6">
 
      <button onClick={handleLike} style={{ color: 'red' ,marginRight: '10px'}}>
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <span>{likes}</span>
      
      <button onClick={handleDislike} style={{ color: 'blue' }}>
        <FontAwesomeIcon icon={faThumbsDown} />
      </button>
      <span>{dislikes}</span>
 
    
  </dl>
</div>

                      );})}
                {/* <div class="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
                    <div class="w-full xl:w-1/2 xl:pr-8">
                        <blockquote
                            class="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                            <div class="flex flex-col pr-8">
                                <div class="relative pl-12">
                                    <svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                        <path
                                            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                                    </svg>
                                    <p class="mt-2 text-base text-gray-600">{props.suggestion}
                                    </p>
                                </div>

                                <h3 class="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">{props.name} <span class="mt-1 text-sm leading-5 text-gray-500 truncate">-{props.companyname}
                                      </span></h3>
                                <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                            </div>
                            <img class="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                                src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2694&q=80"
                                alt=""/>
                        </blockquote> */}
                        {/* <blockquote
                            class="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 mb-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease xl:mb-0">
                            <div class="flex flex-col pr-10">
                                <div class="relative pl-12">
                                    <svg class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                        <path
                                            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                                    </svg>
                                    <p class="mt-2 text-base text-gray-600">Really digging this service. Now I can
                                        quickly bootstrap any
                                        project.</p>
                                </div>
                                <h3 class="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">{props.name} <span class="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO
                                        SomeCompany</span></h3>
                                <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                            </div>
                            <img class="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                                src="https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                                alt=""/>
                        </blockquote> */}
                    {/* </div> */}
                  
                {/* </div> */}


        


</div></>
    )
}
export default Pastrecuter