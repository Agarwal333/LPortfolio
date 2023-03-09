
import React from "react";
import '../App.css';


const ProjectCard = ({title, imageURL, visitLink})=>{
    return(
        <>
            <section className="mainContainer">
                <div class="card">
                    <div class="card__content">
                        <div class="card__front">
                        <p class="card__subtitle">{title}</p>
                          
                             <img src={imageURL} class="card__title"alt=""/>
                           
                        </div> 
                        <div class="card__back">
                        <p class="card__body">This would be some longer text that gives a description of the things from the other side I guess</p>
                        <a href={visitLink} target="_blank" rel="noreferrer">Visit the site</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectCard;