import React from "react";
import styled from "styled-components";
import '../App.css';


const VerticalSkill = styled.div`
  writing-mode: vertical-lr;
    color: white;
    position: relative;
    margin-top: 20px;
    font-size: 50px;
    background-clip: text;
    background-image: linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f);
    color: #000119;
    font-weight: 700;
    letter-spacing: calc(1em / 8);
    padding: calc(--stroke-width / 2);
    -webkit-text-stroke-color: transparent;
    -webkit-text-stroke-width: calc(1em / 16); 
`
const Skills = styled.div`
    display: flex;
    justify-content: centre;
    flex-direction: column;
`


const TiltCard = ()=>{
    return(
        <>
           <VerticalSkill>
              I am good at...
            </VerticalSkill>
            <Skills>
            <section className="skills">
                <span>CSS</span>
                <span>|</span>
                <span>HTML</span>
                <span>|</span>
                <span>Javascript</span>
            </section>
            <section className="skills">
                <span>Figma</span>
                <span>|</span>
                <span>React</span>
            </section>
            <section className="skills">
                <span>Three js</span>
                <span>|</span>
                <span>Blender</span>
            </section>
            <section className="skills">
                <span>GitHub</span>
                <span>|</span>
                <span>Angular</span>
            </section>
            </Skills>
            
           
            
        </>
    )
}

export default TiltCard;