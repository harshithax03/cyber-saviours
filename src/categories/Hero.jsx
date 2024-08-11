import "./hero.css";


export const Hero = () => {
    // const typewriterRef = useRef(null);

    // useEffect(() => {
    //     if (typewriterRef.current) {
    //         const typewriter = new Typewriter(typewriterRef.current, {
    //             loop: true,
    //             delay: 225,
    //             deleteSpeed: 70,
    //         });

    //         typewriter
    //             .typeString('Cyber Guardians')
    //             .pauseFor(2000)
    //             .deleteAll()
    //             .typeString('Cyber Saviours')
    //             .pauseFor(2000)
    //             .deleteAll()
    //             .start();
    //     }
    // }, []);
    return (

        <div className='heroContainer'>
            <div className='heroInfo'>
                <h6>
                    <div className='circle pulse green'></div>
                    Available for work
                </h6>
                <h1>
                    We Are the <span>Shield</span> for Your Digital Assets
                </h1>
                <p>
                    Need a security audit, real-time threat analysis,
                    or a comprehensive security plan?<br /> We design and
                    implement your cybersecurity solutions from start to finish.
                </p>
                <button>Learn More</button>
                
            </div>

        </div>



    )
}
