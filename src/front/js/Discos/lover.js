import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import CardSong from '../component/cardSong';



export const Lover = () => {
    const { actions } = useContext(Context);



    return <>

        <div id='hero-body' className="flex flex-col sm:flex-row mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-20 min-h-screen mt-0 mb-0" style={{ backgroundImage: 'url("https://i.pinimg.com/originals/3a/6a/22/3a6a22d3dd947b0dffe91a4e884acf89.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
        <div className="flex flex-wrap justify-around" >
            <CardSong
                title="1. I Forgot That You Existed"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}
            />
            <CardSong
                title="2. Cruel Summer"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}
            />
            <CardSong
                title="3. Lover"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="4. The Man"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="5. The Archer"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="6. I Think He Knows"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="7. Miss Americana & The Heartbreak Prince"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="8. Paper Rings"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="9. Cornelia Street"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="10. Death By A Thousand Cuts"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="11. London Boy"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="12. Soon You’ll Get Better"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="13. False God"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="14. You Need To Calm Down"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="15. Afterglow"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="16. ME!"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="17. It's Nice To Have A Friend"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />
            <CardSong
                title="18. Daylight"
                buttonLink="/pista1"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/3e/0e/60/3e0e6046dcdf0431f880c1a5143c0a59.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '10vh' }}

            />


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