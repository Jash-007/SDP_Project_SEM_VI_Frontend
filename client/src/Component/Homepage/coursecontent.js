import React,{ useState }  from 'react'
import { Link } from 'react-router-dom';
function Coursecontent() {
    return (
        <section class="bg-white border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Courses
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  C Programming
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-start">
              
                <Link to="https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR" >
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-black dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Open Course
                  </span>
              </button>
                </Link>
           
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Java
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-center">
              <Link to="https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q" >
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-black dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Open Course
                  </span>
              </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  DBMS
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-end">
              <Link to="https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" >
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-black dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Open Course
                  </span>
              </button>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Computer Networks
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-start">
              
                <Link to="https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_" >
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-black dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Open Course
                  </span>
              </button>
                </Link>
           
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Operating system
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-center">
              <Link to="https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p" >
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-black dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Open Course
                  </span>
              </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Data Structure & Algorithm
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-end">
              <Link to="https://www.youtube.com/playlist?list=PLk7ptZcI9vmjLJMjTSV2FkSNFaDOV-6cr" >
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-black dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Open Course
                  </span>
              </button>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
}
export default Coursecontent