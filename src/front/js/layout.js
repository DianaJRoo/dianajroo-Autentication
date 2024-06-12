import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Hero } from "./pages/Hero";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LogIn } from "./pages/logIn";
import { SignUp } from "./pages/signUp";
import { Profile } from "./pages/profile";



import { Biografia } from "./inicio/biografia";
import { Discografia } from "./inicio/discografia";
import { Videos } from "./inicio/videos";

import { Lover } from "./Discos/lover";


import { Pista1 } from "./Discos/letrasLover/pista1";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Videos />} path="/videos" />
                        <Route element={<Lover />} path="/lover" />

                        <Route element={<Discografia />} path="/discografia" />
                        <Route element={<LogIn />} path="/login" />
                        <Route element={<SignUp />} path="/signup" />
                        <Route element={<Profile />} path="/profile" />

                        <Route element={<Biografia />} path="/biografia" />
                        <Route element={<Hero />} path="/hero" />
                        
                       
                        <Route element={<h1>Not found!</h1>} />

                        <Route element={<Pista1 />} path="/pista1" />


                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
