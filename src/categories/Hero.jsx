import React from 'react'
import { useEffect, useRef } from 'react';
import "./hero.css"
import Spline from '@splinetool/react-spline';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Typewriter from 'typewriter-effect/dist/core';
import { Link as ScrollLink } from "react-scroll";
// import { SimpleSpline } from '../categories/SimpleSpline'


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
                    <h6>
                    <div className='circle pulse green'></div>
                     Available for work
                    </h6>
                    <h1>
                    We Are the Shield for Your Digital Assets
                    </h1>
                    <p>
                    Need a security audit, real-time threat analysis,
                     or a comprehensive security plan?<br/> We design and
                      implement your cybersecurity solutions from start to finish.
                    </p>
                    <button>Get in touch</button>
                    <ScrollLink
                        to="services"
                        smooth={true}
                        duration={100}
                        className="link"
                    >

                    </ScrollLink>
                </div>

            </div>


        </div>

    )
}
