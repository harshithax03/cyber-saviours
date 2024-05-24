import React from 'react'
import { useEffect, useRef } from 'react';
import "./hero.css"
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Typewriter from 'typewriter-effect/dist/core';

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
            <div className='doodle d1'></div>

            <div className='hero-container'>
                <div className='hero-logo'></div>
                <div className='hero-description'>
                    <p>
                        Securing Tomorrow, Today<br />
                        Your Trusted <span ref={typewriterRef} className='typewriter'></span>
                    </p>
                    <button>Learn More <ArrowRight size={34} /></button>
                </div>
            </div>

            <div className='doodle d2'></div>


        </div>
    )
}
