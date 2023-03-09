import React from "react";
import styled from "styled-components";
import '../App.css';


const Section = styled.div`
  scroll-snap-align: center;
`
const Heading = styled.div`
    margin-top: 70px;
    height: 200px;
    font-size: 40px;
    & > h4{
        margin-top: 6px;
    }
`

const HiName = ()=>{
    return(
        <Section>
            <Heading>
                <section class="letterContainer">
                    <span class="bounceLetter">H</span>
                    <span class="bounceLetter">i;</span>
                </section>
                <section class="letterContainer">
                    <span class="bounceLetter">I</span>
                    <span class="bounceLetter">&nbsp;a</span>
                    <span class="bounceLetter">m</span>
                    <span class="bounceLetter">&nbsp;L</span>
                    <span class="bounceLetter">a</span>
                    <span class="bounceLetter">k</span>
                    <span class="bounceLetter">h</span>
                    <span class="bounceLetter">a</span>
                    <span class="bounceLetter">n</span>
                </section>
                <h4 class="bounceSentence">A front end web developer and UI/UX designer</h4>
            </Heading>
        </Section>
    )
}

export default HiName;




