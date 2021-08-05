import React from "react"

const AboutMe = ({ }) => {  
    return (
    <div className={`general-container aboutme`}>
        <div className={`white-container`}>
            <div className="aboutme-row">
                <div className="aboutme-col img">
                    <img src={'/images/me.jpg'} alt=" "/>
                </div>
                <div className="aboutme-col">
                    <h2>Hi, I'm Paolo Munna</h2>
                    <p>I’m a Milan-based UI/UX designer interested in designing products that bring together creativity and pragmatism.
                        <br/>
                        I started my journey as a front-end developer, later on I got into creative design and user behaviour. I'm influenced by art, anthropology and motion design
                        <br /><br />
                        I've graduated in information technology at ITSOS Marie Curie, and web design at Galdus.
                        <br/>
                        I have worked for <a href="https://ies-italia.it/it/">IES Italia</a>, <a href="https://www.urbanfitness.it/">Urban Fitness</a> and <a href="https://www.bemind.me/">Bemind</a>. 
                        <br />
                        <span class="mini">Also I love every single dog in the world.</span>
                    </p>
                </div>
            </div>
        </div>
        <span className="blurrybg"></span>
    </div>
    )
}


export { AboutMe }
export default AboutMe
