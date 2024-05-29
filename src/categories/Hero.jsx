import React from 'react'
import { useEffect, useRef } from 'react';
import "./hero.css"
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Typewriter from 'typewriter-effect/dist/core';
import { Link as ScrollLink } from "react-scroll";

export const Hero = () => {
    const typewriterRef = useRef(null);

    useEffect(() => {
        if (typewriterRef.current) {
            const typewriter = new Typewriter(typewriterRef.current, {
                loop: true,
                delay: 225,
                deleteSpeed: 70,
            });

            typewriter
                .typeString('Cyber Guardians')
                .pauseFor(2000)
                .deleteAll()
                .typeString('Cyber Saviours')
                .pauseFor(2000)
                .deleteAll()
                .start();
        }
    }, []);
    return (
        <div className='hero'>
            <div className='hero-container'>
                <div className='hero-description'>
                    <div className='gradient-background'></div>
                    <p>
                        Securing Tomorrow, Today<br />
                        Your Trusted <span ref={typewriterRef} className='typewriter'></span>
                    </p>
                    <ScrollLink
                        to="services" 
                        smooth={true}
                        duration={100}
                        className="link"
                    >
                     <button>Learn More <ArrowRight size={34} /></button>

                    </ScrollLink>
                </div>
                <div className='hero-logo'></div>
            </div>
            <div className='blob-effect b-one'></div>
            <div className='blob-effect b-two '></div>
           
        </div>
    )
}
