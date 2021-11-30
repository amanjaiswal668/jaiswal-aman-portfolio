import React from 'react'
import './App.css';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header, About } from './containers/exportContainers';
import { CTA, Brand, Navbar } from './components/exportComponent';

function App() {
    return (<
        div className="App" >
        <div className="gradient__bg">
            <Navbar />
            <Header />

        </div>
        <Brand />
        <About />
        <CTA />
        <Blog />
        <Footer />

    </div>
    );
}

export default App;