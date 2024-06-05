import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../store/appContext';



export const Pista1 = () => {
    const { actions } = useContext(Context);



    return <>

        <div id='hero-body' className="flex flex-col sm:flex-row mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-20 min-h-screen mt-0 mb-5 " style={{ backgroundImage: 'url("https://i.pinimg.com/736x/d2/10/34/d21034e458359dd4ad8fdf312613b597.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>

            <div id='hero' className='d-flex  justify-center'  >
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg flex justify-around hover:scale-110 transition-transform duration-300 ease-in-out bg-white" >

                    <div className="px-6 py-4 ">
                        <div className="font-bold text-l mb-2">
                            How many days did I spend
                            Thinkin' 'bout how you did me wrong, wrong, wrong?
                            Lived in the shade you were throwin'
                            'Til all of my sunshine was gone, gone, gone
                            And I couldn't get away from you
                            In my feelings more than Drake, so yeah
                            Your name on my lips, tongue tied
                            Free rent, livin' in my mind
                            But then something happened one magical night

                            I forgot that you existed
                            And I thought that it would kill me, but it didn't
                            And it was so nice
                            So peaceful and quiet

                            I forgot that you existed
                            It isn't love, it isn't hate
                            It's just indifference

                            I forgot that you
                            Got out some popcorn
                            As soon as my rep starting going down, down, down
                            Laughed on the schoolyard
                            As soon as I tripped up and hit the ground, ground, ground
                            And I would've stuck around for ya
                            Would've fought the whole town, so yeah
                            Would've been right there front row
                            Even if nobody came to your show
                            But you showed who you are, then one magical night

                            I forgot that you existed
                            And I thought that it would kill me, but it didn't
                            And it was so nice
                            So peaceful and quiet

                            I forgot that you existed
                            It isn't love, it isn't hate
                            It's just indifference

                            I forgot that you
                            Sent me a clear message
                            Taught me some hard lessons
                            I just forget what they were
                            It's all just a blur

                            I forgot that you existed
                            And I thought that it would kill me, but it didn't
                            And it was so nice
                            So peaceful and quiet

                            I forgot that you existed
                            I did, I did, I did
                            It isn't hate, it's just indifference
                            It isn't love, it isn't hate

                        </div>

                    </div>

                </div>

            </div>







        </div>

        <div className='border-y-4 flex justify-center items-center py-4 gap-6 shadow'>
            <div onClick={() => actions.logOut()} className='flex items-center gap-2 cursor-pointer'>
                <img src='https://numero.twic.pics/2024-03/taylor-swift-album-numero-magazine1.jpg?twic=v1/quality=83/truecolor=true/output=jpeg' className='flag h-10 w-10 bg-orange-300 rounded-full top-1 start-1' />
                <p className="font-bold text-xl">Salir</p>
            </div>

        </div >





    </>
}