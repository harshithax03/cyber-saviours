import "./aboutUs.css"
import { Minus } from '@phosphor-icons/react'


export const AboutUs = () => {
    const info = 
             `Our defense mechanisms are designed to stay ahead of the curve,
             constantly evolving to provide an impenetrable shield against the latest
              and most sophisticated cyber threats. By continuously pioneering new
               approaches, we ensure that your digital defenses are not only strong
                but also cutting-edge, leveraging the latest innovations in 
                cybersecurity. We understand that cyber risks are always changing,
                 and that's why our security solutions are dynamic, adapting and 
                 evolving in real-time to meet these challenges head-on. With a
                  relentless focus on continual improvement, we strive to offer 
                  you peace of mind, knowing that your digital assets are protected
                   by the most advanced and responsive security measures available`;
        
      

    
    return (
        <div className='aboutContainer'>
            <div className='sectionHead'>
                <Minus size={46} color="#1F1F1F" weight="thin" />
                About us
            </div>
            <div className='sectionInfo'>
                <div className='sectionText'>
                    <h3>Empowering You with Reliable,
                        Expert Services You Can Trust
                    </h3>
                <div className='section-logo ss-screen'></div>

                    <div className='description-container'>
                        <div className='descr-info'>
                              <p> {info}</p> 
                        </div>

                    </div>

                </div>
                <div className='section-logo lg-screen'></div>
            </div>


        </div>
    )
}

















