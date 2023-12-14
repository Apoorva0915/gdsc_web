import React from 'react'
import styled from 'styled-components';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const Technology = () => {
    return (
    <Container>

        <div style={{width:'80vb',}}>
        <DotLottiePlayer style={{marginLeft: '64vb', marginRight: '50vb',}} src="/Images/technology.lottie" autoplay loop>
        </DotLottiePlayer>
        </div>

        <div className='streams'>
            <ul className="outer">
                <li className="inner"><img src="/Images/download.png" alt="" />
                    <h3 className="text-gray">Machine Learning</h3></li>
                    <li className="inner"><img src="/Images/download (1).png" alt="" />
                    <h3 className="text-gray">Web Developement</h3></li>
                    <li className="inner">
                    <img src="/Images/download (2).png" alt="" />
                    <h3 className="text-gray">Cloud Network</h3></li>
                    <li className="inner"><img src="/Images/download (3).png" alt="" />
                    <h3 className="text-gray">App Development</h3>
                </li>
            </ul>
        </div>
    </Container>   
    )
}



export default Technology

const Container = styled.div`
.streams .outer {
    margin: 40px 0;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    width:100%;
}
.streams .outer .inner{
    align-items:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
}
 
`