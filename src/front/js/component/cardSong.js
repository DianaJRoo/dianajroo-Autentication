import React from 'react';
import { Link } from 'react-router-dom';

const CardSong = (props) => {
    return (

        <div id='hero' className=' d-flex flex-column mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-2 p-20 w-full sm:w-1/3 '  >
        <div id='hero' className="max-w-sm rounded-lg overflow-hidden shadow-lg flex justify-around hover:scale-110 transition-transform duration-300 ease-in-out bg-white" style={props.style} >
        
            <div className=" w-full px-6 py-4 flex-1">
                <div className="font-bold text-l mb-2 w-full flex-1">{props.title}</div>
              
            </div>
            <div className="px-4 pt-3 pb-2 flex justify-center align-center">
            <Link to={props.buttonLink} rel="noopener noreferrer ">
                    <button className=" flex align-center justify-center rounded-md bg-pink-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Letra
                    </button>
                </Link>
            </div>
       
        </div>
        </div>
    );
};

export default CardSong;
