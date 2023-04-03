import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState }  from 'react'



function Carousalpage() {
    return (
        <div>
        <div class="pt-24">
        <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
         
          <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p class="uppercase tracking-loose w-full">What are you looking for?</p>
            <h1 class="my-4 text-5xl font-bold leading-tight">
              Main Hero Prove themself!
            </h1>
            <p class="leading-normal text-2xl mb-8">
              Sub-hero practice, not too long and not too short. Make it just right!
            </p>
            <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Learn
            </button>
          </div>
          
          <div class="w-full md:w-3/5 py-6 text-center">
            <img class="w-full md:w-4/5 z-50" src={require('./hero.png')} />
          </div>
        </div>
      </div>
      
      </div>
    );
}
export default Carousalpage