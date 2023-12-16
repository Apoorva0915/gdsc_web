import React from 'react'
import styled from 'styled-components';

const Projects = () => {
  return (
    <div>
        <Container className='mt-24'>
            
        <div class="projecthome" id="PROJECT"><h1 class="project-head" className='text-4xl font-bold'>PROJECTS</h1>
        <p className='text-gray-700 font-medium tracking-tight text-lg'>Building real time solutions to tackle real world problems. Our projects speak themselves of the calibre we hold.</p>
        <a href="https://github.com/Developer-Students-Club-ABESEC" target="_blank" rel="noreferrer">
            <button class="project-button text-lg font-bold tracking-wide">View Projects</button>
        </a></div>
        </Container>
    </div>
  )
}

export default Projects

const Container=styled.div`
/* .projects{
    height:100vh;
    background-color: green;
} */
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
.projecthome {
}
.projecthome h1 {

    font-size: 50px;
    line-height: 59px;
    text-align: center;
    padding: 18px;
}
.projecthome p {

 
    text-align: center;

    max-width: 50%;
    margin: auto;
    padding-bottom: 15px;
}

.project-button {

    border-radius: 4px;
    font-style: normal;
    display: flex;
    justify-content: center;
    padding: 10px 16px;
    margin: 10px auto;
    border: none;
    align-items: center;
    line-height: 25px;
    text-decoration: none;
    text-align: center;
    background-image: initial;
    background-color: rgb(3, 114, 189);
    color: rgb(232, 230, 227);
}

button{
    background-color: rgb(20, 97, 220) !important;
}
button:hover{
    background-color: #DB4437!important;
}
a{
    text-decoration: none;
}


@media screen and (max-width:768px){
    .projecthome p{
        font-size: 17px;
        max-width: 90%;
    }

    .projecthome button{
        border: none;
        border-radius: 5px;
    }


}
`
