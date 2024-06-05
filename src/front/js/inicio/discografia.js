import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/appContext';



export const Discografia = () => {
    const { actions } = useContext(Context);



    return <>

        <div id='disco-body' className="flex justify-center items-center mt-0 mb-0 " >

            <div id='hero' className=' d-flex flex-column mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-20 p-20 w-full sm:w-1/3'  >
                <div className="card bg-white border border-gray-200 rounded-lg overflow-hidden mt-3 mb-3 transform hover:scale-110 transition-transform duration-300 ease-in-out" style={{ width: '15rem',   }}>
                    <img src="https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-m font-bold text-center">Lover</h5>
                        <p className="card-text text-gray-700 text-sm">
                            <strong>Publicación:</strong> 	23 de agosto de 2019 <br />
                            <strong>Género(s):</strong>	Pop, pop rock, electropop y synth pop <br />
                            <strong>Productor(es):</strong> Taylor Swift, Joel Little, Jack Antonoff, Frank Dukes y Louis Bell​</p>

                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-white text-center">
                            <Link to="/lover" type="button" class="rounded-md bg-pink-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

                                Lista de Canciones

                            </Link>
                        </li>


                    </ul>

                </div>


            </div>





        </div>







    </>
}