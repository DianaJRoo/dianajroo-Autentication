import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import Card from '../component/card';




export const Discografia = () => {
    const { actions } = useContext(Context);



    return <>

        <div className="flex flex-wrap justify-center">
            <Card
                image="https://upload.wikimedia.org/wikipedia/en/1/1f/Taylor_Swift_-_Taylor_Swift.png"
                title="Taylor Swift"
                description1= "Publicación: "
                description2= "24 de octubre de 2006."
                description3= "Género: " 
                description4= "Country, pop rock."
                description5= "Productores: "
                description6= "Nathan Chapman, Robert Ellis Orrall."
                buttonLink="https://www.example.com/1"
            />
            <Card
                image="https://static.wikia.nocookie.net/taylorswift/images/7/77/Fearless_%28Taylor%27s_version%29_-_Portada.jpg/revision/latest?cb=20210211141117&path-prefix=es"
                title="Fearless (Taylor Version)"
                description1="Publicación: 	11 de noviembre de 2008/ 9 de abril de 2021."
                description2="Género: Country pop."
                description3="Productores: Taylor Swift, Christopher RoweJack, AntonoffAaron Dessner."
                buttonLink="https://www.example.com/1"
            />
            <Card
                image="https://pbs.twimg.com/media/FvarZkpaYAglwlO.jpg:large"
                title="Speak Now (Taylor Version)"
                description1="Publicación: 	25 de octubre de 2010/7 de julio de 2023."
                description2="Género: Pop country, pop rock"
                description3="Productores: Taylor Swift, Cristóbal Rowe, Aaron Dessner, Jack Antonoff."
                buttonLink="https://www.example.com/1"
            />
            <Card
                image="https://upload.wikimedia.org/wikipedia/en/4/47/Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png"
                title="Red (Taylor Version)"
                description1="Publicación: 22 de octubre de 2012/12 de noviembre de 2021."
                description2="Género: Pop, country ."
                description3="Productores: Taylor Swift, Christopher RoweShellback, Aaron Dessner, Jack Antonoff, Elvira Anderfjärd, Dan Wilson, Jeff Bhasker, Jacknife Lee, Butch Walker, Espionage."
                buttonLink="https://www.example.com/1"
            />
            <Card
                image="https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png"
                title="1989 (Taylor Version)"
                description1="Publicación: 27 de octubre de 2014/27 de octubre de 2023."
                description2="Género: Dream pop, electropop, soft rock, synth-pop."
                description3="Productores: Taylor Swift, Jack Antonoff, Christopher Rowe, Shellback, Ryan Tedder, Noel Zancanella, Imogen Heap, Patrik Berger."
                buttonLink="https://www.example.com/1"
            />
            <Card
                image="https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png"
                title="Reputation"
                description1="Publicación: 	10 de noviembre de 2017."
                description2="Género: Electropop, dance pop, synthpop, pop, trap."
                description3="Productores: Taylor Swift, Jack Antonoff, Max Martin, Shellback, Ali Payami, Oscar Görres, Oscar Holter."
                buttonLink="https://www.example.com/1"
            />
            <Card
                image="https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647"
                title="Lover"
                description1="Publicación: 23 de agosto de 2019."
                description2="Género: Pop, pop rock, electropop y synth pop ."
                description3="Productores: Taylor Swift, Joel Little, Jack Antonoff, Frank Dukes y Louis Bell​."
                buttonLink="/lover"
            />
            <Card
                image="https://static.wikia.nocookie.net/taylorswift/images/2/20/Folklore_Album_Portada.jpg/revision/latest?cb=20200724001812&path-prefix=es"
                title="	Folklore"
                description1="Publicación: 24 de julio de 2020."
                description2="Género: Rock, folk, electro-folk, chamber pop, indietrónica, country folk rock."
                description3="Productores: Jack Antonoff, Aaron Dessner, Joe Alwyn y Taylor Swift."
                buttonLink="https://www.example.com/1"
            />
            <Card
                image="https://upload.wikimedia.org/wikipedia/en/0/0a/Taylor_Swift_-_Evermore.png"
                title="Evermore"
                description1="Publicación: 11 de diciembre de 2020."
                description2="Género: Rock, chamber rock ​pop, folk."
                description3="Productores: Aaron Dessner, Taylor Swift, Jack Antonoff, Bryce Dessner."
                buttonLink="https://www.example.com/1"
            />
            <Card
                image="https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png"
                title="Midnights"
                description1="Publicación: 21 de octubre de 2022."
                description2="Género: Synth-pop electropop, dream pop, bedroom pop."
                description3="Productores: Taylor Swift, Jack Antonoff, Sounwave, Jahaan Sweet, Keanu Beats."
                buttonLink="https://www.example.com/1"
            />
            <Card
                image="https://upload.wikimedia.org/wikipedia/en/6/6e/Taylor_Swift_%E2%80%93_The_Tortured_Poets_Department_%28album_cover%29.png"
                title="The Tortured Poets Department"
                description1="Publicación: 19 de abril de 2024."
                description2="Género: Synth-pop, folk-pop, chamber pop."
                description3="Productores: Taylor Swift, Jack Antonoff, Aaron Dessner, Patrik Berger."
                buttonLink="https://www.example.com/1"
            />







        </div>













    </>
}