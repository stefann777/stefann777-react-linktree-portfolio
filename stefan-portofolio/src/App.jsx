import React from 'react';
import './App.css';
import imagineaMea from './assets/1.jpg';
import { useState, useEffect } from 'react';

function App() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    const [arataProiecte, setArataProiecte] = useState(false);
    const schimbaStarea = () => {
        setArataProiecte(!arataProiecte);
    };
    return (
        <>
            <button
                onClick={toggleTheme}
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    zIndex: 1000
                }}
            >
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <div className="container">
                <div className="profil">
                    <img
                        src={imagineaMea}
                        alt="Poza de profil a lui Ștefan"
                        className="poza-profil"
                    />
                    <h1>Gogea Stefan-Daniel</h1>
                </div>
                <div className="linkuri">
                    <a
                        className="button-link"
                        href="/cv-gogea-stefan.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CV
                    </a>
                    <a href="https://www.linkedin.com/in/gogea-stefan-2b4a26241/" className="button-link">LinkedIn</a>
                    <a href="https://github.com/stefann777" className="button-link">GitHub</a>
    
                <button className="button-link" onClick = {schimbaStarea}> 
                    {arataProiecte ? 'Proiecte' : 'Proiecte'}
                </button>   
                </div>
                
                {arataProiecte && (
                <div className="lista-proiecte fade-in">
                    <a href="https://stefann777.github.io/blog-preview-card/" target="_blank" rel ="noreferrer" className ="button-link">
                        Blog Preview Card
                    </a>
                    <a href="https://stefann777.github.io/social-links-profile-card/" target="_blank" rel ="noreferrer" className ="button-link">
                        Social Links Profile
                    </a>
                    <a href="https://stefann777.github.io/nft-card/" target="_blank" rel ="noreferrer" className ="button-link">
                        NFT Card
                    </a>
                    <a href="https://stefann777.github.io/result-sum/" target="_blank" rel ="noreferrer" className ="button-link">
                        Results Summary
                    </a>
                </div>
                )}
                
            </div>
        </>
    )
}

export default App