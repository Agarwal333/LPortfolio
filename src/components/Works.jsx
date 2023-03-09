import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  background: url("/images/Bg3.png");
  background-repeat: no-repeat;
  background-size: cover;
`

const Works = ()=>{
    return(
        <Section className="projectsContainer">
          <ProjectCard
          title= "Yes to life!"
          imageURL = "../images/Web1.png"
          visitLink = "https://agarwal333.github.io/yescode2/"/>
          <ProjectCard
          title= "Wordle-game"
          imageURL = "../images/Web2.png"
          visitLink = "https://agarwal333.github.io/Wordle-game/"/>
          <ProjectCard
          title= "DDS"
          imageURL = "../images/Web3.png"
          visitLink = "https://dingdongenglishschool.com/"/>
          <ProjectCard
          title= "Card"
          imageURL = "../images/Web1.png"
          visitLink = "View the website"/>
          <ProjectCard
          title= "Card"
          imageURL = "../images/Web1.png"
          visitLink = "View the website"/>
          <ProjectCard
          title= "Card"
          imageURL = "../images/Web1.png"
          visitLink = "View the website"/>
        </Section>
    )
}

export default Works;