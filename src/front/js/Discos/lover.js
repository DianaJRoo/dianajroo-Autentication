import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/appContext';



export const Lover = () => {
    const { actions } = useContext(Context);



    return <>

        <div id='hero-body' className="flex justify-center items-center mt-0 mb-0 " style={{ backgroundImage: 'url("https://i.pinimg.com/originals/3a/6a/22/3a6a22d3dd947b0dffe91a4e884acf89.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>

            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg flex justify-around hover:scale-110 transition-transform duration-300 ease-in-out bg-white" style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}>

                <div className="px-6 py-4 ">
                    <div className="font-bold text-l mb-2">1. I forgot that you existed </div>
                    <p className="text-gray-700 text-sm ">
                    
                    </p>
                </div>
                <div className="px-6 py-4">
                    <Link to="/pista1" type="button" class="rounded-md bg-pink-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

                        Letra

                    </Link>
                </div>
            </div>


        </div>

        <div className='border-y-4 flex justify-center items-center py-4 gap-6 shadow'>
            <div className='flex items-center gap-2 cursor-pointer'>
                <img src='https://thenoiseperu.com/wp-content/uploads/2022/01/ddiulc3-4e00352f-2724-47da-94cb-8cf91e7f2982.jpg' className='flag h-20 w-20 bg-orange-300 rounded-full top-1 start-1' />
               <Link to="/discografia"><p className="font-bold text-xl">Atrás</p></Link> 
            </div>

        </div >





    </>
}