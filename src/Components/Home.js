import styled from 'styled-components';
import About from './About';
import Technology from './Technology';
import Projects from './Projects';
import { DotLottiePlayer } from '@dotlottie/react-player';

function Home() {
    return (
        <div>
        {/* <Content> */}
        {/* Home Page */}
        <Container id='home'>
            <HomeLeft>
                <img src='/Images/Google-DSC-Lockup-LeftAligned-Chapter.269ee91a8ab3da257401.png' alt='404! Element Not found.'/>
                {/* <DotLottiePlayer src="https://lottie.host/9f064e2b-b5c7-4307-8110-7394b5f4765e/6nU4WWc86h.lottie" background="transparent" speed="2" style={{width: '300px', height: '300px'}} direction="1" mode="normal" autoplay loop="false" renderer='svg'></DotLottiePlayer> */}
                <h3 className='font-bold text-xl '>Welcome to Google DSC at ABES Engineering College, Ghaziabad</h3>
                <h3 className='font-semibold text-xl'>Happy Developing!</h3>
            </HomeLeft>
            <HomeRight>
                <img src='/Images/HomePage.png' alt='Oh!' />
            </HomeRight>
            
        </Container>

        {/* About Page */}
        <About />

        {/* </Content> */}
        <HomeContent >
            <h2 className='pt-32 underline underline-offset-4 decoration-2 font-bold text-4xl'>What We Do ?</h2>
            <h3 className='font-semibold'>We, At GDSC ABESEC Aim To Bridge The Gap Between Theory And Practical Applications For Student Developers. We Do This By Organizing Events, Workshops, Competitions And Much More!</h3>
                {/* <img src='/Images/1516859123612.jpeg' alt='404! Element Not found.'/>     */}
         </HomeContent>
            
            <Technology />
            <Projects />
        </div>
    )
}

export default Home;


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 50px;
    justify-content: center;
    align-items: center;
    background:url("/Images/Copy of Copy of dsc-ecosystem-banners-linkedin-blue (1).webp");
    background-color: white ;
    
    h3{
        color:black;
    }

    @media (max-width: 756px)
    {
        flex-direction: column;
        align-items: center;
    }
`;
const HomeLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    margin-right: 40px;
    color: #7e7e7e;
    img{
        width: 500px;
        fit-content: contain;
        filter: contrast(100%) saturate(150%) ;
        -webkit-filter: contrast(100%);
    }
    h3{
        margin-top: 20px;
    }
    @media (max-width: 756px)
    {
        margin-right: 10px;
        img{
            width: 300px;
        }
        h3{
            font-size: 0.8em;
        }
    }
`;
const HomeRight = styled.div`
    img{
        margin: 10px;
        width: 450px;
        fit-content: contain;
    }
    @media (max-width: 756px)
    {
        img{
            width: 250px;
        }
    }
`;
const HomeContent= styled.div`

background:url("/Images/1.png")no-repeat ;
// background-attachment: fixed; 
background-size: 100% 100%;
height:60vh;
width:100%;
padding:10px;
// margin-top:10px;
h2{
    text-align:center;

    max-width: 47%;
    margin: 24px auto;
    
}
h3{
    text-align:center;
    // font-size:rem;
    max-width: 47%;
    margin: auto;
    line-height: 25px;
}

`