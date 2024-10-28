import React from "react";
import { Link } from 'react-router-dom';
import "../../styles/home.css";

import { useContext } from 'react';
import { Context } from '../store/appContext';
import { FaInstagram, FaTiktok, FaTwitter, FaSnapchat, FaFacebook, FaTumblr    } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";



export const Biografia = () => {
    const { actions } = useContext(Context);



    return <>
  <div id='hero-body' className="flex flex-col sm:flex-row mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-20 min-h-screen mt-0 mb-0">

<div className=" max-w-3xl mx-auto mb-8 sm:mb-0 sm:mr-4 sm:w-1/2">
            
<p>Taylor Alison Swift (West Reading, Pensilvania, 13 de diciembre de 1989) es una cantante, compositora, productora discográfica, directora, actriz y empresaria estadounidense. Criada en Wyomissing (Pensilvania), se mudó a Nashville (Tennessee) a los 14 años para realizar una carrera de música country. Firmó con la compañía discográfica independiente Big Machine Records y se convirtió en la artista más joven contratada por Sony/ATV Music Publishing House. </p><br/>

<p>Taylor comenzó a escribir canciones profesionalmente a los 14 años y firmó con Big Machine Records en 2005 para convertirse en cantante de country, siendo la artista más joven contratada por Sony Music Publishing. Lanzó seis álbumes de estudio bajo el sello, cuatro de ellos para la radio country, empezando con su álbum debut Taylor Swift (2006). Su siguiente álbum, Fearless (2008), exploró el country pop y sus sencillos «Love Story» y «You Belong with Me» la catapultó a la fama, siendo el álbum más premiado en la historia de la música country.​ En 2010, Speak Now trajo la influencia rock, vendiendo un millón de copias en su primera semana en los Estados Unidos. Mientras tanto, Red (2012) experimentó con elementos electrónicos y presentó la primera canción número uno del Billboard Hot 100 de Taylor, «We Are Never Ever Getting Back Together». Su quinto álbum, 1989 (2014) la alejo de su imagen country,​ acercándola al synth-pop respaldado por las canciones que encabezaron las listas «Shake It Off», «Blank Space» y «Bad Blood», que convirtieron a Taylor en la primera mujer en los cincuenta y seis años del Billboard Hot 100 en destronar a su propia canción y sustituirse a sí misma en el primer lugar.​ El escrutinio de los medios inspiró Reputation (2017) con un estilo a hip-hop, que logró que su sencillo «Look What You Made Me Do» llegara al número uno.</p><br/>

<p>Taylor firmó con Republic Records en 2018. Lanzó el álbum pop ecléctico Lover (2019) y el documental autobiográfico Miss Americana (2020), mientras exploraba el indie folk y el rock alternativo en los álbumes de 2020, Folklore y Evermore. En 2022, uso el estilo pop discreto en su álbum Midnights, que volvió a consolidarla en las listas de Billboard Hot 100. Estos álbumes generaron las canciones «Cruel Summer», «Cardigan», «Willow» y «Anti-Hero», que llegaron al número uno en las listas. Tras una disputa contra Big Machine Records por el control de su másteres, Taylor comenzó a regrabar los álbumes que lanzó con la discográfica con los subtítulos Taylor's Version. teniendo hasta el momento cuatro de sus seis primeros albúmes regrabados a 2023, estas versiones trajeron de regreso los éxitos pasados de Taylor como «All Too Well» que lideró las listas por primera vez, al mismo tiempo ofreció nuevas canciones tituladas «From The Vault» como «Is It Over Now?». El Eras Tour, su gira de conciertos 2023-2024 y la película del concierto que la acompaña se convirtieron en las más taquilleras de la historia en sus respectivos campos. Taylor dirigió vídeos musicales y películas como All Too Well: The Short Film (2021).</p><br/>

<p>Es conocida por escribir canciones narrativas y composiciones acerca de sus experiencias personales. Como compositora, ha sido honrada por la Nashville Songwriters Association y el Salón de la Fama de los Compositores. Entre otros logros de Swift se incluyen 14 premios Grammy, un Emmy, 25 Billboard Music Awards, 40 American Music Awards, un premio Brit, 23 MTV Video Music Awards, 11 Country Music Association Awards, así como dos nominaciones al Globo de Oro. Ha vendido más de 50 millones de álbumes y 150 millones de descargas digitales de sus sencillos, convirtiéndola en una de las artistas con mayores ventas discográficas del mundo.</p><br/>

<p>Además de su dilatada carrera musical, apareció como actriz invitada en un episodio de la serie de televisión CSI: Crime Scene Investigation (2009); actuó en la película de comedia Valentine's Day (2010), en la película animada The Lorax (2012) en la cual proporcionó su voz al personaje de Audrey, y tuvo un papel secundario en la película The Giver (2014), así como en Cats (2019) y Amsterdam (2022).</p><br/>

<p>Como filántropa, apoya la educación artística, la alfabetización de los niños, los fondos de ayuda ante desastres naturales, el feminismo, los derechos LGBT e instituciones de beneficencia para niños enfermos.</p><br/>

<p>Debido a diversos factores, como su impacto en el mundo de la música, su sostenido éxito comercial y su influencia mediática, Taylor Swift fue nombrada en 2019 como la «mujer de la década» por la revista Billboard, en tanto que en los American Music Awards fue reconocida como la «artista de la década».​ En el año 2023 fue declarada la «persona del año» por la Revista Time, convirtiéndose en la primera artista en aparecer en dicha portada sólo por su trabajo, mientras que Forbes la posicionó como la quinta mujer más poderosa del mundo, siendo la única cantante de todo el listado.​ En el año 2024, la Federación Internacional de la Industria Fonográfica (IFPI) reveló que Taylor Swift fue la artista femenina con mayores ventas de la década de 2010 y de lo que va de la década de 2020.</p>

            


            </div>


            <div id='hero' className=' d-flex flex-column mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-20 p-20 w-full sm:w-1/3'  >
                <div className="card bg-white border border-gray-200 rounded-lg overflow-hidden mt-3 mb-3 hover:animate-pulse" style={{ width: '25rem', }}>
                    <img src="https://people.com/thmb/JilgsMw-8UJonXli7nxs24zU3rg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/Taylor-Swift-Grammys-2024-020424-8-4ad649b979b34e6e955de2efd618b655.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-xl font-bold">Taylor Swift</h5>
                        <p className="card-text text-gray-700">
                            <strong>Nombre:</strong> Taylor Alison Swift <br />
                            <strong>Nacimiento:</strong> 13 de diciembre de 1989, West Reading, Pensilvania <br />
                            <strong>Nacionalidad:</strong> Estadounidense<br />
                            <strong>Religión:</strong> Cristianismo​</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-white">
                            <strong>Padres:</strong> Andrea Swift, Scott Swift<br />
                            <strong>Hermano:</strong> Austin Swift<br />
                            <strong>Abuela:</strong> Marjorie Finlay<br />
                            <strong>Pareja:</strong> Travis Kelce (2023-presente)
                        </li>
                        <li className="list-group-item bg-white">
                            <strong>Ocupación:</strong> Cantante, Compositora, Productora discográfica, Directora, Actriz, Empresaria.<br />
                            <strong>Años activa:</strong> 2004-presente<br />
                            <strong>Patrimonio:</strong> USD 1.000 millones (2023)2<br />
                            <strong>Género:</strong> pop ,country, rock, rock alternativo, country pop, Folk pop, electropop, synth pop, bubblegum pop, country rock.<br />
                            <strong>Instrumento:</strong> banjo, guitarra, piano, voz, ukelele.<br />
                            <strong> Discográficas:</strong> Big Machine Records (2006-2018), Republic Records (2018-presente) Taylor Swift Productions, Inc.

                        </li>
                        <li className="list-group-item bg-white">
                            <p><strong>Firma:</strong></p>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Taylor_Swift_Signature.png" className="card-img-top" alt="..." />

                        </li>
                    </ul>

                </div>


            </div>
        </div>






        <div className=' border-y-4 py-4 shadow w-full p-0 flex flex-col sm:flex-row justify-center m-0 mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-20 '>

<div className=' icons animate-pulse p-0 m-0 animate-infinite mb-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-wrap justify-center' >

<a href="https://www.instagram.com/taylorswift/" className="block px-4 py-2 text-gray-700" target="_blank" rel="noopener noreferrer" role="menuitem" tabindex="-1" id="user-menu-item-0"><FaInstagram className="flex-grow"/></a>
<a href="https://www.tiktok.com/@taylorswift" className="block px-4 py-2  text-gray-700" target="_blank" rel="noopener noreferrer" role="menuitem" tabindex="-1" id="user-menu-item-0"><FaTiktok className="flex-grow"/></a>
<a href="https://x.com/taylorswift13" className="block px-4 py-2 text-gray-700" target="_blank" rel="noopener noreferrer" role="menuitem" tabindex="-1" id="user-menu-item-0"><FaTwitter className="flex-grow"/></a>
<a href="https://www.snapchat.com/add/taylorswift" className="block px-4 py-2 text-gray-700" target="_blank" rel="noopener noreferrer" role="menuitem" tabindex="-1" id="user-menu-item-0"><FaSnapchat className="flex-grow"/></a>
<a href="https://web.facebook.com/TaylorSwift/" className="block px-4 py-2  text-gray-700" target="_blank" rel="noopener noreferrer" role="menuitem" tabindex="-1" id="user-menu-item-0"><FaFacebook className="flex-grow"/></a>
<a href="https://taylorswift.tumblr.com/" className="block px-4 py-2 text-gray-700" target="_blank" rel="noopener noreferrer" role="menuitem" tabindex="-1" id="user-menu-item-0"><FaTumblr className="flex-grow"/></a>
<a href="https://www.taylorswift.com/" className="block px-4 py-2 text-gray-700" target="_blank" rel="noopener noreferrer" role="menuitem" tabindex="-1" id="user-menu-item-0"><CgWebsite className="flex-grow"/></a>


</div>



</div >





    </>
}
     







