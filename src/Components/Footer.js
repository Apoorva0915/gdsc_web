import React from 'react';
import styled from 'styled-components';
import LinkedInLogo from './LinkedInLogo';
import GithubLogo from './GithubLogo';
import InstagramLogo from './InstagramLogo';

function Footer() {
    return (
        <Container>
            <FooterImg>
                <img src="./Images/Google-DSC-Lockup-LeftAligned-Chapter.269ee91a8ab3da257401.png" alt="404! Element Not Found" />
                <p>&copy;{(new Date().getFullYear())}| All Rights Reserved</p>
                <p>Engineered By Technical Team.</p>
                <p>Powered By Google</p>
            </FooterImg>
            <QuickLinks>
                <h2>Quick Links:</h2>
                <ul>
                    <li><a href="https://gdsc.community.dev/chapters/">Chapters</a></li>
                    <li><a href="https://gdsc.community.dev/events/#/list">Upcoming events</a></li>
                    <li><a href="https://developers.google.com/community/gdsc">More About DSC</a></li>
                    <li><a href="https://gdsc.community.dev/participation-terms/">Participation Terms</a></li>
                    <li><a href="https://policies.google.com/privacy">Privacy</a></li>
                    <li><a href="https://policies.google.com/terms">Terms</a></li>
                </ul>
            </QuickLinks>
            <Social>
                <h2>Connect with us At:</h2>
                <Icons>
                    <a href="https://www.instagram.com/gdsc.abesec/" id="insta-a"><InstagramLogo /></a>
                    <a href="https://www.linkedin.com/company/dsc-abesec/" id="linkedin-a"><LinkedInLogo /></a>
                    <a href="https://github.com/Developer-Students-Club-ABESEC" id="github-a"><GithubLogo /></a>
                </Icons>
            </Social>
        </Container>
    );
}

export default Footer;

const Container = styled.div`
    display: flex;
    margin:10px 0;
    padding: 40px 50px 40px 50px; 
    justify-content: center;
    border-top: 1px solid lightgrey;
    @media (max-width: 756px)
     {
        flex-direction: column-reverse;
        margin-bottom: 70px;
        padding: 0 20px 10px 20px;
     }
`;

const FooterImg = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #5f6368;
    font-size: 0.8em;
    font-weight: 600;

    img{
        margin-bottom: 20px;
        width: 100%;
        max-width: 250px;
        fit-content: contain;
    }
    
    @media (max-width: 756px)
     {
        width: 100%;
     }
`;

const QuickLinks = styled(FooterImg)`
    width: 25vw;
    align-items: flex-start;
    a{
        text-decoration: none;
        color: #5f6368;   
    }
    a:hover{
        color: #4285F4;
    }
    li{
        margin-top: 5px;
    }
    ul{
        margin-left: 20px;
    }
    @media (max-width: 756px)
     {
        margin-top: 20px;
        width: 100%;
     }
`;

const Social = styled(FooterImg)`
    width: 25vw;
    @media (max-width: 756px)
    {
        margin-top: 20px;
        width: 100%;
    }
`;

const Icons = styled.div`
    display: flex;
    padding: 10px;
    gap: 8px;
    justify-content: center;
    a {
        cursor: pointer;
    }


`;
