import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (

        <div id='hero' className=' d-flex flex-column mx-auto px-6 md:px-8 lg:px-16 xl:px-20 py-10 p-20 w-full sm:w-1/3'  >
        <div className="flex-grow flex flex-col bg-neutral-100 border border-gray-200 rounded-lg overflow-hidden mt-3 mb-3 transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl" >
            <img className="w-full object-cover " src={props.image} alt={props.title} />
            <div className=" w-full px-6 py-4 flex-1">
                <div className="font-bold text-l mb-2 text-center w-full">{props.title}</div>
                <p className="text-gray-700 text-base flex-1">
                <strong> Publicación:</strong> {props.description1} <br/>
                <strong> Género:</strong> {props.description2}<br/>
                <strong> Produtores:</strong> {props.description3}<br/>
                </p>
            </div>
            <div className="px-4 pt-2 pb-2 flex justify-center">
            <Link to={props.buttonLink} rel="noopener noreferrer mt-auto">
                    <button className="mt-auto justify-center rounded-md bg-pink-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Lista de canciones
                    </button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Card;
