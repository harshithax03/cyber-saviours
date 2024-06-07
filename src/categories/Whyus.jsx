import React from 'react'
import "./whyus.css"
import { Minus, Sword, ShieldCheck, Gear } from '@phosphor-icons/react'


export const Whyus = () => {
    const info = [
        {
            head: "Threat-Proof Solutions",
            descr: `Our defense mechanisms are in a constant state of evolution, 
            ensuring an impenetrable shield against emerging cyber threats.`,
        },
        {
            head: "Cutting-edge Defense",
            descr: `We continuously pioneer new approaches to strengthen your digital defenses, 
            with the latest innovations in cybersecurity.`,
        },
        {
            head: "Dynamic Security Solutions",
            descr: `With a focus on continual improvement, we offer dynamic security 
            solutions that adapt and evolve alongside evolving cyber risks.`,
        },

    ]
    return (
        <div className='why-us-container'>
            <div className='section-heading'>
                <Minus size={46} color="#FFFFFF" weight="thin" />
                About us
            </div>
            <div className='section-info'>
                <div className='section-description'>
                    <h3>Empowering You with Reliable,
                        Expert Services You Can Trust
                    </h3>
                <div className='section-logo ss-screen'></div>

                    <div className='description-container'>
                        <div className='descr-icons'>
                            <div className='svg'>
                                <Sword size={32} color="#e8e8e8"  />
                                <div className='vertical'></div>
                            </div>
                            <div className='svg'>
                                <ShieldCheck size={32} color="#e8e8e8"  />
                                <div className='vertical'></div>

                            </div>
                            <div className=''>
                            <Gear size={32} color="#e8e8e8" />


                            </div>

                        </div>
                        <div className='descr-info'>
                            {info.map((i, index) => (
                                <div key={index}>
                                    <h6>{i.head}</h6>
                                    <p>{i.descr}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
                <div className='section-logo lg-screen'></div>
            </div>














            <div className='gradient g-1'></div>
            <div className='gradient g-2'>
            </div>
            {/* <div className='why-blob1'></div> */}

        </div>
    )
}

















